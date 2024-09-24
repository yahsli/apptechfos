'use client'
import { Box, Modal, Rating } from "@mui/material";
import Apple from "../loading/Apple";
import { GET_RATING } from "@/app/api/product/product";
import { useEffect, useState } from "react";
import { countries } from "./pays";
import Image from "next/image";
export default function Head({id,name,price,sous_category,new_price,old_price,loading}) {
    const [moy,setMoy] = useState('')
    const [open,setOpen] = useState(false)
    const [paymentMethods,setPaymentMethods] = useState({
        one : false,
        two : false,
        three : false
    })
    const getRating = async () => {
        const res = await GET_RATING(id);
        const avg = Number(res.moy?.avg);  
        setMoy(avg);
      };
    const handleOne = () => {
        setPaymentMethods(prev => ({
            ...prev,
            one : !prev.one
        }))
    }
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
                    <button onClick ={()=>setOpen(true)} className="font-medium text-white rounded px-4 py-2 bg-blue-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12">Payer</button>
                    <a href={'/photo/datamining.pdf'} download={'datamining.pdf'} className="font-medium text-white rounded px-4 py-2 bg-gray-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12">Voir le cours</a>
                </div>
                <Modal open = {open} onClose={()=>setOpen(false)}>
                    <Box className = 'payment_modal'>
                        <div className="flex justify-between gap-2">
                            <h1 className="mb-0 font-bold text-2xl">Payment</h1>
                            <button className="p-1.5 rounded bg-gray-100 font-medium" onClick={()=>setOpen(false)}>ESC</button>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2">
                                <h3 className="mb-0 text-lg mt-5 font-medium">Address de facturation</h3>
                                <div className="flex flex-col gap-1 mt-3">
                                    <label htmlFor="pays" className="font-medium text-gray-700">Pays*</label>
                                    <select name="pays" id="pays" className="rounded w-full sm:w-5/12 border-2 hover:border-blue-500 p-2">
                                        {
                                            countries.map((item,i)=>(
                                                <option key={i} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <p className="mb-0 text-sm text-gray-500 mt-3">Comme exigé par la loi, Apptechfos prélève les taxes sur les transactions applicables aux achats réalisés dans certaines juridictions fiscales.</p>
                                <div className="flex justify-between mt-5">
                                    <p className="mb-0 text-sm sm:text-base font-medium text-gray-900">Mode de payment</p>
                                    <p className="mb-0 text-sm sm:text-base font-medium text-gray-900">Connexion sécurisée</p>
                                </div>
                                <div onClick={handleOne} className={`mb-0 py-2 px-2 bg-gray-100 flex gap-4 mt-3 hover:cursor-pointer ${paymentMethods.one ? 'rounded-t':'rounded'}`}>
                                    <input type="radio" name="" id="" checked = {paymentMethods.one}/>
                                    <h5 className="mb-0 font-medium">Payment Externe</h5>
                                </div>
                                {
                                    paymentMethods.one && (
                                            <div className="bg-gray-100 py-2 px-2 rounded-b">
                                                <h5 className="mb-0 font-medium text-blue-500">RIP : XXXXXXXXXXXXXXXXXXXXXXXX</h5>
                                                <p className="text-xs mb-0 text-red-500">vous obligez d'envoyer la preuve de payment a ce email : <br />
                                                <span className="font-medium text-black">maissa.achour016@gmail.com</span></p>
                                            </div>
                                    )
                                }
                                <div className="mb-0 py-2 px-2 bg-gray-100 rounded flex gap-4 mt-5 hover:cursor-not-allowed" title="ce type de payment n'est pas effectué pour le moment">
                                    <input type="radio" name="" id="" />
                                    <h5 className="mb-0 font-medium text-gray-500">Carte Edahabiya/CIB</h5>
                                </div>
                                <div className="mb-0 py-2 px-2 bg-gray-100 rounded flex gap-4 mt-3 hover:cursor-not-allowed" title="ce type de payment n'est pas effectué pour le moment">
                                    <input type="radio" name="" id="" />
                                    <h5 className="mb-0 font-medium text-gray-500">Cart Visa/Paypal</h5>
                                </div>
                                <div className="mt-5">
                                    <h3 className="mb-0 font-bold">Détails de la commande</h3>
                                    <div className="mt-3 flex gap-3">
                                        <div>
                                            <Image src="/photo/formation.jpg" alt="commande" width={100} height={100} className="rounded object-cover"/>
                                        </div>
                                        <h5 className="mb-0 text-sm sm:text-base font-bold">{name}</h5>
                                        <span className="font-medium text-blue-500">{new_price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                            <h1 className="text-3xl font-bold mb-0 text-center">Notre payment</h1>
                            <div className="flex items-center justify-center h-full w-full mt-5">
                                <img src="/photo/payment.jpg" className="w-full h-[400px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded"/>
                            </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
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
