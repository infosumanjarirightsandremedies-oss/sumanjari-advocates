import { Suspense, type ComponentProps } from 'react'
import ServiceBlogs from '@/components/ServiceBlogs'

type DeferredServiceBlogsProps = Omit<ComponentProps<typeof ServiceBlogs>, 'posts'> & {
  posts: Promise<ComponentProps<typeof ServiceBlogs>['posts']>
}

async function ResolvedServiceBlogs({ posts, ...props }: DeferredServiceBlogsProps) {
  return <ServiceBlogs {...props} posts={await posts} />
}

export default function DeferredServiceBlogs(props: DeferredServiceBlogsProps) {
  return (
    <Suspense fallback={
      <div role="status" aria-label="Loading related articles" className="mb-16 min-h-64 animate-pulse motion-reduce:animate-none">
        <div className="mb-8 h-8 w-56 rounded-sm bg-gold-500/10" />
        <div className="h-48 rounded-sm bg-gold-500/10" />
      </div>
    }>
      <ResolvedServiceBlogs {...props} />
    </Suspense>
  )
}