import { Rating } from "@mui/material";


export default function Head() {
  return (
    <div>
        <h1 className="mb-0 text-2xl sm:text-4xl md:text-5xl font-bold">HTML and CSS: Design and Build Websites (Paperback)</h1>

        <div className="flex gap-4 items-center mt-5">
            <h1 className="mb-0 font-bold text-4xl">4.5</h1>
            <div  className="flex flex-col">
                <Rating value={4} readOnly size="small"/>
                <small className="text-gray-500">Avis de nos acheteurs</small>
            </div>

        </div>
        <div>
            <p className="mb-0 font-bold text-4xl mt-5 flex items-center gap-3">2950 DA 
                <span className="text-gray-600 font-semibold line-through text-base mb-0">3500 DA</span>
            </p>
            <p style={{color : '#11843C'}} className="font-medium mb-0 text-sm">Toutes taxes comprises</p>
        </div>
        <button className="font-medium text-white rounded px-4 py-2 bg-blue-500 mt-3 text-center w-full sm:w-4/12 md:w-2/12">Payer</button>
    </div>
  )
}
