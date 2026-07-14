'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-gold-500/35 dark:border-gold-500/40 bg-white/80 text-navy-900 shadow-sm hover:bg-parchment dark:bg-navy-800/60 dark:text-cream dark:hover:bg-navy-700/80 transition-colors"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5 text-gold-400" /> : <Moon className="w-5 h-5 text-gold-600" />}
    </button>
  )
}
