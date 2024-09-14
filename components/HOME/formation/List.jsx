'use client'
import { useEffect, useState } from "react";
import First from "../cards/First";
import { GET } from "@/app/api/product/product";
import Skeleton from "../../loading/Skeleton";

export default function List() {
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const getProduct = async() => {
    try {
      setLoading(true)
       const pro= await GET()
       setProducts(pro)
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div className="flist flex flex-wrap gap-3 gap-xl-4 xl:justify-between mt-3" >
        {
          loading && (
            <>     
              <Skeleton/>   
              <Skeleton/>   
              <Skeleton/>   
              <Skeleton/>   
              <Skeleton/>   
              <Skeleton/>   
              <Skeleton/>   
              <Skeleton/>   
            </>
          )
        }
        {
          products.map((item,i)=>(
            <First
            key={item.id_product}
            item = {item}/>
          ))
        }
    </div>
  )
}
