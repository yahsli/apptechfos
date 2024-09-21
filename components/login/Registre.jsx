'use client'
import { useMutation } from "@tanstack/react-query"
import { useContext, useState } from "react"
import CREATE_ACCOUNT from "@/app/api/registre/route"
import Alert from "../Alert"
import { alertContext } from "../providers/FirstProvider"
export default function Registre() {
  const {alert,handleMessage,handleTitle,handleType,showAlert,hideAlert} = useContext(alertContext)
  const [values,setValues] = useState({
     firstname : '',
     lastname : '',
     email : '',
     password : '',
     cpassword : '',
  })
  const handleValues = (e) => {
    setValues(prevValues => ({
        ...prevValues,
        [e.target.name] : e.target.value
    }))
  }
  const validEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validPassword = (pass) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(pass);
  }
  const {data,mutate : add_user,isPending} = useMutation({
      mutationFn : CREATE_ACCOUNT,
      onSuccess : (res) => {
          showAlert()
          handleType(true)
          handleMessage(res.message)
          handleTitle(res.title)
          setTimeout(() => {
            hideAlert()
          }, 4000);
      },
      onError : (error) => {
          showAlert()
          handleType(false)
          handleMessage(error.message)
          handleTitle('Opération échoué')
          setTimeout(() => {
            hideAlert()
          }, 4000);
      }
  })
  const registre = async(e) => {
    e.preventDefault()
    add_user(values)
  }
  
  return (
    <form className="flex flex-col pt-5" onSubmit={registre}>
        {alert.show && <Alert title={alert.title} para={alert.message} type={alert.type}/>}
        <div className="flex gap-3 sm:gap-10 w-full flex-col sm:flex-row">
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="fn">Prénom*</label>
                <input type="text" id="fn" name="firstname" className="rounded border-2 px-3 py-2.5 outline-none w-full" placeholder="Entrez votre prénom" value={values.firstname} onChange={(e)=>handleValues(e)} />
            </div>
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="ln">Nom*</label>
                <input type="text" id="ln" name="lastname" className="rounded border-2 px-3 py-2.5 outline-none w-full" placeholder="Entrez votre nom" value={values.lastname} onChange={(e)=>handleValues(e)}/>
            </div>
            
        </div>
        <label className="mb-1.5 text-sm font-medium mt-3" htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" className={`rounded border-2 px-3 py-2.5 outline-none ${values.email.length !== 0 && (!validEmail(values.email) ? 'border-red-500' : 'border-green-500')}`} placeholder="Entrez votre email" value={values.email} onChange={(e)=>handleValues(e)}/>
        <div className="flex gap-3 sm:gap-5 w-full mt-3 flex-col sm:flex-row">
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="password">Mot de passe*</label>
                <input type="Password" id="password" name="password" className={`rounded border-2 px-3 py-2.5 outline-none w-full ${values.password.length !== 0 && (!validPassword(values.password) ? 'border-red-500' : 'border-green-500')}`} placeholder="Entrez votre mot de passe" value={values.password} onChange={(e)=>handleValues(e)}/>
            </div>
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="cpassword">Mot de passe confirmé*</label>
                <input type="password" name="cpassword" id="cpassword" className={`rounded border-2 px-3 py-2.5 outline-none w-full ${values.cpassword.length !== 0 && (values.cpassword === values.password ? (!validPassword(values.cpassword) ? 'border-red-500' : 'border-green-500') : 'border-red-500')} `} placeholder="Entrez votre mot de passe de confirmation" value={values.cpassword} onChange={(e)=>handleValues(e)}/>
            </div>
            
        </div>
        {
            (values.firstname === '' ||
            values.lastname === '' ||
            values.email === '' ||
            values.password === '' ||
            values.cpassword === '' || 
            !validEmail(values.email) || 
            !validPassword(values.password) ||
            values.cpassword !== values.password ) ? (
                <div className="bg-blue-300 font-medium rounded w-full mt-4 text-white px-2 py-2 text-center cursor-not-allowed">Crée compte</div>
            ) : <button type="submit" className="bg-blue-500 font-medium rounded w-full mt-4 text-white px-2 py-2">Crée compte</button>
        }
      </form>
  )
}
