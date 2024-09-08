import Cantact_One from "./Cantact_One";
import Cantact_Two from "./Cantact_Two";

export default function Cantact() {
  return (
    <div>
        <h1 className="mb-0 mt-5 font-bold text-5xl text-center">N'hésitez pas à nous contacter</h1>
        <div className="flex gap-4 mb-3 flex-col lg:flex-row">
             <Cantact_One/>
             <Cantact_Two/>
        </div>
    </div>
  )
}
