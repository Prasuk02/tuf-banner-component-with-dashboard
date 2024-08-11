import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <main className='flex flex-row items-center justify-between gap-x-12 bg-[#191919] px-10 py-7 rounded-xl'>
      <section className='flex flex-row items-center gap-x-4'>
        {/* Banner Image */}
        <Image
          src={'/assets/tuf-plus-logo.png'}
          alt='TUF-Plus-Logo'
          width={100}
          height={100}
          className='bg-[#fff9eb] px-2 py-5 rounded-md'
        />

        {/* Banner Description */}
        <p className='text-sm mt-1 text-[#bbbbbb]'>Curated learning, approach-wise solutions, personalized roadmaps, expert doubt assistance, and more! Curated learning, approach-wise solutions, personalized roadmaps, expert doubt assistance, and more! Curated learning, approach-wise solutions, personalized roadmaps, expert doubt assistance, and more!</p>
      </section>

      {/* Banner Link and Timer */}
      <section className='flex-shrink-0'>
        <Link href={'#'} className='bg-brand-primary px-5 py-3 text-sm text-white font-normal rounded-full'>Explore Deal</Link>
        <p className='text-[#eeeeee] mt-4 text-sm text-center'>Ends in 12:15:00</p>
      </section>
    </main>
  )
}

export default Banner