'use client'
import React, { useEffect, useRef ,useState} from 'react'
import { Order, Search } from '../../../svg'
import { Modal,Box } from '@mui/material'
import Image from 'next/image'
import { GET } from '@/app/api/product/product'
import { useRouter } from 'next/navigation'
export default function Head() {
  const router = useRouter()
  const playerRef = useRef(null)
  const onStart = () => playerRef.current?.playFromBeginning()
  const onStop = (type) => playerRef.current?.goToFirstFrame()
  const [open,setOpen] = useState(false)
  const [product,setProduct] = useState([])
  const [filterProduct,setFilterProduct] = useState([])
  const [search,setSearch] = useState('')
  const getProduct = async() => {
    try {
      const res = await GET()
      setProduct(res)
      setFilterProduct(res)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProduct()
  },[])
  useEffect(()=>{
    if(search !== ''){
      const filteredProduct = product.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      setFilterProduct(filteredProduct)
    }else{
      getProduct()
    }
  },[search])
  return (
    <div>
        <h1 className="mb-0 font-bold text-5xl text-center">Selectionnez une formation ?</h1>
        <p className='mb-0 text-gray-500 text-center'>N'hesitez pas à selectionnez une formation à partir ce composant</p>
        <div onClick={()=>setOpen(true)} className='mt-3 border-2 hover:border-blue-500 rounded flex items-center px-3 py-1.5 w-6/12 sm:w-3/12 lg:w-2/12 gap-3 hover:cursor-pointer' onMouseEnter={onStart} onMouseLeave={onStop}>
            <Search width={15} height={15} color={'gray'}/>
            <span className='text-gray-500'>Search...</span>
        </div>
        <Modal open={open} onClose={()=>setOpen(false)}>
           <Box className = 'search_modal'>
            <div className='flex items-center justify-between gap-3 border-b-2 pb-4'>
              <div className='flex items-center rounded border-2 px-2 w-11/12'>
                 <Search width={20} height={20} color={'gray'}/>
                 <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="search" id="" className='border-none outline-none px-2 py-2'/>  
              </div>
              <button onClick={()=>setOpen(false)} className='bg-gray-50 rounded border-2 p-1'>ESC</button>
            </div>
            <div className='h-[400px] overflow-y-auto pb-2'>
                {
                  filterProduct.map((item,index)=>(
                    <div onClick={()=>router.push('/product/'+item.id_product)} key={index} className='mt-2 rounded w-full flex items-center gap-2 hover:cursor-pointer hover:has-[h1]:text-blue-500'>
                        <Order width={20} height={20} color={'black'}/>
                        <h1 className='font-medium mb-0 text-sm sm:text-base'>{item.name}</h1>
                    </div>
                  ))
                }
            </div>
           </Box>
        </Modal>
    </div>
  )
}
