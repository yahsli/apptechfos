
export default function Desc({small_desc,big_desc,loading}) {
  return (
    <div className="mt-5">
        <h1 className="mb-0 text-3xl font-bold">Description</h1>
        {
          !loading ? (
            <>
              <p className="mb-0 text-sm text-gray-500 mt-2">{small_desc}</p>
              <p className="mt-3 mb-0 text-sm text-gray-500">{big_desc}</p>
            </>
          ) : (
             <div>
               <div className="rounded py-2 bg-gray-200 animate-pulse w-full mt-2"></div>
               <div className="rounded py-2 bg-gray-200 animate-pulse w-full mt-2"></div>
               <div className="rounded py-2 bg-gray-200 animate-pulse w-full mt-2"></div>
               <div className="rounded py-2 bg-gray-200 animate-pulse w-full mt-2"></div>
             </div>
          )
        }
    </div>
  )
}
