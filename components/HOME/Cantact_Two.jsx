'use client'
import SendEmail from "@/app/api/SendEmail"
import { useState } from "react"
export default function Cantact_Two() {
  const [values,setValues] = useState({
     firstname : '',
     lastname : '',
     email : '',
     message : '',
     number : ''
  })
  const handleValues = (e) => {
    setValues(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }
  const handleNumber = (e) => {
    if(!isNaN(Number(e.target.value))){
        setValues(prev => ({
            ...prev,
            number: e.target.value
            }))
    }
  }
  const Send = async (e) => {
    e.preventDefault()
    const res = await SendEmail(values)
    console.log(res)
  }
  return (
    <form className="flex flex-col mt-5 lg:pl-10" onSubmit={Send}>
        <div className="flex gap-3 gap-sm-5 w-full flex-col sm:flex-row">
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="fn">Prénom*</label>
                <input 
                    type="text" 
                    id="fn" name="firstname" 
                    className="rounded border-2 px-3 py-2.5 outline-none w-full" 
                    placeholder="Entrez votre prénom"
                    value={values.firstname}
                    onChange={handleValues}
                />
            </div>
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="ln">Nom*</label>
                <input 
                    type="text" 
                    id="ln" name="lastname" 
                    className="rounded border-2 px-3 py-2.5 outline-none w-full" 
                    placeholder="Entrez votre nom"
                    value={values.lastname}
                    onChange={handleValues}/>
            </div>
            
        </div>
        <div className="flex gap-3 gap-sm-5 w-full flex-col sm:flex-row mt-3">
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="email">Email*</label>
                <input 
                    type="email" 
                    id="email" name="email" 
                    className="rounded border-2 px-3 py-2.5 outline-none w-full" 
                    placeholder="Entrez votre prénom"
                    value={values.email}
                    onChange={handleValues}
                />
            </div>
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="number">Numéro*</label>
                <input 
                    type="text" 
                    id="number" name="number" 
                    className="rounded border-2 px-3 py-2.5 outline-none w-full" 
                    placeholder="Entrez votre nom"
                    value={values.number}
                    onChange={handleNumber}/>
            </div>
            
        </div>
        <div className="mt-2 flex flex-col">
            <label htmlFor="" className="mb-1.5 text-sm font-medium">Message*</label>
            <textarea 
                name="message" 
                id=""  
                className="border rounded-md h-[90px] px-3 py-2" 
                placeholder="Entrez le message que veuillez l'envoyer "
                value={values.message}
                onChange={handleValues}/>
        </div>
        <button type="submit" className="bg-gray-900 font-medium rounded w-full mt-4 text-white px-2 py-2">Envoyer</button>
      </form>
  )
}
