import type { ReactNode } from 'react'
import ServiceContactBar from '@/components/ServiceContactBar'

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0" data-service-content>
        {children}
      </div>
      <ServiceContactBar />
    </>
  )
}
