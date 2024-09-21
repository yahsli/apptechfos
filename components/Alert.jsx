import { Check, Error } from "../svg";


export default function Alert({title,para,type}) {
  return (
    <div style={{transform : 'translate(-50%,-50%)'}} className={`w-10/12 sm:w-fit  fixed left-1/2 top-28 ${type ? 'bg-green-300' : 'bg-red-300'}  rounded px-3 py-2 z-20`}>
        <h3 className="flex items-center gap-2 font-bold text-lg mb-0">
            {type ? <Check width={15} height={15} color={'green'}/> : <Error width={15} height={15} color={'red'}/>}
            {title}
        </h3>
        <p className="text-sm text-gray-700 mb-0">{para}</p>
    </div>
  )
}
