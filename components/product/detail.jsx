import { Calendar, Category, Logout, Order, Person, Star, StarFill } from "../../svg";


export default function Detail() {
  return (
    <div className="mt-5">
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Calendar width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Publié en :</h4> <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">10/09/2002</p></div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Person width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Publié par :</h4> <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">Maissa Aichour</p></div>
        </div>
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Order width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">N° de pages :</h4> <p className="mb-0 font-medium text-sm text-red-500">132</p></div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Logout width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Visité par :</h4> <p className="mb-0 font-medium text-sm text-red-500">86k</p></div>
        </div>
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><span style={{fontFamily : 'fantasy'}} className="text-blue-500">ABC</span> <h4 className="mb-0 font-medium text-sm">La langue :</h4> <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">Francais</p></div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Star size={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Rating :</h4> <p className="mb-0 font-medium text-sm text-yellow-500">4.5 (500)</p></div>
        </div>
        <div className="flex mt-1.5 sm:mt-3 flex-col sm:flex-row gap-1.5 sm:gap-0">
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Calendar width={20} height={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">N° de cours :</h4> <p  className="mb-0 font-medium text-sm text-red-500">10</p></div>
            <div className="w-full sm:w-1/2 flex items-center gap-1"><Category size={20} color={'#3b82f6'}/> <h4 className="mb-0 font-medium text-sm">Category :</h4> <p style={{color :'#11843c'}} className="mb-0 font-medium text-sm">type A</p></div>
        </div>
    </div>
  )
}
