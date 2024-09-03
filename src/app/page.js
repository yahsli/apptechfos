import Image from "next/image";
import Couv from "../../components/HOME/Couv";
import 'bootstrap/dist/css/bootstrap.min.css'
import First from "../../components/HOME/First";
export default function Home() {
  return (
      <main className="container">
        <Couv/>
        <First/>
      </main>
  );
}
