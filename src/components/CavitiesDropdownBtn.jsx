import { useDropdownContext } from "../context/dropdownContext"

// eslint-disable-next-line no-unused-vars
export const CavitiesDropdownBtn = (props) => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()

    return (
    <>
        <div className="mt-5 ms-2">
        <button className="inline-flex w-full rounded-md font-base px-2 py-2 text-left text-white text-md" 
        onClick={() => { toggleDropdown(props.name) }}
        aria-expanded={isDropdownOpen[props.name] ? 'true':'false'}
        aria-haspopup="true">
            <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">{props.number}</span>
            <span className=" ms-1 flex w-3/4 md:w-fit">
                {props.title}
            </span>                        
                <svg className="h-6 w-6 md:w-6 md:h-6 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                aria-hidden="true">
                    <path fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" />
                </svg>
            
        </button>

        {isDropdownOpen[props.name] && (
            <div>
                <img className="w-10/12 mx-auto rounded-md md:w-4/12 md:ms-5" 
                src={props.img} alt={props.alt} />
            </div>
        )}
        </div>
    </>
  )
}
