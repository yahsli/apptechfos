

export default function About_One({imgSrc,title,p}) {
  return (
    <div className="ao mt-4 flex flex-col md:items-center gap-2 w-full md:w-1/3">
        <img src={imgSrc} alt="" width={300} height={300} className="rounded-lg"/>
        <div>
            <h5 className="mb-0 font-bold md:text-center">{title}</h5>
            <p  className="mb-0 text-gray-500 md:text-center text-sm">{p}</p>
        </div>
    </div>
  )
}
