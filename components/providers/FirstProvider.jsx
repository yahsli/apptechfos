'use client'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Nav from '../HOME/Nav'
import Footer from '../HOME/Footer'
import { createContext,useState } from 'react';
const queryClient = new QueryClient();
export const alertContext = createContext();
export default function FirstProvider({children}) {
  const [alert,setAlert] = useState({
    show : false,
    type : false,
    message : '',
    title : ''
  })
  const showAlert = () => setAlert(prev => ({...prev,show : true}))
  const hideAlert = () => setAlert(prev => ({...prev,show : false}))
  
  const handleType = (type)=> setAlert(prev => ({
    ...prev,
    type
  }))
  const handleTitle = (title)=> setAlert(prev => ({
    ...prev,
    title
  }))
  const handleMessage = (message)=> setAlert(prev => ({
    ...prev,
    message
  }))
  return (
    <QueryClientProvider client={queryClient}>
        <alertContext.Provider value={{alert,handleType,handleTitle,handleMessage,showAlert,hideAlert}}>
            <Nav/>
                {children}
            <Footer/>
        </alertContext.Provider>
    </QueryClientProvider>
  )
}
