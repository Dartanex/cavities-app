import { Link } from "react-router-dom"
import ueslogo from '../assets/UESLogo.png'
import logodentart from '../assets/dentart-logo.png'

export const StartPage = () => {

    return(
        <>
            <main className="flex flex-col mx-auto justify-center items-center justify-items-center mt-12 md:mt-20">
                <img src={ueslogo} 
                alt="Universidad Evangelica de El Salvador Logo" 
                className="size-44 rounded-full" />
                <button className="animate-bounce cursor-pointer mt-16 w-[40%] md:w-[8%] h-12 text-2xl font-bold shadow-lg shadow-slate-900 uppercase border-2 border-slate-200 rounded-3xl p-1 bg-gradient-to-r from-pink-500 to-blue-600">

                <Link to='/home' className="bg-black rounded-3xl font-bold text-white text-center px-6 p-1">
                    Iniciar
                </Link>
                </button>
                <img src={logodentart} alt="logo dentart" 
                className=" size-72 ms-2"/>
            </main>
        </>
    )
}