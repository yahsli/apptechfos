"use client";
import { Brain, GitHub, Google } from "../../svg";
import { useRouter } from "next/navigation";
import Login from "./Login";
import { useState } from "react";
import Registre from "./Registre";
export default function First() {
  const router = useRouter();
  const [show,setShow] = useState(false)
  return (
    <section className="lgfirst w-full md:w-1/2 px-16 sm:px-32 md:px-10 lg:px-24 xl:px-36 pb-8 pt-16">
      {
        !show ? (
            <h2 className="rizzui-title-h2 font-bold mb-5 text-[26px] leading-snug md:text-3xl md:!leading-normal lg:mb-7 lg:pe-16 lg:text-[28px] xl:text-3xl 2xl:pe-8 2xl:text-4xl">
                Bienvenu! s'il vous plait 
                <span className="relative inline-block">
                    Connectez-vous pour
                <svg
                    viewBox="0 0 147 10"   
                    stroke="#3b82f6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.4325 0.957703C55.5264 1.2859 48.7014 1.68945 42.0459 2.13063C32.6242 2.75474 23.2063 3.40038 13.8451 4.42263C10.8984 4.74545 7.90595 4.94989 4.97767 5.35341C3.13948 5.60628 0.702089 5.96671 0.382211 6.04203C0.214902 6.08507 0.141911 6.1497 0.118325 6.17122C-0.0475096 6.32187 -0.0172508 6.46707 0.0763539 6.58006C0.113943 6.62848 0.208995 6.74689 0.472857 6.76303C18.1192 7.86599 36.1635 5.71388 53.8312 5.48791C84.4702 5.10053 116.038 6.63929 146.433 9.99658C146.699 10.0235 146.957 9.88894 146.994 9.68987C147.038 9.49618 146.846 9.30786 146.581 9.28096C116.134 5.91829 84.5144 4.37415 53.8165 4.76691C37.3509 4.97674 20.5603 6.86525 4.07184 6.21962C4.45068 6.16582 4.82217 6.112 5.16122 6.06357C8.0777 5.66005 11.0576 5.461 13.9925 5.13818C23.3338 4.11593 32.7326 3.4703 42.1417 2.85157C53.8165 2.07681 65.9998 1.40965 78.279 1.0976C82.6718 1.14602 87.0498 1.19446 91.4278 1.25364C100.899 1.38277 110.414 1.75939 119.863 2.26514C122.708 2.42117 125.553 2.58256 128.398 2.72245C129.341 2.77087 131.774 2.91073 132.113 2.89997C132.533 2.88921 132.614 2.63098 132.621 2.58794C132.643 2.4911 132.629 2.35658 132.422 2.2436C132.4 2.22745 132.267 2.17362 131.973 2.14134C114.792 0.236721 96.4471 -0.0806646 78.2937 0.376658C59.1453 0.177588 39.9232 0.0914646 20.8234 0C20.55 0 20.3266 0.161432 20.3244 0.360502C20.323 0.559572 20.5433 0.721008 20.8168 0.726389C34.6467 0.790952 48.5466 0.855478 62.4325 0.957703Z"
                    fill="currentColor"
                    ></path>
                </svg>
                </span>{" "}
                continue.
            </h2>
        ) : (
            <h2 className="rizzui-title-h2 font-bold mb-5 text-[26px] leading-snug md:text-3xl md:!leading-normal lg:mb-7 lg:pe-16 lg:text-[28px] xl:text-3xl 2xl:pe-8 2xl:text-4xl">Rejoin Apptechfos pour être à nouveau - <span className="relative inline-block">Crée Compte!<svg viewBox="0 0 147 10" fill="#3b82f6" stroke="#3b82f6" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-2 start-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36"><path fillRule="evenodd" clipRule="evenodd" d="M62.4325 0.957703C55.5264 1.2859 48.7014 1.68945 42.0459 2.13063C32.6242 2.75474 23.2063 3.40038 13.8451 4.42263C10.8984 4.74545 7.90595 4.94989 4.97767 5.35341C3.13948 5.60628 0.702089 5.96671 0.382211 6.04203C0.214902 6.08507 0.141911 6.1497 0.118325 6.17122C-0.0475096 6.32187 -0.0172508 6.46707 0.0763539 6.58006C0.113943 6.62848 0.208995 6.74689 0.472857 6.76303C18.1192 7.86599 36.1635 5.71388 53.8312 5.48791C84.4702 5.10053 116.038 6.63929 146.433 9.99658C146.699 10.0235 146.957 9.88894 146.994 9.68987C147.038 9.49618 146.846 9.30786 146.581 9.28096C116.134 5.91829 84.5144 4.37415 53.8165 4.76691C37.3509 4.97674 20.5603 6.86525 4.07184 6.21962C4.45068 6.16582 4.82217 6.112 5.16122 6.06357C8.0777 5.66005 11.0576 5.461 13.9925 5.13818C23.3338 4.11593 32.7326 3.4703 42.1417 2.85157C53.8165 2.07681 65.9998 1.40965 78.279 1.0976C82.6718 1.14602 87.0498 1.19446 91.4278 1.25364C100.899 1.38277 110.414 1.75939 119.863 2.26514C122.708 2.42117 125.553 2.58256 128.398 2.72245C129.341 2.77087 131.774 2.91073 132.113 2.89997C132.533 2.88921 132.614 2.63098 132.621 2.58794C132.643 2.4911 132.629 2.35658 132.422 2.2436C132.4 2.22745 132.267 2.17362 131.973 2.14134C114.792 0.236721 96.4471 -0.0806646 78.2937 0.376658C59.1453 0.177588 39.9232 0.0914646 20.8234 0C20.55 0 20.3266 0.161432 20.3244 0.360502C20.323 0.559572 20.5433 0.721008 20.8168 0.726389C34.6467 0.790952 48.5466 0.855478 62.4325 0.957703Z" fill="currentColor"></path></svg></span></h2>
        )
      }
      <p className="rizzui-text-p font-normal leading-[1.85] text-gray-700 md:leading-loose lg:pe-8 2xl:pe-14">En vous inscrivant, vous aurez accès à du contenu exclusif, à des offres spéciales et serez le premier à être informé des nouvelles et des mises à jour passionnantes</p>    
      <div className="flex gap-4 pb-5 flex-col sm:flex-row">
         <button tabIndex={0} className="w-full hover:text-blue-500 hover:border-blue-500 rounded border-2 py-2 px-2 text-myGray font-medium text-base flex items-center justify-center gap-1"><Google width={'1em'} height={'1em'}/> Google</button>
      </div>
      <div className="flex gap-3 items-center w-full">
        <hr className="bg-gray-500 w-1/2"/>
        <p className="text-sm mb-0 text-gray-500">OR</p>
        <hr className="bg-gray-500 w-1/2"/>
      </div>
      {!show ? <Login/> : <Registre/>}
      <p className="text-gray-500 mb-0 text-sm mt-3">{!show ? "Vous n'avez pas un compte ? " : "Vous avez déja un compte ? " }<button className="text-black font-medium" onClick={()=>setShow(!show)}>{!show ? 'Crée compte' : 'Connectez-vous'}</button></p>
      </section>
  );
}
