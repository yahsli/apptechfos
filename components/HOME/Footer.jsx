'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CopyRight, Facebook, Google, Instagram } from "../../svg"
export default function Footer() {
  const router = useRouter()
  return (
    <footer className="mt-5 rounded-t-3xl bg-gray-800 text-white">
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-5">
            <div className="flex gap-3 flex-wrap">
                <div className="w-full lg:w-3/12 flex flex-col gap-3">
                    <h1 onClick={()=>router.push('/')} className="mb-0 w-fit uppercase flex items-center gap-3 font-semibold text-base md:text-lg hover:cursor-pointer"><Image src="/photo/logo.jpg" alt="logo" width={50} height={50} className="rounded-full"/> Apptechfos</h1>
                    <p className="text-sm mb-0 text-gray-400">APPTECHFOS thème éducatif, construit spécifiquement pour les centres d’éducation qui est dédié à l’enseignement et implique les apprenants.</p>
                </div>
                <div className="item flex flex-col gap-2">
                    <div className="flex">
                        <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-14.webp" alt="John Doe" title="John Doe" draggable="false" loading="lazy" width="40" height="40" class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" style={{width: "40px", height: "40px",backgroundColor: 'rgb(171, 70, 210)'}}/>
                    </div>                
                    <h6 className="capitalize mb-0 font-medium text-center">ACHOUR Brik Maissa</h6>
                    <p className="text-sm mb-0 text-gray-400 text-center">Membre fondatrice de la start-up,responsable de la publicité et de la communication, et formatrice</p>
                </div>
                <div className="item flex flex-col gap-2">
                    <div className="flex justify-center">
                        <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-13.webp" alt="John Doe" title="John Doe" draggable="false" loading="lazy" width="40" height="40" class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" style={{width: "40px", height: "40px",backgroundColor: 'rgb(171, 70, 210)'}}/>
                    </div>                
                    <h6 className="capitalize mb-0 font-medium text-center">BENAICHE F. Zohra</h6>
                    <p className="text-sm mb-0 text-gray-400 text-center">Responsable de l'équipe, chargée la conception des cours</p>
                </div>
                <div className="item flex flex-col gap-2">
                    <div className="flex justify-center">
                        <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="John Doe" title="John Doe" draggable="false" loading="lazy" width="40" height="40" class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" style={{width: "40px", height: "40px",backgroundColor: 'rgb(171, 70, 210)'}}/>
                    </div>                
                    <h6 className="capitalize mb-0 font-medium text-center">BOUFOULA walid</h6>
                    <p className="text-sm mb-0 text-gray-400 text-center">Chargé de la conception des cours, et des supports pédagogiques, et formateur</p>
                </div>
                <div className="item flex flex-col gap-2">
                    <div className="flex justify-center">
                        <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-12.webp" alt="John Doe" title="John Doe" draggable="false" loading="lazy" width="40" height="40" class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" style={{width: "40px", height: "40px",backgroundColor: 'rgb(171, 70, 210)'}}/>
                    </div>
                    <h6 className="capitalize mb-0 font-medium text-center">AITSAADI Adel</h6>
                    <p className="text-sm mb-0 text-gray-400 text-center">conception des cours, et des supports pédagogiues, et formateur</p>
                </div>
            </div>
            <div className="flex gap-3 justify-end mt-3 border-b-2 pb-3 border-gray-500">
                <div style={{backgroundColor : 'rgba(255,255,255,0.1)'}} className="hover:cursor-pointer pl-2  py-2 rounded-md flex justify-center items-center "><Google width={20} height={20}/></div>
                <div style={{backgroundColor : 'rgba(255,255,255,0.1)'}} className="hover:cursor-pointer px-2 py-2 rounded-md flex justify-center items-center"><Facebook size={20} color={'white'}/></div>
                <div style={{backgroundColor : 'rgba(255,255,255,0.1)'}} className="hover:cursor-pointer px-2 py-2 rounded-md flex justify-center items-center"><Instagram size={20} color={'white'}/></div>
            </div>
            <div className="mt-3 flex justify-center">
                <p className="text-sm mb-0 text-gray-400 text-center flex items-center gap-1 gap-sm-2">Copyright 2024 <CopyRight width={15} height={15} color={'#9ca3af'}/>develloppé par Yahia Slimani</p>
            </div>
        </div>
    </footer>
  )
}
