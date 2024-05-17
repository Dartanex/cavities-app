import { Header } from "../components/Header"
import { Card } from "../components/Card"

export const HomePage = () => {

    return (
        <>
            <Header />
            
            <section className="container md:rounded-md mx-auto mt-32 w-screen md:h-auto md:w-full md:max-w-screen-lg md:grid md:grid-cols-2 md:gap-4">
            <Card  title={"Conoce sobre las caries"} 
            description={"La caries es el daño en la superficie o esmalte de un diente. Ocurre cuando bacterias en la boca fabrican ácido que ataca el esmalte."}/>
            <Card title={"Higiene Dental"}/>
            <Card title={"Mide tus conocimientos"}/>
            </section>
            
        </>
    )
}