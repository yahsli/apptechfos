import { Rating } from "@mui/material"
import Image from "next/image"
import { Clock, Order } from "../../../svg"

export default function First() {
  return (
     <div className="fcard p-2 border-2 rounded ">
       
        <img src={'/photo/robot.jpg'} className="rounded-md"/>
         <div className="flex flex-col gap-2.5 mt-3 w-full">
            <small className="bg-green-100 text-green-500 rounded px-2 py-1 w-fit">Débutant</small>
            <h6 className="mb-0 font-semibold hover:text-blue-500 hover:cursor-pointer w-full">Graphic Design Masterclass</h6>
            <p className="text-gray-500 w-full mb-0 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tenetur totam</p>
            <div className="flex gap-1.5 items-center border-b-2 pb-3">
                <Rating value={4} size="small" readOnly/>
                <small className="text-sm font-medium text-gray-500">4 / 5.0</small>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-1">
                    <Clock width={15} height={15} color={'orange'}/>
                    <span className="text-sm font-medium">12h 30min</span>
                </div>
                <div className="flex items-center gap-1">
                    <Order width={15} height={15} color={'red'}/>
                    <span className="text-sm font-medium">56 lectures</span>
                </div>
            </div>
         </div>
     </div>
  )
}
