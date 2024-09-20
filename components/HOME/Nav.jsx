'use client'
import Link from "next/link";
import { Brain, Close, List, Person } from "../../svg";
import { useEffect, useReducer, useRef, useState } from "react";
import Account from "../icons/Account";
import { useRouter } from "next/navigation";
import { Drawer ,Box, Modal} from "@mui/material";
import About from "../icons/About";
import Call from "../icons/Call";
import Home from "../icons/Home";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Apple from "../loading/Apple";
function reduce(state,action){
    switch (action.type) {
      case 'open_drawer':
        return {...state,open : true}
      case 'close_drawer' : 
      return {...state,open : false}
      default :
      return state;
    }
}
export default function Nav() {
  const router = useRouter()
  const {data:session,status} = useSession()
  const [transition,setTransition] = useState(0)
  const [state,dispatch] = useReducer(reduce,{
    open:false,
  })
  const aboutRef = useRef(null)
  const accountRef = useRef(null)
  const callRef = useRef(null)
  const homeRef = useRef(null)
  const [open,setOpen] = useState(false)
  const enter = (type) => {
    if (type === 'about') {
      aboutRef.current?.playFromBeginning()
    } else if(type === 'account') {
      accountRef.current?.playFromBeginning()
    }else if(type === 'call'){
      callRef.current?.playFromBeginning()
    }else if(type === 'home'){
      homeRef.current?.playFromBeginning()
    }
  }
  const stop = (type) => {
    if (type === 'about') {
      aboutRef.current?.goToFirstFrame()
    } else if(type === 'account') {
      accountRef.current?.goToFirstFrame()
    }else if(type === 'call'){
      callRef.current?.goToFirstFrame()
    }else if(type === 'home'){
      homeRef.current?.goToFirstFrame()
    }
  }
  const toLoginPage = (type) => {
     if(type === 'login'){
      setTransition(0)
      router.push('/login')
     }else{
      setTransition(50)
      router.push('/login')
     }
  }
  useEffect(()=>{
    router.refresh()
  },[session])
  return (
    <header className="flex items-center justify-between w-full py-2 z-50 ">
        <h4 onClick={()=>router.push('/')} className="mb-0 flex items-center font-semibold text-base md:text-lg hover:cursor-pointer"><Image src="/photo/logo.jpg" alt="logo" width={50} height={50}/> APPTECHFOS</h4>
        <nav className="md:block hidden">
            <ul className="pl-0 flex gap-10 mb-0">
                <li><Link style={{textDecoration : 'none'}} className="text-blue-500 font-medium" href="/">Acceuil</Link></li>
                <li><Link style={{textDecoration : 'none'}} className="text-black font-medium" href="#about">A Propos</Link></li>
                <li><Link style={{textDecoration : 'none'}} className="text-black font-medium" href="#contact">Contactez nous</Link></li>
                <li><Link style={{textDecoration : 'none'}} className="text-black font-medium" href="/chat">Chat</Link></li>
            </ul>
        </nav>
           {
            status === 'authenticated' ? (
              <button className="hidden md:flex gap-2 px-2 py-1 rounded bg-gray-200 items-center" onClick={()=>setOpen(true)}>
                <Person width={15} height={15} color={'gray'}/>
                <p className="mb-0 font-medium">{session.user.name}</p>
              </button>
             ): status === 'unauthenticated' ? <div className="relative hidden md:flex justify-center items-center px-2 bg-slate-200 rounded-full py-2.5 ">
                  <div className="flex relative h-full py-1">
                      <div className="loginRegistre absolute h-full bg-white rounded-full" style={{zIndex : '1',left : transition+'%'}} ></div>
                      <button style={{zIndex : '2'}} className="px-4 w-1/2" onClick={()=>toLoginPage('login')}>Login</button>
                      <button style={{zIndex : '2'}} className="px-4 w-1/2" onClick={()=>toLoginPage('registre')}>Registre</button>
                  </div>
            </div> : (
              <div className="hidden md:flex">
                <Apple size={'20'} color={'black'}/>
              </div>
            )
           }
        <div className="md:hidden flex gap-3">
            <div className="hover:cursor-pointer" onClick={()=>session && setOpen(true)}>
              <Account playerRef={accountRef}/>
            </div>
            <button onClick={()=>dispatch({type : 'open_drawer'})}>
              <List width={20} height={20} color={'black'}/>
            </button>
        </div>
        <Drawer PaperProps={{style : {width : '70%'}}} open = {state.open} onClose={()=>dispatch({type : 'close_drawer'})}>
           <div className = 'w-full px-4'>
              <div className="flex items-center justify-between py-3 border-bottom">
                <h4 onClick={()=>router.push('/')} className="mb-0 flex items-center font-semibold text-base md:text-lg hover:cursor-pointer"><Image src={'/photo/logo.jpg'} width={50} height={50}/> Apptechfos</h4>
                <button><Close width={20} height={20} color={'black'}/></button>
              </div>
              <ul className="pl-0 flex flex-col gap-3.5 mb-0 w-full mt-3">
                <li onMouseLeave={()=>stop('home')} onMouseEnter={()=>enter('home')} className="w-full hover:bg-gray-100 border-2 border-gray-200 px-2 py-1 gap-1 rounded flex items-center"><Home    playerRef={homeRef}/><Link style={{textDecoration : 'none'}} className="w-full py-2 text-blue-500 font-medium" href="#home">Accueil</Link></li>
                <li onMouseLeave={()=>stop('about')} onMouseEnter={()=>enter('about')} className="w-full hover:bg-gray-100 border-2 border-gray-200 px-2 py-1 gap-1 rounded flex items-center"><About   playerRef={aboutRef}/><Link style={{textDecoration : 'none'}} className="w-full py-2 text-black font-medium" href="#about">A propos</Link></li>
                <li onMouseLeave={()=>stop('account')} onMouseEnter={()=>enter('account')} className="w-full hover:bg-gray-100 border-2 border-gray-200 px-2 py-1 gap-1 rounded flex items-center"><Account playerRef={accountRef}/><Link style={{textDecoration : 'none'}} className="w-full py-2 text-black font-medium" href="#contact">Connectez-vous</Link></li>
            </ul>
           </div>
        </Drawer>
        <Modal open = {open} onClose={()=>setOpen(false)}>
           <Box className = 'user_modal'>
               <div>
                   <h1 className="mb-0 text-2xl font-bold capitalize">Hello {session?.user.name} !</h1>
                   <p className="text-gray-500 font-medium mb-0 pb-2 border-b-2 text-sm">{session?.user.email}</p>
                   <button className="bg-red-500 text-white font-medium w-6/12 rounded py-2 px-2 mt-3" onClick={()=>signOut()}>Logout</button>
               </div>
           </Box>
        </Modal>
    </header>
  )
}
