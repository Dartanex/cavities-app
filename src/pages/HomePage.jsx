import { Header } from "../components/Header"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"

export const HomePage = () => {

    return (
        <>
            <Header />
            <section className="container md:rounded-md mx-auto my-auto w-screen h-auto md:max-h-screen md:max-w-screen-lg md:grid md:grid-cols-2 md:gap-4 px-5 md:px-0 pb-10">
            <Card  title={"Conoce sobre las caries"} 
            description={"La caries es el daño en la superficie o esmalte de un diente. Ocurre cuando bacterias en la boca fabrican ácido que ataca el esmalte."}
            button={'Ver más'}/>
            <Card title={"Clasificación de las Caries"} button={'Clasificación de caries'}/>
            <Card title={"Mide tus conocimientos"} button={'Realizar prueba'}/>
            </section>
            <div className="mb-[-3.5vh] md:mb-[-3vh]">
            <Footer />
            </div>
        </>
    )
}