

export default function Registre() {
  return (
    <form className="flex flex-col pt-5">
        <div className="flex gap-3 sm:gap-10 w-full flex-col sm:flex-row">
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
        <div className="flex gap-3 sm:gap-5 w-full mt-3 flex-col sm:flex-row">
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="password">Mot de passe*</label>
                <input type="Password" id="password" name="password" className="rounded border-2 px-3 py-2.5 outline-none w-full " placeholder="Entrez votre mot de passe"/>
            </div>
            <div className="w-full">
                <label className="mb-1.5 text-sm font-medium" htmlFor="cpassword">Mot de passe confirmé*</label>
                <input type="password" name="cpassword" id="cpassword" className="rounded border-2 px-3 py-2.5 outline-none w-full" placeholder="Entrez votre mot de passe de confirmation"/>
            </div>
            
        </div>
        <button className="bg-blue-500 font-medium rounded w-full mt-4 text-white px-2 py-2">Crée compte</button>
      </form>
  )
}
