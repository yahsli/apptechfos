'use client'
import Image from "next/image";
import { CloudeCheck } from "../../svg";
import {Typewriter} from 'react-simple-typewriter'

export default function Seconde() {
  return (
    <section className="hidden lg:flex flex-col w-1/2 overflow-y-hidden">
          <div>
            <h1 className="font-bold mb-0 text-6xl">Notre<Typewriter words={[' Chatbot']} loop={0} cursor/></h1>
            <p className="mb-0 mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit placeat debitis voluptates tempora minima rem temporibus laudantium. Vitae, aliquam fugiat iusto excepturi repellendus necessitatibus molestiae ipsa maxime itaque, iure ipsam.</p>
          </div>
          <div className="mt-3 flex justify-between">
            <div style={{flexShrink : '2'}}>
                <h2 className="font-bold">Caractréstiques</h2>
                <ul className="pl-0 flex flex-col gap-2 text-xs xl:text-sm">
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">High Accuracy</span>: 98% response precision</li>
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">Efficiency</span>: Real-time processing with minimal delays</li>
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">Adaptability</span>: Understands context and follows long conversations</li>
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">Multilingual Support</span>: Communicates in various languages</li>
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">Scalability</span>: Can handle multiple users and large volumes of data</li>
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">Personalization</span>: Customizes responses based on user preferences</li>
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">Continuous Learning</span>: Improves over time with new data</li>
                    <li className="flex items-start gap-2"><CloudeCheck width={20} height={20} color={'black'}/> <span className="font-medium">Secure</span>: Ensures data privacy and safe communication</li>
                </ul>
            </div>
            <div className="w-auto flex justify-end pr-8">
              <Image src="/photo/robot.jpg" alt="qdf" width={280} height={280} className="rounded-xl"/>
            </div>
          </div>

    </section>
  )
}
