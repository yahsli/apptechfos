'use client'
import { useEffect, useState } from "react";
import First from "../../../../components/product/First";
import Seconde from "../../../../components/product/Seconde";
import { GET_ONE_PRODUCT } from "@/app/api/product/product";

export default function index({params}) {
  const [loading,setLoading] = useState(true)
  const [product,setProduct] = useState({})
  const {id} = params;
  const GET = async () => {
    setLoading(true)
    const data = await GET_ONE_PRODUCT(id)
    setProduct(data)
    setLoading(false)
  }
  useEffect(()=>{
    GET()
  },[])
  return (
    <main className="product flex gap-10 flex-col lg:flex-row">
        <First 
            imgSrc={product.img}  
            domain={product.domaine}  
            category={product.category}
            loading = {loading}
        />
        <Seconde 
            item = {product}
            loading = {loading}
        />
    </main>
  )
}
