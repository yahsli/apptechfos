'use client'
import { ADD_RATING, CHECK, GET_RATING } from "@/app/api/product/product";
import { Rating } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import Alert from "../Alert";
import { alertContext } from "../providers/FirstProvider";


export default function Rating2({loading,id}) {
  const [pending,setPending] = useState(true)
  const {alert,showAlert,hideAlert,handleType,handleMessage,handleTitle} = useContext(alertContext)
  const [evaluation,setEvaluation] = useState('')
  const [access,setAccess] = useState(false)
  const [stat,setStat] = useState({
    count : 0,
    moy : 0,
  })
  const {data:session,status} = useSession()
  const {data,mutate : add_rating ,isPending } = useMutation({
    mutationFn : ADD_RATING,
    onSuccess : (res) => {
        handleTitle("Evaluation est ajouté correctement")
        handleMessage("vous avez ajouté une évaluation pour ce produit")
        handleType(true)
        showAlert()
        setTimeout(() => {
            hideAlert()
        }, 4000);
        getRating()
    },
    onError : (error) => {
        handleTitle('Opération échoué')
        handleMessage("l'opération ajouter une évaluation est échoué")
        handleType(true)
        showAlert()
        setTimeout(() => {
            hideAlert()
        }, 4000);
    }
  })
  const check = async () => {
     const res = await CHECK(session?.user.email,id)
     if(res.message){
        setAccess(false)
     }else{
        setAccess(true)
     }
  }
  const addRating = () => {
    if(evaluation === '' || evaluation === '0'){
        handleTitle("S'il vous plait séléctionnez une évaluation")
        handleMessage('à partir select option vous pouvez séléctionnez une évaluation')
        handleType(false)
        showAlert()
        setTimeout(() => {
            hideAlert()
        }, 4000);
    
  }else{
    add_rating({evaluation :Number(evaluation),email:session.user.email, id});
    setAccess(false)
  }
  }
  const getRating = async () => {
    setPending(true)
    const res = await GET_RATING(id);
    const avg = Number(res.moy?.avg || 0);  
    setStat(prev => ({
      ...prev,
      count: res.count?.count || 0,   
      moy: avg.toFixed(1),           
    }));
    setPending(false)
  };
  
  useEffect(()=>{
    check()
    getRating()
  },[])
  return (
    <div className='mt-5'>
        {alert.show && <Alert title={alert.title} para={alert.message} type={alert.type}/>}
        <h1 className='mb-0 text-xl sm:text-2xl font-bold'>Toutes les évaluations</h1>
        <div className="flex mt-3 flex-col sm:flex-row gap-2">
            <div className="flex flex-col items-center justify-center w-full sm:w-4/12">
                {!pending ? <h1 className='mb-0 text-5xl font-bold'>{stat.moy}</h1> : <div className="py-3 px-3 w-4/12 bg-gray-200 animate-pulse rounded"></div>}
                <Rating value={4} readOnly size="small"/>
                <p className="text-gray-500 mb-0 text-sm">Basé sur {stat.count} (évaluations)</p>
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
            {
                (session && access) ?  <button onClick={()=>addRating()} className="px-4 py-2 bg-blue-500 rounded text-white font-medium">Add Evaluation</button> : (
                    <button className="px-4 py-2 bg-blue-300 rounded text-white font-medium hover:cursor-not-allowed" title="Connect to your account first">Add Evaluation</button>
                )

            }
        </div>
    </div>
  )
}
