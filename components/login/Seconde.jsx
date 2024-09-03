'use client'

import Image from "next/image"



export default function Seconde() {
  return (
        <section className="seconde w-1/2 bg-gray-50 px-20 md:flex flex-col justify-center items-center hidden">
             <div className="">
                <h2 className="text-center font-bold text-2xl">Rejoin nos formations pour<br />être professionnel</h2>
                <p className="text-center">Découvrez notre plateforme de formation en ligne, offrant des cours interactifs conçus par des experts pour vous aider à développer vos compétences à votre rythme.</p>
             </div>
             <div className="relative w-full flex justify-center mt-10">
                <Image src={'/photo/formation.jpg'} width={500} height={500} alt="formation" className="rounded-3xl"/>
                <div className="glass rounded-3xl py-2 px-3 top-5 left-14">
                    <h3 className="mb-0 font-bold text-base lg:text-lg">+1000 formation</h3>
                    <p  className="mb-0 text-white text-sm">Nos formations couvre des <br /> domaines professionnels</p>
                </div>
                <div className="glass rounded-3xl py-2 px-3 -bottom-16 -right-32">
                    <h3 className="mb-0 font-bold text-blue-500 text-base lg:text-lg">+100 formateurs</h3>
                    <p  className="mb-0 text-white text-sm">Orientez nos clients vers le monde <br /> professionnel</p>
                </div>
            </div>
        </section>
  )
}
