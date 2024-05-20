import { useDropdownContext } from "../../context/dropdownContext"
import { TypeOfDropdownBtnTwoImg } from "../icdasDropdownBtns/TypeOfDropdownBtnTwoImg"
import fiveFosaFisuraOne from '../../assets/icdas/5/5-fosa-fisura-1.png'
import fiveFosaFisuraTwo from '../../assets/icdas/5/5-fosa-fisura-2.png'
import fiveSuperficieLisaOne from '../../assets/icdas/5/5-superficie-lisa-1.png'
import fiveSuperficieLisaTwo from '../../assets/icdas/5/5-superficie-lisa-2.png'
import fiveSuperficieLisaThree from '../../assets/icdas/5/5-superficie-lisa-3.png'
import fiveCarsOne from '../../assets/icdas/5/5-cars-1.png'
import fiveCarsTwo from '../../assets/icdas/5/5-cars-2.png'

export const CodeFive = () => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()
  
    return (
        <>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cavidadDetectable') }}
              aria-expanded={isDropdownOpen['cavidadDetectable'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  5
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  Cavidad detectable con dentina visible
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
              {isDropdownOpen['cavidadDetectable'] && (
                <div>
                  <TypeOfDropdownBtnTwoImg name={'fiveFosaFisura'} title={'Fosa y fisura'}  
                  imgOne={fiveFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={fiveFosaFisuraTwo} altTwo={'Fosa y fisura'} />
                  <TypeOfDropdownBtnTwoImg name={'fiveSuperficieLisa'} title={'Superficie lisa'} 
                  imgOne={fiveSuperficieLisaOne} altOne={'Superficie lisa'} imgTwo={fiveSuperficieLisaTwo} altTwo={'Superficie lisa'} 
                  imgThree={fiveSuperficieLisaThree} altThree={'Superficie lisa'} />
                  <TypeOfDropdownBtnTwoImg name={'fiveCars'} title={'CARS'}  
                  imgOne={fiveCarsOne} altOne={'CARS'} imgTwo={fiveCarsTwo} altTwo={'CARS'} />
                </div>
              )}
            </section>
        </>
    )
}
