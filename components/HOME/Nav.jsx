'use client'
import Link from "next/link";
import { Brain, Close, List } from "../../svg";
import { useReducer, useRef, useState } from "react";
import Account from "../icons/Account";
import { useRouter } from "next/navigation";
import { Drawer ,Box} from "@mui/material";
import About from "../icons/About";
import Call from "../icons/Call";
import Home from "../icons/Home";
import Image from "next/image";
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
  const [transition,setTransition] = useState(0)
  const [state,dispatch] = useReducer(reduce,{
    open:false,
  })
  const aboutRef = useRef(null)
  const accountRef = useRef(null)
  const callRef = useRef(null)
  const homeRef = useRef(null)
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
  return (
    <header className="flex items-center justify-between w-full py-2 z-10 border ">
        <h4 onClick={()=>router.push('/')} className="mb-0 flex items-center font-semibold text-base md:text-lg hover:cursor-pointer"><Image src="/photo/logo.jpg" alt="logo" width={50} height={50}/> Apptechfos</h4>
        <nav className="md:block hidden">
            
            <ul className="pl-0 flex gap-10 mb-0">
                <li><Link style={{textDecoration : 'none'}} className="text-blue-500 font-medium" href="#home">Acceuil</Link></li>
                <li><Link style={{textDecoration : 'none'}} className="text-black font-medium" href="#about">A Propos</Link></li>
                <li><Link style={{textDecoration : 'none'}} className="text-black font-medium" href="#contact">Contactez nous</Link></li>
            </ul>
        </nav>
        <div className="relative hidden md:flex justify-center items-center px-2 bg-slate-200 rounded-full py-2.5 ">
            <div className="flex relative h-full py-1">
                <div className="loginRegistre absolute h-full bg-white rounded-full" style={{zIndex : '1',left : transition+'%'}} ></div>
                <button style={{zIndex : '2'}} className="px-4 w-1/2" onClick={()=>toLoginPage('login')}>Login</button>
                <button style={{zIndex : '2'}} className="px-4 w-1/2" onClick={()=>toLoginPage('registre')}>Registre</button>
            </div>
        </div>
        <div className="md:hidden flex gap-3">
            <Account playerRef={accountRef}/>
            <button onClick={()=>dispatch({type : 'open_drawer'})}>
              <List width={20} height={20} color={'black'}/>
            </button>
        </div>
        <Drawer PaperProps={{style : {width : '70%'}}} open = {state.open} onClose={()=>dispatch({type : 'close_drawer'})}>
           <div className = 'w-full px-4'>
              <div className="flex items-center justify-between py-3 border-bottom">
                <h4 onClick={()=>router.push('/')} className="mb-0 flex items-center font-semibold text-base md:text-lg hover:cursor-pointer"><Brain width={50} height={50}/> Cereen</h4>
                <button><Close width={20} height={20} color={'black'}/></button>
              </div>
              <ul className="pl-0 flex flex-col gap-3.5 mb-0 w-full mt-3">
                <li onMouseLeave={()=>stop('home')} onMouseEnter={()=>enter('home')} className="w-full hover:bg-gray-100 border-2 border-gray-200 px-2 py-1 gap-1 rounded flex items-center"><Home    playerRef={homeRef}/><Link style={{textDecoration : 'none'}} className="w-full py-2 text-blue-500 font-medium" href="#home">Home</Link></li>
                <li onMouseLeave={()=>stop('about')} onMouseEnter={()=>enter('about')} className="w-full hover:bg-gray-100 border-2 border-gray-200 px-2 py-1 gap-1 rounded flex items-center"><About   playerRef={aboutRef}/><Link style={{textDecoration : 'none'}} className="w-full py-2 text-black font-medium" href="#about">About</Link></li>
                <li onMouseLeave={()=>stop('call')} onMouseEnter={()=>enter('call')} className="w-full hover:bg-gray-100 border-2 border-gray-200 px-2 py-1 gap-1 rounded flex items-center"><Call    playerRef={callRef}/><Link style={{textDecoration : 'none'}} className="w-full py-2 text-black font-medium" href="#contact">Contact</Link></li>
                <li onMouseLeave={()=>stop('account')} onMouseEnter={()=>enter('account')} className="w-full hover:bg-gray-100 border-2 border-gray-200 px-2 py-1 gap-1 rounded flex items-center"><Account playerRef={accountRef}/><Link style={{textDecoration : 'none'}} className="w-full py-2 text-black font-medium" href="#contact">Profile</Link></li>
            </ul>
           </div>
        </Drawer>
    </header>
  )
}
