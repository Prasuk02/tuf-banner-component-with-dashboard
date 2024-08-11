import { Loader, RectangleEllipsis, Settings } from 'lucide-react'
import React from 'react'

type Props = {}

const LayoutSidebar = (props: Props) => {
  return (
    <main className='w-[200px] h-full border-r-[1px] flex flex-col justify-between px-4 py-6'>
      {/* Dashboard Sidebar */}
      <aside>
        {/* Sidebar header */}
        <h1 className='text-xl text-brand-primary font-black italic tracking-wide'>takeUforward</h1>
        <div className='flex flex-col gap-3 mt-5'>

          {/* Edit Banner - Sidebar Option */}
          <div className='flex flex-row items-center gap-2 hover:cursor-pointer bg-brand-primary text-white p-2 rounded-md'>
            <RectangleEllipsis />
            <p className='text-sm'>Banners</p>
          </div>

          {/* Coming Soon */}
          <div className='flex flex-row items-center gap-2 hover:cursor-pointer'>
            <Loader />
            <p className='text-sm'>Coming Soon</p>
          </div>
        </div>
      </aside>

      <section>
        {/* Settings Option */}
        <div className='flex flex-row items-center gap-2 hover:cursor-pointer'>
          <Settings />
          <p className='text-base'>Settings</p>
        </div>
      </section>
    </main>
  )
}

export default LayoutSidebar