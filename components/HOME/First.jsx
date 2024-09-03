import { CloudeCheck, Expert, PC, Person } from "../../svg";


export default function First() {
  return (
    <div className="flex items-center mt-5 gap-4 flex-wrap flex-xl-nowrap">
        <div className="w-full xl:w-1/2 flex items-center gap-4 flex-wrap flex-md-nowrap">
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-orange-50 w-100 w-md-50">
                <PC width={45} height={45} color={'orange'}/>
                <div className=''>
                    <h1 className="mb-0 font-bold">10K</h1>
                    <p  className="mb-0 font-medium text-gray-600">Coures en ligne</p>
                </div>
            </div>
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-gray-100 w-100 w-md-50">
                <Person width={50} height={50} color={'gray'}/>
                <div className=''>
                    <h1 className="mb-0 font-bold">+200</h1>
                    <p  className="mb-0 font-medium text-gray-600">Formateur Expert</p>
                </div>
            </div>
        </div>
        <div className="w-full xl:w-1/2 flex items-center gap-4 flex-wrap flex-md-nowrap">
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-purple-200 w-100 w-md-50">
                <Expert width={45} height={45} color={'purple'}/>
                <div className=''>
                    <h1 className="mb-0 font-bold">60K</h1>
                    <p  className="mb-0 font-medium text-gray-600">Etudiant en ligne</p>
                </div>
            </div>
            <div className="rounded-xl py-4 px-5 flex gap-4 items-center bg-emerald-100 w-100 w-md-50">
                <CloudeCheck width={45} height={45} color={'blue'}/>
                <div className=''>
                    <h1 className="mb-0 font-bold">500</h1>
                    <p  className="mb-0 font-medium text-gray-600">Formation certifié</p>
                </div>
            </div>
        </div>
    </div>
  )
}
