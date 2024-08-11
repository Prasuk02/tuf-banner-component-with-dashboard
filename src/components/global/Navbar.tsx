import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <main className='flex flex-row items-center justify-between px-16 py-5 shadow-md'>
        {/* Nav Branding */}
        <h1 
          className='text-3xl text-brand-primary font-black italic tracking-wide'>
            takeUforward 
            <span className='text-sm text-black font-bold'>&nbsp;(SWE Round 1)</span>
        </h1>

        {/* Dashboard Button */}
        <div>
          <Link 
            href={"#"} 
            className='bg-brand-primary px-5 py-2 text-sm text-white font-normal rounded-md'>
              Dashboard
          </Link>
        </div>
      </main>
    </>
  )
}

export default Navbar