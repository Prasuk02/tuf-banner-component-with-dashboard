import LayoutSidebar from '@/components/dashboard/LayoutSidebar'
import React from 'react'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
  return (
    <main className='flex flex-row h-full w-full'>
      <LayoutSidebar/>
      <section className='px-8 py-5'>
        {children}
      </section>
    </main>
  )
}

export default DashboardLayout