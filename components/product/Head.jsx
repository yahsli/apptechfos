'use client'
import { Rating } from "@mui/material";
import Apple from "../loading/Apple";
import { GET_RATING } from "@/app/api/product/product";
import { useEffect, useState } from "react";
export default function Head({id,name,price,sous_category,new_price,old_price,loading}) {
    const [moy,setMoy] = useState('')
    const getRating = async () => {
        const res = await GET_RATING(id);
        console.log(res);
        const avg = Number(res.moy?.avg);  
        setMoy(avg);
      };
    useEffect(()=>{
        getRating()
    },[id])
  return (
        !loading ? (
            <div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3">{name}</h1>
                <small className="p-2 rounded bg-green-200 text-green-500">{sous_category}</small>
                <div className="flex gap-4 items-center mt-5">
                    <h1 className="mb-0 font-bold text-4xl">{moy}</h1>
                    <div  className="flex flex-col">
                        <Rating name="half-rating-read" value={moy} readOnly size="small"/>
                        <small className="text-gray-500">Avis de nos acheteurs</small>
                    </div>
        
                </div>
                <div>
                    <p className="mb-0 font-bold text-4xl mt-5 flex items-center gap-3">{new_price} DA 
                        <span className="text-gray-600 font-semibold line-through text-base mb-0">{old_price} DA</span>
                    </p>
                    <p style={{color : '#11843C'}} className="font-medium mb-0 text-sm">Toutes taxes comprises</p>
                </div>
                <div className="flex gap-3 flex-col sm:flex-row">
                    <button className="font-medium text-white rounded px-4 py-2 bg-blue-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12">Payer</button>
                    <a href={'/photo/datamining.pdf'} download={'datamining.pdf'} className="font-medium text-white rounded px-4 py-2 bg-gray-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12">Voir le cours</a>
                </div>
            </div>
        ) : (
            <div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 w-6/12 py-4 bg-gray-200 animate-pulse rounded"></h1>
                <div className="py-4 bg-gray-200 animate-pulse rounded w-3/12 mt-5">{sous_category}</div>
                <div className="py-4 w-5/12 bg-gray-200 animate-pulse rounded mt-5"></div>
                <div className="flex gap-3 mt-5">
                    <div className="py-4 w-4/12 bg-gray-200 animate-pulse rounded mt-3"></div>
                    <div className="py-4 w-2/12 bg-gray-200 animate-pulse rounded mt-3"></div>
                </div>
                <div className="flex gap-3 flex-col sm:flex-row">
                    <button className="font-medium text-white rounded px-4 py-2 bg-blue-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12 flex items-center justify-center"><Apple size={20} color={'white'}/></button>
                    <button className="font-medium text-white rounded px-4 py-2 bg-gray-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12 flex items-center justify-center"><Apple size={20} color={'white'}/></button>
                </div>
            </div>
        )
    
  )
}
