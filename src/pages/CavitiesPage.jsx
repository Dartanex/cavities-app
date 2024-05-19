import { Header } from "../components/Header"
import useDropdownButton from "../hooks/useDropdownButton"
import useSecondDropdownButton from "../hooks/useSecondDropdownButton"

export const CavitiesPage = () => {

    const {isDropdownOpen, toggleDropdown} = useDropdownButton()
    const {isDropdownOpenSecond, toggleDropdownSecond} = useSecondDropdownButton()

    return (
        <>
            <Header />
            <main className="container bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 md:p-16 mt-24 mx-auto rounded-md p-2">
                <h1 className="font-bold text-white text-center md:text-2xl md:mb-16">Información de caries</h1>
                <section className="container mt-5">
                    <div className="inline-flex w-full rounded-md font-semibold px-2 py-2" onClick={() => {toggleDropdown()}}>
                        <h2 className="font-base text-white w-3/4 md:w-96 pt-1">Algunas enfermedades más comunes en niños:</h2>
                        <svg className="h-10 w-10 md:w-8 md:h-8 text-white ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                    
                    {isDropdownOpen && (
                        <ul className="list-outside list-disc ms-4 p-2 md: ps-6">
                        <li className="font-base text-white text-pretty mt-2">
                            <p>
                                Caries dental. Está causada por las bacterias de la placa, que aparece por falta de higiene, 
                                y que producen ácidos que “descomponen” los dientes, atacando el esmalte dental.
                            </p> 
                        </li>
                        <li className="font-base text-white text-pretty mt-2">
                            <p>
                                Caries en la infancia. Es la enfermedad específica que afecta a la dentición primaria en niños 
                                pequeños, cuyos períodos de mayor susceptibilidad se establecen entre los 3 y 4 años e incluye 
                                la caries dental del biberón.
                            </p>
                        </li>
                    </ul>
                    )}
                </section>
                <section className="container mt-5">
                <div className="inline-flex w-full rounded-md font-semibold px-2 py-2" onClick={() => { toggleDropdownSecond() }}>
                        <h2 className="font-base text-white w-3/4 md:w-96 pt-1">Causa de la caries dental:</h2>
                        <svg className="h-10 w-10 md:w-8 md:h-8 text-white ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {isDropdownOpenSecond && (
                        <div>
                            <p className="text-white p-2">
                                La etiología es multifactorial se ha establecido que el Streptococcus mutans, inmerso en un biofilm 
                                bacteriano, es su principal agente causal, efecto potenciado por características en la dieta de los 
                                pacientes infantiles. Los hidratos de carbono fermentables presentes en la dieta son metabolizados 
                                por las bacterias produciendo una alteración en la homeostasis bacteriana al disminuir el pH mediante 
                                la producción de ácidos y la consecuente desmineralización de los tejidos dentales.
                            </p>
                        </div>
                    )}

                </section>
            </main>
            
        </>
    )
}