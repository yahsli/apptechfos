import Head from "next/head";
import First from "../../../components/chat/First";
import Seconde from "../../../components/chat/Seconde";



export default function index() {
  return (
    <>
    <Head>
      <title>chat -apptechfos</title>
    </Head>
    <main className="chat flex">
        <First/>
        <Seconde/>
    </main>
    
    </>    
  )
}
