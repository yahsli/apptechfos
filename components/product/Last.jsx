'use client'
import Teacher from './Teacher'
import Rating2 from './Rating'
import { useState } from 'react'

export default function Last({teacher_email}) {
  const [show,setShow] = useState(false)
  return (
    <div className='mt-5 pt-5 border-t-2'>
        <div className='flex gap-4'>
            <button className={`bg-blue-100 text-blue-500 rounded px-4 py-2 ${!show ? 'border-2 border-blue-500' : 'border-0 border-none'}`} onClick={()=>setShow(false)}>Formateur</button>
            <button className={`bg-blue-100 text-blue-500 rounded px-4 py-2 ${show ? 'border-2 border-blue-500' : 'border-0 border-none'}`} onClick={()=>setShow(true)}>Evaluation</button>
        </div>
        {
            !show ? <Teacher teacher_email = {teacher_email}/> : <Rating2/>
        }
    </div>
  )
}
