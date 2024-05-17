import { Link } from "react-router-dom"
import ueslogo from '../assets/UESLogo.png'

export const StartPage = () => {

    return(
        <>
            <main className="flex flex-col mx-auto justify-center items-center justify-items-center mt-10">
                <img src={ueslogo} 
                alt="Universidad Evangelica de El Salvador Logo" 
                className="size-40 rounded-full" />
                <Link to='/home' className="animate-bounce mt-10 bg-slate-400 p-4 rounded-full text-2xl font-bold shadow-lg shadow-slate-900 uppercase border border-slate-800 text-white">
                    Iniciar
                </Link>
            </main>
        </>
    )
}