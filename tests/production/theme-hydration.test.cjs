const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const React = require('react')
const { renderToString } = require('react-dom/server')
const ts = require('typescript')

function loadComponent(relativePath, dependencies = {}) {
  const source = fs.readFileSync(path.resolve(__dirname, '../..', relativePath), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  })
  const componentModule = { exports: {} }
  new Function('require', 'module', 'exports', compiled.outputText)(
    name => Object.hasOwn(dependencies, name) ? dependencies[name] : require(name),
    componentModule,
    componentModule.exports
  )
  return componentModule.exports
}

const provider = loadComponent('src/components/ThemeProvider.tsx')
const { default: ThemeToggle } = loadComponent('src/components/ThemeToggle.tsx', {
  './ThemeProvider': provider,
})

function renderInitialMarkup() {
  return renderToString(React.createElement(provider.ThemeProvider, null, React.createElement(ThemeToggle)))
}

for (const savedTheme of ['light', 'dark', 'invalid', null]) {
  test(`initial theme markup matches the server with saved preference ${savedTheme}`, () => {
    const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window')
    const originalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage')
    try {
      delete globalThis.window
      delete globalThis.localStorage
      const serverMarkup = renderInitialMarkup()
      globalThis.window = {}
      globalThis.localStorage = { getItem: () => savedTheme }
      assert.equal(renderInitialMarkup(), serverMarkup)
      assert.ok(serverMarkup.includes('Switch to light mode'))
    } finally {
      if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow)
      else delete globalThis.window
      if (originalStorage) Object.defineProperty(globalThis, 'localStorage', originalStorage)
      else delete globalThis.localStorage
    }
  })
}

test('initial theme render does not require accessible browser storage', () => {
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window')
  const originalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage')
  try {
    globalThis.window = {}
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      get() { throw new Error('Storage is unavailable') },
    })
    assert.ok(renderInitialMarkup().includes('Switch to light mode'))
  } finally {
    if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow)
    else delete globalThis.window
    if (originalStorage) Object.defineProperty(globalThis, 'localStorage', originalStorage)
    else delete globalThis.localStorage
  }
})