import Image from "next/image"

export default function Teacher() {
  return (
    <div className="flex gap-3 mt-5 flex-col sm:flex-row">
        <div>
            <Image src = {'/photo/formateur.jpg'} width={400} height={400} className="rounded"/>
        </div>
        <div>
            <h1 className="mb-0 font-bold text-2xl">ACHOUR MAISSA</h1>
            <p className="font-medium mb-0 text-gray-500 text-sm ">maissa.aichor@gmail.com</p>
            <p  className="mb-0 text-gray-500 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga et modi quos, tempora dicta eaque cupiditate consectetur fugiat? Reiciendis architecto explicabo dolore qui praesentium odit, ipsam nihil itaque unde nemo.</p>
        </div>
    </div>
  )
}
