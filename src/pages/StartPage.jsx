import { Link } from "react-router-dom"
import ueslogo from '../assets/UESLogo.png'
import logodentart from '../assets/dentart-logo.png'

export const StartPage = () => {

    return(
        <>
            <main className="flex flex-col mx-auto justify-center items-center justify-items-center mt-12 lg:mt-20">
                <img src={ueslogo} 
                alt="Universidad Evangelica de El Salvador Logo" 
                className="size-44 rounded-full" />

                <Link to='/home' className="cursor-pointer animate-bounce mt-16 text-2xl bg-black uppercase border-2 font-bold shadow-lg shadow-slate-900 border-white/80 rounded-3xl text-white text-center px-6 p-1">
                    Iniciar
                </Link>
                <img src={logodentart} alt="logo dentart" 
                className=" size-72 ms-2"/>
            </main>
        </>
    )
}