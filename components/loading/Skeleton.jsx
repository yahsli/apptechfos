import { ImageIcon ,Clock,Order} from "../../svg";
import { Rating } from "@mui/material";

export default function Skeleton({item}) {
  return (
    <div className="fcard p-2 border-2 rounded w-[280px]">
       <div className="flex justify-center items-center bg-gray-200 rounded h-[200px] animate-pulse">
          <ImageIcon size={25} color={'black'}/>
       </div>
         <div className="flex flex-col gap-2.5 mt-3 w-full">
            <small className="bg-gray-200 rounded px-2 py-1 w-2/12 animate-pulse"></small>
            <h6 className="mb-0 bg-gray-200 py-2 rounded hover:cursor-pointer w-full animate-pulse"></h6>
            <p className="bg-gray-200 rounded w-full py-1 animate-pulse"></p>
            <div className="flex gap-1.5 items-center border-b-2 pb-3">
                <div className="bg-gray-200 py-2 rounded w-4/12 animate-pulse"></div>
                <small className="bg-gray-200 py-2 rounded w-1/12 animate-pulse"></small>
            </div>
            <div className="flex justify-between">
                <div className="py-2 bg-gray-200 animate-pulse w-3/12 rounded">
                </div>
                <div className="py-2 bg-gray-200 animate-pulse w-3/12 rounded">
                </div>
               
            </div>
         </div>
     </div>
  )
}
