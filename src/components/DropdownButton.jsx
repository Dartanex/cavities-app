import { useDropdownContext } from "../context/dropdownContext"
import { DropdownOptionButton } from "./DropdownOptionButton"


export const DropdownButton = () => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()
    
    return (
        <>
            <div className="md:mt-4">
                    <div>
                        <button
                            type="button"
                            onClick={() => {toggleDropdown('clasificationCavities')}}
                            className="inline-flex w-full rounded-md font-semibold text-2xl px-2 py-2 text-white"
                            id="menu-button"
                            aria-expanded={isDropdownOpen['clasificationCavities'] ? 'true':'false'}
                            aria-haspopup="true">
                            Clasificación de Caries
                            <svg className="-mr-1 ml-2 mt-1 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {isDropdownOpen['clasificationCavities'] && (
                        <div className=" md:static md:min-h-fit min-h-[60hv] left-0 top[10%] w-full md:w-auto flex items-center 
                        px-5 transition-all duration-500 ease-in top-25" 
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="md:w-6 md:h-6 md:ms-1 md:rounded-sm md:absolute  mt-20 rotate-45 bg-black/90 backdrop-blur-sm">
                            </div>
                            <div className="py-2 flex flex-col gap-4 md:absolute md:z-20 md:rounded-md md:w-64 top-20 md:top-28 md:bg-black" 
                            role="none">
                                <DropdownOptionButton title="ICDAS" to={'/icdascavities'} />
                                <DropdownOptionButton title="BLACK" to={'/blackcavities'} />
                                <DropdownOptionButton title="MOUNT-HUME" to={'/mounthumecavities'} />    
                            </div>
                        </div>
                    )}
            </div> 
        </>
  )
}
