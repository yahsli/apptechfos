'use client';
import { useSession } from "next-auth/react";
import First from "../../../components/login/First";
import Seconde from "../../../components/login/Seconde";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import dynamic from 'next/dynamic'; 

const Apple = dynamic(() => import("../../../components/loading/Apple"), {
  ssr: false, 
});

export default function Index() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push('/');
  }, [session, status]);

  if (status === 'loading') {
    return (
      <div className="h-[700px] flex items-center justify-center">
        <h1 className="text-bold">Loading... <Apple size={25} color={'black'} /></h1>
      </div>
    );
  }

  if (session) {
    return (
      <div className="h-[700px] flex items-center justify-center">
        <h1 className="text-bold">Loading... <Apple size={25} color={'black'} /></h1>
        </div>
    );
  }

  if (!session) {
    return (
      <section className="login flex">
        <First />
        <Seconde />
      </section>
    );
  }
}
