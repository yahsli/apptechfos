'use client'
import { ADD_RATING } from "@/app/api/product/product";
import { Rating } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Rating2({loading,id}) {
  const [evaluation,setEvaluation] = useState('')
  const {data:session,status} = useSession()
  const {data,mutate : add_rating ,isPending } = useMutation({
    mutationFn : ADD_RATING,
    onSuccess : () => {
        console.log('rating added')
    },
    onError : (error) => {
        console.log(error)
    }
  })
  const addRating = () => {
    if(session && session.user && session.user.email){
        console.log(session.user.email);
        add_rating(Number(evaluation), session.user.email, id);
    } else {
        console.log("Email is missing");
    }
  }
  return (
    <div className='mt-5'>
        <h1 className='mb-0 text-xl sm:text-2xl font-bold'>Toutes les évaluations</h1>
        <div className="flex mt-3 flex-col sm:flex-row gap-2">
            <div className="flex flex-col items-center justify-center w-full sm:w-4/12">
                <h1 className='mb-0 text-5xl font-bold'>4.5</h1>
                <Rating value={4} readOnly size="small"/>
                <p className="text-gray-500 mb-0 text-sm">Basé sur 153 (évaluations)</p>
            </div>
            <div className="w-full sm:w-8/12 flex flex-col gap-3">
                <div className="w-full flex gap-5 items-center">
                    <div className="w-8/12 h-[6px] rounded-full bg-blue-200 relative">
                        <div className="absolute h-full rounded-full bg-blue-500 top-0 left-0 w-full"></div>
                    </div>
                    <Rating value={5} readOnly size="small"/>
                </div>
                <div className="w-full flex gap-5 items-center">
                    <div className="w-8/12 h-[6px] rounded-full bg-blue-200 relative">
                        <div className="absolute h-full rounded-full bg-blue-500 top-0 left-0 w-8/12"></div>
                    </div>
                    <Rating value={4} readOnly size="small"/>
                </div>
                <div className="w-full flex gap-5 items-center">
                    <div className="w-8/12 h-[6px] rounded-full bg-blue-200 relative">
                        <div className="absolute h-full rounded-full bg-blue-500 top-0 left-0 w-6/12"></div>
                    </div>
                    <Rating value={3} readOnly size="small"/>
                </div>
                <div className="w-full flex gap-5 items-center">
                    <div className="w-8/12 h-[6px] rounded-full bg-blue-200 relative">
                        <div className="absolute h-full rounded-full bg-blue-500 top-0 left-0 w-4/12"></div>
                    </div>
                    <Rating value={2} readOnly size="small"/>
                </div>
                <div className="w-full flex gap-5 items-center">
                    <div className="w-8/12 h-[6px] rounded-full bg-blue-200 relative">
                        <div className="absolute h-full rounded-full bg-blue-500 top-0 left-0 w-2/12"></div>
                    </div>
                    <Rating value={1} readOnly size="small"/>
                </div>
            </div>
        </div>
        <div className="flex items-center mt-3 gap-3 flex-wrap">
            <p className="font-medium text-xl mb-0">Ajouter une évaluation : </p>
            <select value={evaluation} onChange={(e)=>setEvaluation(e.target.value)} name="" id="" className="px-4 py-2 rounded border-2 hover:border-blue-500 outline-none hover:cursor-pointer">
                <option value="" selected disabled>Séléctionnez une évaluation</option>
                <option value="5">5 étoiles</option>
                <option value="4">4 étoiles</option>
                <option value="3">3 étoiles</option>
                <option value="2">2 étoiles</option>
                <option value="1">1 étoiles</option>
            </select>
            <button onClick={()=>addRating()} className="px-4 py-2 bg-blue-500 rounded text-white font-medium">Add Evaluation</button>
        </div>
    </div>
  )
}
