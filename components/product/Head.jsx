import { Rating } from "@mui/material";
import Link from "next/link";
export default function Head({name,price,sous_category,new_price,old_price}) {
  return (
    <div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3">{name}</h1>
        <small className="p-2 rounded bg-green-200 text-green-500">{sous_category}</small>
        <div className="flex gap-4 items-center mt-5">
            <h1 className="mb-0 font-bold text-4xl">4.5</h1>
            <div  className="flex flex-col">
                <Rating value={4} readOnly size="small"/>
                <small className="text-gray-500">Avis de nos acheteurs</small>
            </div>

        </div>
        <div>
            <p className="mb-0 font-bold text-4xl mt-5 flex items-center gap-3">{new_price} DA 
                <span className="text-gray-600 font-semibold line-through text-base mb-0">{old_price} DA</span>
            </p>
            <p style={{color : '#11843C'}} className="font-medium mb-0 text-sm">Toutes taxes comprises</p>
        </div>
        <div className="flex gap-3 flex-col sm:flex-row">
            <button className="font-medium text-white rounded px-4 py-2 bg-blue-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12">Payer</button>
            <a href={'/photo/datamining.pdf'} download={'datamining.pdf'} className="font-medium text-white rounded px-4 py-2 bg-gray-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12">Voir le cours</a>
        </div>
    </div>
  )
}
