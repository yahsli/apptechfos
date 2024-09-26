'use client'

import { useState } from "react"
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation"
import { Error } from "../../svg"
export default function Login() {
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [values,setValues] = useState({
    email : '',
    password : ''
  })
  const login = async(e) => {
    e.preventDefault()
    setLoading(true)
    const response = await signIn('credentials',{
      redirect : false,
      email : values.email,
      password : values.password,
    })
    if(!response.ok){
      setError('Email or password incorrect')
      setTimeout(() => {
        setError(null)
      }, 4000);
    }else{
      setError(null)
      router.push('/')
    }
    setLoading(false)
    
  }
  const handleValues = (e) => {
    setValues(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }
  return (
      <form className="flex flex-col pt-5" onSubmit={login}>
        <label className="mb-1.5 text-sm font-medium">Email*</label>
        <input type="email" name="email" className="rounded border-2 px-3 py-2.5 outline-none" placeholder="Entrez votre email" value={values.email} onChange={handleValues}/>
        <label className="mb-1.5 text-sm mt-3 font-medium">Mot de passe*</label>
        <input type="password" name="password" className="rounded border-2 px-3 py-2.5 outline-none" placeholder="Entrez votre mot de passe" value={values.password} onChange={handleValues}/>
        {error && <small className="text-red-500 flex items-center gap-1 mt-3"><Error color={'red'} width={15} height={15}/>{error}</small>}
        {
          (values.email === '' || 
          values.password === '' ) ? (
            <div className="bg-blue-300 font-medium rounded w-full mt-4 text-white px-2 py-2 text-center cursor-not-allowed">
              Connecter
            </div>
          ) : (
             loading ? (
              <div  className="bg-blue-500 font-medium rounded w-full mt-4 text-white px-2 py-2 hover:cursor-wait text-center">Loading...</div>
             ) : (
              <button type="submit" className="bg-blue-500 font-medium rounded w-full mt-4 text-white px-2 py-2">Connecter</button>
             )
          )
        }
      </form>
  )
}
