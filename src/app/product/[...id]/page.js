import First from "../../../../components/product/First";
import Seconde from "../../../../components/product/Seconde";


export default function index({params}) {
  const {id} = params;
  return (
    <main className="product flex gap-10 flex-col lg:flex-row">
        <First imgSrc={'/photo/ps.jpg'}/>
        <Seconde/>
    </main>
  )
}
