import { Header } from "../components/Header"
import { Card } from "../components/Card"
import { ClasificationCard } from "../components/ClasificationCard"
import { Footer } from "../components/Footer"


export const HomePage = () => {

    return (
        <>
            <Header />
            <main className="container lg:rounded-md mx-auto my-auto w-full h-auto md:h-full lg:grid lg:grid-cols-2 lg:gap-4 px-5 lg:px-0 pb-10">
            <Card  title={"Conoce sobre las caries"} 
            description={"La caries es el daño en la superficie o esmalte de un diente. Ocurre cuando bacterias en la boca fabrican ácido que ataca el esmalte."}
            to={'/cavities'} button={'Ver más'} />
            <ClasificationCard />
            <Card title={"Mide tus conocimientos"} 
            description={"Realiza el test para ver cuanto has aprendido."}
            to={'/quiz'} button={'Realizar prueba'}/>
            </main>
            <div className="mb-[-3.5vh] md:mb-[-3vh]">
            <Footer />
            </div>
        </>
    )
}