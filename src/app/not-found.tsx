import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Opps! Error 404"
}

export default function notfound() {
  return (
    <div className='text-center w-full grid place-items-center gap-6 my-20 lg:px-28 p-10'>
        <h1 className="lg:text-[16em] md:text-[10rem] text-[5em] leading-none w-fit">404</h1>
        <p>I guess you found the wrong page but don&apos;t worry my friend try to search something else</p>
    </div>
  )
}
