

export default function Cantact_Two() {
  return (
    <form className="flex flex-col mt-5 lg:pl-10">
        <div className="flex gap-3 gap-sm-5 w-full flex-col sm:flex-row">
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="fn">Prénom*</label>
                <input type="text" id="fn" name="firstname" className="rounded border-2 px-3 py-2.5 outline-none w-full" placeholder="Entrez votre prénom"/>
            </div>
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="ln">Nom*</label>
                <input type="text" id="ln" name="lastname" className="rounded border-2 px-3 py-2.5 outline-none w-full" placeholder="Entrez votre nom"/>
            </div>
            
        </div>
        <label className="mb-1.5 text-sm font-medium mt-3" htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" className="rounded border-2 px-3 py-2.5 outline-none" placeholder="Entrez votre email"/>
        <div className="mt-3 flex flex-col">
            <label htmlFor="" className="mb-1.5 text-sm font-medium">Message*</label>
            <textarea name="" id=""  className="border rounded-md h-[90px] px-3 py-2" placeholder="Entrez le message que vaille l'envoyer "></textarea>
        </div>
        <button className="bg-gray-900 font-medium rounded w-full mt-4 text-white px-2 py-2">Envoyer</button>
      </form>
  )
}
