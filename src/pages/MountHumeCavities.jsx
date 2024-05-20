import { Header } from "../components/Header"
import maintenance from '../assets/maintenance-2422171_1280.jpg'
import { Link } from "react-router-dom"

export const MountHumeCavities = () => {
  return (
    <>
        
        <main className="container mt-24 mx-auto max-w-screen-xl bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 rounded-md p-2">
          <img src={maintenance} alt="En mantenimiento" />
          <div className="flex md:justify-items-center md:justify-center md:items-center content-between flex-col my-4 p-4">
            <p className="text-white text-xl p-2 md:p-4">Esta sección se encuentra en construcción, pero puedes disfrutar de las secciones ya finalizadas!</p>
            <Link className="rounded-md p-2 w-fit bg-violet-500 font-semibold text-slate-100" to={'/home'}>
              Volver a Inicio
            </Link>
          </div>
        </main>
    </>
  )
}
