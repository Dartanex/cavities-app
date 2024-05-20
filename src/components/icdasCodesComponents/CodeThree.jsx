import { useDropdownContext } from "../../context/dropdownContext"
import { TypeOfDropdownBtnTwoImg } from "../typeOfDropdownBtns/TypeOfDropdownBtnTwoImg"
import threeDefinicionOne from '../../assets/icdas/3/3-definicion-1.png'
import threeDefinicionTwo from '../../assets/icdas/3/3-definicion-2.png'
import threeFosaFisuraOne from '../../assets/icdas/3/3-fosa-fisura-1.png'
import threeSuperficieLisaOne from '../../assets/icdas/3/3-superficie-lisalibre-1.png'
import threeSuperficieLisaTwo from '../../assets/icdas/3/3-superficie-lisalibre-2.png'
import threeCarsOne from '../../assets/icdas/3/3-cars-1.png'

export const CodeThree = () => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()
  
    return (
        <>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('rupturaLocalizadaEsmalte') }}
              aria-expanded={isDropdownOpen['rupturaLocalizadaEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  3
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  Ruptura localizada en esmalte
                </span>                        
                <svg className="h-8 w-8 md:w-6 md:h-6 text-white mt-2" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                aria-hidden="true">
                    <path fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" />
                </svg>      
              </button>
              {isDropdownOpen['rupturaLocalizadaEsmalte'] && (
                <div>
                  <TypeOfDropdownBtnTwoImg name={'threeDefinicion'} title={'Definición'}  
                  imgOne={threeDefinicionOne} altOne={'Definición'} 
                  imgTwo={threeDefinicionTwo} altTwo={'Definición'}/>
                  <TypeOfDropdownBtnTwoImg name={'threeFosaFisura'} title={'Fosa y fisura'}  
                  imgOne={threeFosaFisuraOne} altOne={'Fosa y fisura'} />
                  <TypeOfDropdownBtnTwoImg name={'threeSuperficieLisa'} title={'Superficie lisa'} 
                  imgOne={threeSuperficieLisaOne} altOne={'Superficie lisa'} imgTwo={threeSuperficieLisaTwo} altTwo={'Superficie lisa'} />
                  <TypeOfDropdownBtnTwoImg name={'threeCars'} title={'CARS'}  
                  imgOne={threeCarsOne} altOne={'CARS'} />
                </div>
              )}
            </section>
        </>
    )
}
