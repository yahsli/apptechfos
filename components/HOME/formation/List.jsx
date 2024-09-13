'use client'
import { useEffect, useState } from "react";
import First from "../cards/First";
import { GET } from "@/app/api/product/product";

export default function List() {
  const [products,setProducts] = useState([])
  const getProduct = async() => {
    try {
       const pro= await GET()
       setProducts(pro)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div className="flist flex flex-wrap gap-3 gap-xl-4 xl:justify-between mt-3" >
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
