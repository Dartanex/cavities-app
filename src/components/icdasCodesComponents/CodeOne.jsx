import { useDropdownContext } from "../../context/dropdownContext"
import { TypeOfDropdownBtnTwoImg } from "../typeOfDropdownBtns/TypeOfDropdownBtnTwoImg"
import { TypeOfDropdownBtnFourImg } from "../typeOfDropdownBtns/TypeOfDropdownBtnFourImg"
import oneFosFisuraOne from '../../assets/icdas/1/1-fosa-fisura-1.png'
import oneFosFisuraTwo from '../../assets/icdas/1/1-fosa-fisura-2.png'
import oneFosFisuraThree from '../../assets/icdas/1/1-fosa-fisura-3.png'
import oneFosFisuraFour from '../../assets/icdas/1/1-fosa-fisura-4.png'
import oneSuperficieLisaOne from '../../assets/icdas/1/1-superficie-lisa-1.png'
import oneSuperficieLisaTwo from '../../assets/icdas/1/1-superficie-lisa-2.png'
import oneSuperficieLisaLibreOne from '../../assets/icdas/1/1-superficie-lisalibre-1.png'

export const CodeOne = () => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()

    return (
        <>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cambioVisibleEsmalte') }}
              aria-expanded={isDropdownOpen['cambioVisibleEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  1
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  Cambio visible en esmalte - visto seco
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
              {isDropdownOpen['cambioVisibleEsmalte'] && (
                <div>
                  <TypeOfDropdownBtnFourImg name={'oneFosaFisura'} title={'Fosa y fisura'}  
                  imgOne={oneFosFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={oneFosFisuraTwo} altTwo={'Fosa y fisura'}
                  imgThree={oneFosFisuraThree} altThree={'Fosa y fisura'}
                  imgFour={oneFosFisuraFour} altFour={'Fosa y fisura'}/>
                  <TypeOfDropdownBtnTwoImg name={'oneSuperficieLisa'} title={'Superficie lisa'} 
                  imgOne={oneSuperficieLisaOne} altOne={'Superficie lisa'} imgTwo={oneSuperficieLisaTwo} altTwo={'Superficie lisa'} />
                  <TypeOfDropdownBtnTwoImg name={'oneSuperficieLisaLibre'} title={'Superficie lisa libre'}  
                  imgOne={oneSuperficieLisaLibreOne} altOne={'Superficie lisa libre'} />
                </div>
              )}
            </section>
        </>
    )
}
