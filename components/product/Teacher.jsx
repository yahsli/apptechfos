'use state'
import Image from "next/image"
import { useEffect, useState } from "react"
import { GET_TEACHER } from "@/app/api/product/product"
export default function Teacher({teacher_email}) {
  const [teacher,setTeacher] = useState({})
  
  const handleTeacher = async ()=>{
    console.log(teacher_email);
    try {
      const response = await GET_TEACHER(teacher_email)
      setTeacher(response)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    handleTeacher()
  },[teacher_email])
  return (
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
  )
}
