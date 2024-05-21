import { Header } from "../components/Header"
import authorDartanex from '../assets/authors/88408649.jpg'
import { Footer } from "../components/Footer"


export const AuthorsPage = () => {
  
    return (
        <>
            <Header />
            <main className="container mt-16 md:mb-[4.2rem] mx-auto h-auto bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 md:rounded-md p-2">
                <h1 className="font-semibold text-white text-lg text-center">Authors</h1>
                <section className=" container flex flex-wrap my-6 mx-auto md:w-4/12 p-1">
                <a href="https://github.com/Dartanex" target="_blank">
                    <img src={authorDartanex} alt="Daniel Orantes" 
                    className="relative w-full rounded-full"/>

                    <div className="ms-[4.3rem] md:ms-2 p-4 md:p-4 lg:w-48 lg:ms-6 xl:ms-32">
                        <p className="shadow-md rounded-2xl p-1 px-4 md:p-1 shadow-slate-800 text-white text-sm text-center font-medium tracking-widest bg-indigo-500/40">Developer</p>
                        <p className="shadow-md rounded-2xl mt-2 p-1 px-4 md:p-1 md:px-4 lg:px-5 shadow-slate-800 text-white text-sm font-bold tracking-widest bg-indigo-500/50">Daniel Orantes</p>
                    </div>
                </a>
                </section>
            </main>
            <div className="mb-[-3.5vh] md:mb-[-3.5vh]">
                <Footer />
            </div>
        </>
    )
}
