import { useDropdownContext } from "../../context/dropdownContext"
import { TypeOfDropdownBtnTwoImg } from "../icdasDropdownBtns/TypeOfDropdownBtnTwoImg"
import fourFosaFisuraOne from '../../assets/icdas/4/4-fosa-fisura-1.png'
import fourFosaFisuraTwo from '../../assets/icdas/4/4-fosa-fisura-2.png'
import fourSuperficieLisaOne from '../../assets/icdas/4/4-superficie-lisa-1.png'
import fourSuperficieLisaTwo from '../../assets/icdas/4/4-superficie-lisa-2.png'
import fourSuperficieLisaThree from '../../assets/icdas/4/4-superficie-lisa-3.png'
import fourSuperficieLisaLibreOne from '../../assets/icdas/4/4-superficie-lisalibre-1.png'

export const CodeFour = () => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()
  
    return (
        <>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('sombraOscuraSubyacente') }}
              aria-expanded={isDropdownOpen['sombraOscuraSubyacente'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  4
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  Sombra oscura subyacente de  dentina
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
              {isDropdownOpen['sombraOscuraSubyacente'] && (
                <div>
                  <TypeOfDropdownBtnTwoImg name={'fourFosaFisura'} title={'Fosa y fisura'}  
                  imgOne={fourFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={fourFosaFisuraTwo} altTwo={'Fosa y fisura'} />
                  <TypeOfDropdownBtnTwoImg name={'fourSuperficieLisa'} title={'Superficie lisa'} 
                  imgOne={fourSuperficieLisaOne} altOne={'Superficie lisa'} imgTwo={fourSuperficieLisaTwo} altTwo={'Superficie lisa'} 
                  imgThree={fourSuperficieLisaThree} altThree={'Superficie lisa'} />
                  <TypeOfDropdownBtnTwoImg name={'fourSuperficieLisaLibre'} title={'Superficie lisa libre'}  
                  imgOne={fourSuperficieLisaLibreOne} altOne={'Superficie lisa libre'} />
                </div>
              )}
            </section>
        </>
    )
}
