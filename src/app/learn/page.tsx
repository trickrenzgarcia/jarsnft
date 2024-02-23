"use client"

import { PageNextButton } from './_components'

export default function Page() {
  return (
    <div className='w-full h-[2000px]'>
      <h1>Page Learn</h1>
      <PageNextButton title='Getting Started' href='/learn/getting-started' />
    </div>
  )
}