'use client'

import { useState } from "react"

export default function First() {
  const [messages,setMessages] = useState([])
  const [value,setValue]=useState('')
  const handleMSG = () => {
    setMessages(prev => [
        ...prev,
        {text : value,date:'01/05/24',time : '15:30'}
    ])
    setValue('')
  }
  return (
    <section className="w-full lg:w-1/2 px-8 flex flex-col gap-3">
        <div className="chatConatainer border rounded">
            <div className="cheader w-full py-3 rounded-b-3xl rounded-t-md flex justify-between px-3">
                <h1 className="font-bold text-3xl">Chat</h1>
                <div className="flex items-center gap-2">
                    <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-12.webp" alt="John Doe" title="John Doe" draggable="false" loading="lazy" width="40" height="40" class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" style={{width: "40px", height: "40px",backgroundColor: 'rgb(171, 70, 210)'}}/>
                    <div>
                        <h6 className="mb-0 font-semibold text-sm capitalize">yahia slimani</h6>
                        <p  className="mb-0 text-gray-500 text-xs">yahia.slimani@univ-constantine2.dz</p>
                    </div>
                </div>
            </div>
           { 
                messages.length === 0 ? <div className="conversation px-3 flex items-center justify-center gap-3">
                    <small className="text-red-500">Discussion vide</small>
                </div> : (
                    <div className="conversation px-3 flex flex-col gap-3">
                        {
                            messages.map((msg,index)=>{
                                return (
                                    <>
                                        <div className="clientMsg flex justify-end w-auto">
                                            <div className="flex items-center gap-2 w-9/12" style={{direction : 'rtl'}}>
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-12.webp" alt="John Doe" title="John Doe" draggable="false" loading="lazy" width="40" height="40" class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" style={{width: "40px", height: "40px",backgroundColor: 'rgb(171, 70, 210)'}}/>
                                                <p className="bg-blue-500 mb-0 px-3 py-2 w-fit rounded-3xl text-white font-medium">{msg.text}</p>
                                            </div>
                                        </div>
                                        <div className="botMsg flex justify-start">
                                            <div className="flex items-center gap-2 w-9/12">
                                                <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="John Doe" title="John Doe" draggable="false" loading="lazy" width="40" height="40" class="rizzui-avatar-img inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover !h-9 w-9 sm:!h-10 sm:!w-10" style={{width: "40px", height: "40px",backgroundColor: 'rgb(171, 70, 210)'}}/>
                                                <p className="bg-gray-300 mb-0 px-3 py-2 w-fit rounded-3xl text-black font-medium">hello what you do !</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
        <div className="flex gap-3 w-full">
            <input type="text" name="" id="" className="border rounded px-2.5 py-2 outline-none w-full" placeholder="Enter your message" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className="rounded px-4 py-2 bg-gray-900 text-white font-medium" onClick={handleMSG}>Send</button>
        </div>
    </section>
  )
}
