export default function ServiceLoading() {
  return (
    <main role="status" aria-label="Loading service page" className="relative min-h-screen px-6 pb-20 pt-32 md:pt-36">
      <div aria-hidden="true" className="mx-auto max-w-7xl animate-pulse motion-reduce:animate-none">
        <div className="mb-12 h-4 w-40 rounded-sm bg-gold-500/15" />
        <div className="mb-6 h-12 w-full max-w-2xl rounded-sm bg-gold-500/15" />
        <div className="mb-3 h-5 w-full max-w-3xl rounded-sm bg-gold-500/10" />
        <div className="mb-10 h-5 w-3/4 max-w-xl rounded-sm bg-gold-500/10" />
        <div className="h-12 w-48 rounded-sm bg-gold-500/15" />
      </div>
    </main>
  )
}