'use client'
import React, { useRef } from 'react'
import Category from '../../icons/Category'

export default function Head() {
  const playerRef = useRef(null)
  const onStart = () => playerRef.current?.playFromBeginning()
  const onStop = (type) => playerRef.current?.goToFirstFrame()

  return (
    <div>
        <h1 className="mb-0 font-bold text-5xl text-center">Selectionnez une formation ?</h1>
        <p className='mb-0 text-gray-500 text-center'>N'hesitez pas à selectionnez une formation à partir ce composant</p>
        <div className='mt-3 flex gap-1 rounded border-2 outline-none px-3 hover:border-gray-900 font-medium w-fit' onMouseEnter={onStart} onMouseLeave={onStop}>
            <Category playerRef={playerRef} />
            <select className='py-2 outline-none'>
                <option value="">Tous les types</option>
                <option value="">Type 1</option>
                <option value="">Type 2</option>
            </select>
        </div>
    </div>
  )
}
