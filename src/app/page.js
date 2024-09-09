import Image from "next/image";
import Couv from "../../components/HOME/Couv";
import 'bootstrap/dist/css/bootstrap.min.css'
import First from "../../components/HOME/First";
import About from "../../components/HOME/About";
import Cantact from "../../components/HOME/Cantact";
import Formations from "../../components/HOME/formation/Formations";

export default function Home() {
  return (
      <main className="container">
        <Couv/>
        <First/>
        <About/>
        <Cantact/>
        <Formations/>
      </main>
  );
}
