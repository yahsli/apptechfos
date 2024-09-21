'use state'
import Image from "next/image"
import { useEffect, useState } from "react"
import { GET_TEACHER } from "@/app/api/product/product"
import { ImageIcon } from "../../svg"
export default function Teacher({teacher_email,loading}) {
  const [teacher,setTeacher] = useState({})
  
  const handleTeacher = async ()=>{
    try {
      const response = await GET_TEACHER(teacher_email)
      setTeacher(response)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    handleTeacher()
  },[teacher_email])
  return (
    !loading ? (
      <div className="flex gap-3 mt-5 flex-col sm:flex-row">
          <div className="w-full sm:w-3/12">
              <Image src = {'/photo/formateur.jpg'} width={400} height={400} className="rounded" alt="teacher"/>
          </div>
          <div className="w-full sm:w-9/12">
              <h1 className="mb-0 font-bold text-2xl">{teacher && teacher.name}</h1>
              <p className="font-medium mb-0 text-gray-500 text-sm ">{teacher && teacher.email}</p>
              <p  className="mb-0 text-gray-500 mt-3 text-sm">{teacher && teacher.description}</p>
          </div>
      </div>
    ) : (
      <div className="flex gap-3 mt-5 flex-col sm:flex-row">
          <div className="w-full sm:w-3/12 flex justify-center items-center h-[200px] bg-gray-200 animate-pulse rounded">
              <ImageIcon size={25} color={'black'}/>
          </div>
          <div className="w-full sm:w-9/12">
              <h1 className="mb-0 font-bold text-2xl py-4 rounded bg-gray-200 animate-pulse w-4/12"></h1>
              <div className="bg-gray-200 mt-3 animate-pulse py-1.5 rounded w-6/12"></div>
              <p  className="bg-gray-200 animate-pulse py-1.5 rounded w-full mt-5"></p>
              <p  className="bg-gray-200 animate-pulse py-1.5 rounded w-full mt-1"></p>
              <p  className="bg-gray-200 animate-pulse py-1.5 rounded w-full mt-1"></p>
              <p  className="bg-gray-200 animate-pulse py-1.5 rounded w-full mt-1"></p>
              <p  className="bg-gray-200 animate-pulse py-1.5 rounded w-full mt-1"></p>
          </div>
      </div>
    )
  )
}
