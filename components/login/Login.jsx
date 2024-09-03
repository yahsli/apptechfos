
export default function Login() {
  return (
      <form className="flex flex-col pt-5">
        <label className="mb-1.5 text-sm font-medium">Email*</label>
        <input type="text" name="email" className="rounded border-2 px-3 py-2.5 outline-none" placeholder="Entrez votre email"/>
        <label className="mb-1.5 text-sm mt-3 font-medium">Mot de passe*</label>
        <input type="text" name="email" className="rounded border-2 px-3 py-2.5 outline-none" placeholder="Entrez votre mot de passe"/>
        <button className="bg-blue-500 font-medium rounded w-full mt-4 text-white px-2 py-2">Connectez</button>
      </form>
  )
}
