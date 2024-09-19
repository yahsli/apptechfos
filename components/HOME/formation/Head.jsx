'use client'
import React, { useRef } from 'react'
import { Search } from '../../../svg'
export default function Head() {
  const playerRef = useRef(null)
  const onStart = () => playerRef.current?.playFromBeginning()
  const onStop = (type) => playerRef.current?.goToFirstFrame()

  return (
    <div>
        <h1 className="mb-0 font-bold text-5xl text-center">Selectionnez une formation ?</h1>
        <p className='mb-0 text-gray-500 text-center'>N'hesitez pas à selectionnez une formation à partir ce composant</p>
        <div className='mt-3 border-2 hover:border-blue-500 rounded flex items-center px-3 py-1.5 w-2/12 gap-3 hover:cursor-pointer' onMouseEnter={onStart} onMouseLeave={onStop}>
            <Search width={15} height={15} color={'gray'}/>
            <span className='text-gray-500'>Search...</span>
        </div>
    </div>
  )
}
