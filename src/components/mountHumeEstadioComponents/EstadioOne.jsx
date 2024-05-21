import { useDropdownContext } from "../../context/dropdownContext"
import estadioOneOne from '../../assets/mount-hume/estadio-1-1.png'
import estadioOneTwo from '../../assets/mount-hume/estadio-1-2.png'

export const EstadioOne = () => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()
  
    return (
        <>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex  rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('estadioOne') }}
              aria-expanded={isDropdownOpen['estadioOne'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  1
                </span>
                <span className=" ms-1 flex mt-1 md:w-fit text-xl w-52">
                  Lesión con alteración de la superficie, en forma de punto
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
              {isDropdownOpen['estadioOne'] && (
                <div className="md:grid md:grid-flow-row md:grid-cols-2 md:auto-rows-fr md:gap-2 md:p-2">
                  <img className="w-52 mx-auto rounded-md border border-white md:w-9/12 my-4 md:mx-auto" 
                  src={estadioOneOne} alt="Estadio 1" />
                  <img className="w-52 mx-auto rounded-md border border-white md:w-80 my-4 md:mx-auto" 
                  src={estadioOneTwo} alt="Estadio 1" />
                </div>
              )}
            </section>
        </>
    )
}
