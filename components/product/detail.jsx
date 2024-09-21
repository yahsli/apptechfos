'use client'
import { useEffect, useState } from "react";
import { Calendar, Category, Logout, Order, Person, Star, StarFill } from "../../svg";
import { GET_AUTHOR } from "@/app/api/product/product";


export default function Detail({id,date,n_page,n_cours,language,category,loading}) {
  const [pdate,setPdate] = useState()
  const [isPending,setIsPending] = useState(true)
  const [author_name,setAuthor_name] = useState('')
  const get_author = async() => {
     setIsPending(true)
     const res =await GET_AUTHOR(id)
     setAuthor_name(res?.name)  
     setIsPending(false)
  }
  const handleDate = (params) => {
    const tomp = new Date(date);
    const formattedDate = tomp.toLocaleDateString('fr-FR');
    setPdate(formattedDate)
  }
  useEffect(()=>{
    handleDate()
  },[date])
  useEffect(()=>{
    get_author()
  },[id])
  return (
    <div className="mt-5">
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Calendar width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Publié en :</h4> {!loading ? <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">{pdate}</p> : <div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Person width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Publié par :</h4> {!loading ? <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">{isPending ? 'loading...' : author_name}</p> : <div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
        </div>
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Order width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">N° de pages :</h4> {!loading ? <p className="mb-0 font-medium text-sm text-red-500">{n_page}</p> : <div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Logout width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Visité par :</h4> {!loading ? <p className="mb-0 font-medium text-sm text-red-500">86k</p>:<div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
        </div>
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><span style={{fontFamily : 'fantasy'}} className="text-blue-500">ABC</span> <h4 className="mb-0 font-medium text-sm">La langue :</h4> {!loading ? <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">{language}</p> : <div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Star size={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Rating :</h4> {!loading ? <p className="mb-0 font-medium text-sm text-yellow-500">4.5 (500)</p> : <div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
        </div>
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Calendar width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">N° de cours :</h4> {!loading ? <p  className="mb-0 font-medium text-sm text-red-500">{n_cours}</p> : <div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Category size={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Category :</h4> {!loading ? <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">{category}</p> : <div className="rounded py-1 bg-gray-200 animate-pulse w-2/12"></div>}</div>
        </div>
    </div>
  )
}
