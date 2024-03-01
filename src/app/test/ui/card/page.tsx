import React from 'react'

export default function UICard() {
  return (
    <div className='p-4 flex'>
        <div className='bg-blue-900 w-fit h-[150px]'>
          <div className='flex group h-full'>
            <div className="w-[150px] h-full z-10">Image card</div>
            <div className="w-[150px] h-full hidden group-hover:flex absolute top-0 left-0 z-20">show when hover the Image card</div>
          </div>
        </div>
        <div className='bg-blue-900 w-fit h-[150px]'>
          <div className='flex group h-full'>
            <div className="w-[150px] h-full z-10">Image card</div>
            <div className="w-[150px] h-full hidden group-hover:flex absolute top-0 left-0 z-20">show when hover the Image card</div>
          </div>
        </div>
    </div>
  )
}
