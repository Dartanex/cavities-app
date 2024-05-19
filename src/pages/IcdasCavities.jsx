import { useDropdownContext } from "../context/dropdownContext"
import { Header } from "../components/Header"
import { TypeOfDropdownBtnTwoImg } from "../components/icdasDropdownBtns/TypeOfDropdownBtnTwoImg"
import zeroFosaFisuraOne from '../assets/icdas/0-fosa-fisura-1.png'
import zeroFosaFisuraTwo from '../assets/icdas/0-fosa-fisura-2.png'
import zeroSuperficieLisaOne from '../assets/icdas/0-superficie-lisa-1.png'
import zeroSuperficieLisaTwo from '../assets/icdas/0-superficie-lisa-2.png'
import zeroSuperficieLisaLibreOne from '../assets/icdas/0-superficie-lisalibre-1.png'
import zeroSuperficieLisaLibreTwo from '../assets/icdas/0-superficie-lisalibre-2.png'
import zeroCarsOne from '../assets/icdas/0-cars-1.png'
import zeroCarsTwo from '../assets/icdas/0-cars-2.png'
import { Footer } from "../components/Footer"

export const IcdasCavities = () => {
  
  const {isDropdownOpen, toggleDropdown} = useDropdownContext()
  return (
    <>
        <Header />

        <main className="container mt-16 mx-auto bg-black/50 backdrop-blur-sm w-11/12 md:w-3/4 rounded-md p-2">
            <h1 className="text-white text-xl md:text-2xl text-center font-bold"> Códigos de caries según ICDAS</h1>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex  rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('sano') }}
              aria-expanded={isDropdownOpen['sano'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  0
                </span>
                <span className=" ms-1 flex mt-1 md:w-fit text-xl">
                  Sano
                </span>                        
                <svg className="h-6 w-6 md:w-6 md:h-6 text-white mt-2" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                aria-hidden="true">
                    <path fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" />
                </svg>      
              </button>
              {isDropdownOpen['sano'] && (
                <div>
                  <TypeOfDropdownBtnTwoImg name={'fosaFisura'} title={'Fosa y fisura'}  
                  imgOne={zeroFosaFisuraOne} altOne={'Fosa y fisura'} imgTwo={zeroFosaFisuraTwo} altTwo={'Fosa y fisura'}/>
                  <TypeOfDropdownBtnTwoImg name={'superficieLisa'} title={'Superficie lisa'} 
                  imgOne={zeroSuperficieLisaOne} altOne={'Superficie lisa'} imgTwo={zeroSuperficieLisaTwo} altTwo={'Superficie lisa'} />
                  <TypeOfDropdownBtnTwoImg name={'superficieLisaLibre'} title={'Superficie lisa libre'}  
                  imgOne={zeroSuperficieLisaLibreOne} altOne={'Superficie lisa libre'} 
                  imgTwo={zeroSuperficieLisaLibreTwo} altTwo={'Superficie lisa libre'}/>
                  <TypeOfDropdownBtnTwoImg name={'cars'} title={'CARS'}  
                  imgOne={zeroCarsOne} altOne={'CARS'} imgTwo={zeroCarsTwo} altTwo={'CARS'}/>
                </div>
              )}
            </section>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cambioVisibleEsmalte') }}
              aria-expanded={isDropdownOpen['cambioVisibleEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  1
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  cambio visible en esmalte - visto seco
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
                  <TypeOfDropdownBtnTwoImg name={'fosaFisura'} title={'Fosa y fisura'}  
                  imgOne={zeroFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={zeroFosaFisuraTwo} altTwo={'Fosa y fisura'}/>
                </div>
              )}
            </section>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cambioVisibleEsmalte') }}
              aria-expanded={isDropdownOpen['cambioVisibleEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  2
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  cambio visible en esmalte - visto seco
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
                  <TypeOfDropdownBtnTwoImg name={'fosaFisura'} title={'Fosa y fisura'}  
                  imgOne={zeroFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={zeroFosaFisuraTwo} altTwo={'Fosa y fisura'}/>
                </div>
              )}
            </section>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cambioVisibleEsmalte') }}
              aria-expanded={isDropdownOpen['cambioVisibleEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  3
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  cambio visible en esmalte - visto seco
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
                  <TypeOfDropdownBtnTwoImg name={'fosaFisura'} title={'Fosa y fisura'}  
                  imgOne={zeroFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={zeroFosaFisuraTwo} altTwo={'Fosa y fisura'}/>
                </div>
              )}
            </section>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cambioVisibleEsmalte') }}
              aria-expanded={isDropdownOpen['cambioVisibleEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  4
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  cambio visible en esmalte - visto seco
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
                  <TypeOfDropdownBtnTwoImg name={'fosaFisura'} title={'Fosa y fisura'}  
                  imgOne={zeroFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={zeroFosaFisuraTwo} altTwo={'Fosa y fisura'}/>
                </div>
              )}
            </section>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cambioVisibleEsmalte') }}
              aria-expanded={isDropdownOpen['cambioVisibleEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  5
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  cambio visible en esmalte - visto seco
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
                  <TypeOfDropdownBtnTwoImg name={'fosaFisura'} title={'Fosa y fisura'}  
                  imgOne={zeroFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={zeroFosaFisuraTwo} altTwo={'Fosa y fisura'}/>
                </div>
              )}
            </section>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex w-fit rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('cambioVisibleEsmalte') }}
              aria-expanded={isDropdownOpen['cambioVisibleEsmalte'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  6
                </span>
                <span className=" ms-1 flex mt-1 w-10/12 md:w-fit text-xl">
                  cambio visible en esmalte - visto seco
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
                  <TypeOfDropdownBtnTwoImg name={'fosaFisura'} title={'Fosa y fisura'}  
                  imgOne={zeroFosaFisuraOne} altOne={'Fosa y fisura'} 
                  imgTwo={zeroFosaFisuraTwo} altTwo={'Fosa y fisura'}/>
                </div>
              )}
            </section>
        </main>
        <div className="mb-[-3.5vh] md:mb-[-3vh]">
          <Footer />
        </div>
    </>
  )
}
