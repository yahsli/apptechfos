import About_One from "./About_One";


export default function About() {
  return (
    <div className="about mt-5" id="about">
        <h1 className="mb-0 font-bold text-5xl text-center">Qui sommes nous ?</h1>
        <div className="flex gap-3 flex-col md:flex-row">
             <About_One 
                imgSrc={'/photo/formation2.jpg'} 
                title={"Création d'un contenu spécifique"} 
                p={"Les bulletins d'entreprise sont essentiels pour construire des relations aves vos employés, vos clients ou vos client potentiels"}/>
             <About_One 
                imgSrc={'/photo/formation3.jpg'} 
                title={"Création d'un contenu spécifique"} 
                p={"Les bulletins d'entreprise sont essentiels pour construire des relations aves vos employés, vos clients ou vos client potentiels"}/>
             <About_One 
                imgSrc={'/photo/formation.jpg'}     
                title={"Rétrospective annuelle : nos réussites et réalisations"} 
                p={"Les bulletins d'entreprise sont essentiels pour construire des relations aves vos employés, vos clients ou vos client potentiels"}/>
        </div>
    </div>
  )
}
