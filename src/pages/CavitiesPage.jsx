import { CavitiesDropdownBtn } from "../components/CavitiesDropdownBtn"
import { Header } from "../components/Header"
import { useDropdownContext } from "../context/dropdownContext"
import tipo0 from '../assets/tiposCaries/0.png'
import tipo1 from '../assets/tiposCaries/1.png'
import tipo3 from '../assets/tiposCaries/3.png'
import tipo4 from '../assets/tiposCaries/4.png'
import tipo5 from '../assets/tiposCaries/5.png'
import tipo6 from '../assets/tiposCaries/6.png'
import tipo7 from '../assets/tiposCaries/7.png'
import tipo8 from '../assets/tiposCaries/8.png'

export const CavitiesPage = () => {

    const {isDropdownOpen, toggleDropdown} = useDropdownContext()

    return (
        <>
            <Header />
            <main className="container bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 md:p-16 mt-24 mx-auto rounded-md p-2">
                <h1 className="font-bold text-white text-center md:text-2xl md:mb-16">Información de caries</h1>
                <section className="container mt-5">
                    <button className="inline-flex w-full rounded-md font-semibold px-2 py-2 text-left" 
                    onClick={() => { toggleDropdown('dropOne') }}
                    aria-expanded={isDropdownOpen['dropOne'] ? 'true':'false'}
                    aria-haspopup="true">
                        <h2 className="font-base text-white w-3/4 md:w-96 pt-1">Algunas enfermedades más comunes en niños:</h2>
                        <svg className="h-10 w-10 md:w-8 md:h-8 text-white ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    
                    {isDropdownOpen['dropOne'] && (
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
                <button className="inline-flex w-full rounded-md font-semibold px-2 py-2 text-left" 
                onClick={() => { toggleDropdown('dropTwo') }}
                aria-expanded={isDropdownOpen['dropTwo'] ? 'true':'false'}
                aria-haspopup="true">
                        <h2 className="font-base text-white w-3/4 md:w-96 pt-1">Causa de la caries dental:</h2>
                        <svg className="h-10 w-10 md:w-8 md:h-8 text-white ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {isDropdownOpen['dropTwo'] && (
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
                <section className="container mt-5">
                    <button className="inline-flex w-full rounded-md font-semibold px-2 py-2 text-left" 
                    onClick={() => { toggleDropdown('dropThird') }}
                    aria-expanded={isDropdownOpen['dropThird'] ? 'true':'false'}
                    aria-haspopup="true">
                        <h2 className="font-base text-white w-3/4 md:w-96 pt-1">Tipos de Caries:</h2>
                        <svg className="h-10 w-10 md:w-8 md:h-8 text-white ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {isDropdownOpen['dropThird'] && (
                        <div>
                            <h3 className="text-white font-base ps-2">Condición de la superficie:</h3>
                            <div>
                                <CavitiesDropdownBtn number='0' name='noRestauradoSellado' title='No restaurado, Ni sellado' 
                                img={tipo0} alt='No restaurado, ni sellado' />
                                <CavitiesDropdownBtn number='1' name='sellanteParcial' title='Sellante, Parcial' 
                                img={tipo1} alt='Sellante, Parcial' />
                                <CavitiesDropdownBtn number='3' name='restauracionColorDiente' title='Restauracion color diente' 
                                img={tipo3} alt='Restauracion color diente' />
                                <CavitiesDropdownBtn number='4' name='RestauracionAmalgama' title='Restauracion en amalgama' 
                                img={tipo4} alt='Restauracion en amalgama' />
                                <CavitiesDropdownBtn number='5' name='coronaAceroInox' title='Corona acero inoxidable' 
                                img={tipo5} alt='Corona acero inoxidable' />
                                <CavitiesDropdownBtn number='6' name='coronaCarillaPorcelana' 
                                title='Corona o Carilla en procelana, oro o metal-porcelana' 
                                img={tipo6} alt='Corona o Carilla en procelana, oro o metal-porcelana' />
                                <CavitiesDropdownBtn number='7' name='restauracionPerdidaFracturada' 
                                title='Restauracion perdida o fracturada' 
                                img={tipo7} alt='Restauracion perdida o fracturada' />
                                <CavitiesDropdownBtn number='8' name='restauracionTemporal' title='Restauracion temporal' 
                                img={tipo8} alt='Restauracion temporal' />
                            </div>
                        </div>
                    )}
                </section>
            </main>
            
        </>
    )
}