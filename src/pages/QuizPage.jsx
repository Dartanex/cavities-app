import { Header } from "../components/Header"
import maintenance from '../assets/maintenance-2422171_1280.jpg'
import { Link } from "react-router-dom"

export const QuizPage = () => {

    return(
        <>
            
            <main className="container mx-auto mt-14 sm:mt-20 md:mt-28 lg:mt-28 bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 h-auto rounded-md p-2">
                <img className="mx-auto" src={maintenance} alt="En mantenimiento" />
                <div className="flex md:justify-items-center md:justify-center md:items-center content-between flex-col my-4 p-4">
                    <p className="text-white text-xl p-2 md:p-4">Esta sección se encuentra en construcción, pero puedes disfrutar de las secciones ya finalizadas!</p>
                    <Link className="rounded-md p-2 my-4 w-fit bg-violet-500 font-semibold text-slate-100" to={'/home'}>
                        Volver a Inicio
                    </Link>
                </div>
            </main>
        </>
    )
}