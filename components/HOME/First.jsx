'use client'
import { useMutation } from "@tanstack/react-query";
import { CloudeCheck, Expert, PC, Person } from "../../svg";
import { useEffect ,useState} from "react";


export default function First() {
   const [data,setData] = useState({
    formation : '',
    users : '',
    authors : '',
   })
   const [isPending,setIsPending] = useState(true)
   const getData = async() => {
    try {
        setIsPending(true)
        const response = await fetch('/api/data',{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
            }

        })
        if(!response.ok){
            const error = await response.json()
            throw new Error(response.status+' '+error.message)
        }
        const d = await response.json()
        setData(d)
    } catch (error) {
        console.log(error);
    }finally{
        setIsPending(false)
    }
   }
   useEffect(()=>{
        getData()
   },[])
  return (
    <div className="flex items-center mt-5 gap-4 flex-wrap flex-xl-nowrap">
        <div className="w-full xl:w-1/2 flex items-center gap-4 flex-wrap flex-md-nowrap">
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-orange-50 w-100 w-md-50">
                <PC width={45} height={45} color={'orange'}/>
                <div className=''>
                    {isPending ? <h1 className="bg-gray-500 rounded py-2 w-[80px] animate-pulse"></h1> : <h1 className="mb-0 font-bold">{data.formation}</h1>}
                    <p  className="mb-0 font-medium text-gray-600">Coures en ligne</p>
                </div>
            </div>
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-gray-100 w-100 w-md-50">
                <Person width={50} height={50} color={'gray'}/>
                <div className=''>
                {isPending ? <h1 className="bg-gray-500 rounded py-2 w-[80px] animate-pulse"></h1> : <h1 className="mb-0 font-bold">{data.authors}</h1>}
                    <p  className="mb-0 font-medium text-gray-600">Formateur Expert</p>
                </div>
            </div>
        </div>
        <div className="w-full xl:w-1/2 flex items-center gap-4 flex-wrap flex-md-nowrap">
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-purple-200 w-100 w-md-50">
                <Expert width={45} height={45} color={'purple'}/>
                <div className=''>
                {isPending ? <h1 className="bg-gray-500 rounded py-2 w-[80px] animate-pulse"></h1> : <h1 className="mb-0 font-bold">{data.users}</h1>}
                    <p  className="mb-0 font-medium text-gray-600">Etudiant en ligne</p>
                </div>
            </div>
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-emerald-100 w-100 w-md-50">
                <CloudeCheck width={45} height={45} color={'blue'}/>
                <div className=''>
                  {isPending ? <h1 className="bg-gray-500 rounded py-2 w-[80px] animate-pulse"></h1> : <h1 className="mb-0 font-bold">{data.formation}</h1>}
                    <p  className="mb-0 font-medium text-gray-600">Formation certifié</p>
                </div>
            </div>
        </div>
    </div>
  )
}
