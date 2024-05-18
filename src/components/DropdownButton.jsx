import { useState } from "react"
import { Link } from "react-router-dom"


export const DropdownButton = () => {
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            <div className="md:mt-4">
                    <div>
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="inline-flex w-full rounded-md font-semibold text-2xl px-2 py-2"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                        >
                            Clasificación de Caries
                            <svg className="-mr-1 ml-2 mt-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {isDropdownOpen && (
                        <div className=" md:static md:min-h-fit min-h-[60hv] left-0 top[10%] w-full md:w-auto flex items-center 
                        px-5 transition-all duration-500 ease-in top-25" 
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="md:w-5 md:h-5 md:ms-1 md:rounded-sm md:absolute  mt-20 rotate-45">
                            </div>
                            <div className="py-2 flex flex-col gap-4 md:absolute md:z-20 md:rounded-md  top-20 md:top-28" role="none">
                                <Link to="/typecavities#igdas" 
                                className=" px-4 py-2 text-xl hover:bg-gray-800 font-bold" role="menuitem">
                                    ICDAS
                                </Link>
                                <Link to="/typecavities#black" 
                                className="px-4 py-2 text-xl hover:bg-gray-800 font-bold" role="menuitem">
                                    BLACK
                                </Link>
                                <Link to="/typecavities#monhHume" 
                                className="px-4 py-2 text-xl hover:bg-gray-800 font-bold" role="menuitem">
                                    MOUNT-HUME
                                </Link>    
                            </div>
                        </div>
                    )}
            </div> 
        </>
  )
}
