import Image from "next/image"
export default function First({imgSrc,category,domain}) {
  return (
    <div className="w-full lg:w-4/12 relative pt-10">
        <div className="flex flex-col gap-3 px-3 border-2 rounded py-3 sticky top-20 left-0">
            <div className="w-full">
                <img src={imgSrc} className="rounded w-full"/>
            </div>
            <div className="w-full flex gap-4">
                <p className="bg-green-100 text-green-500 rounded p-2 w-1/2 text-center">{category}</p>
                <p className="bg-yellow-100 text-yellow-500 rounded p-2 w-1/2 text-center">{domain}</p>
            </div>
        </div>
    </div>
  )
}
