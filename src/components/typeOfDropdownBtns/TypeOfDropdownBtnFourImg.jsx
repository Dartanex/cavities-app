import { useDropdownContext } from "../../context/dropdownContext"

export const TypeOfDropdownBtnFourImg = (props) => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()
  
    return (
        <>
            <div className="mt-5 mx-auto px-2 w-full">
                <button className="inline-flex w-fit gap-2 rounded-md font-base px-2 py-2 text-left text-white text-md" 
                onClick={() => { toggleDropdown(props.name) }}
                aria-expanded={isDropdownOpen[props.name] ? 'true':'false'}
                aria-haspopup="true">
                    <span className=" ms-1 w-10/12 md:w-fit">
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
                    <div className="md:grid md:grid-flow-row md:grid-cols-2 md:auto-rows-fr md:grid-rows-2 md:gap-2 md:p-2">
                
                        <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                        loading='lazy' src={props.imgOne} alt={props.altOne} />
                        <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                        loading='lazy' src={props.imgTwo} alt={props.altTwo} />
                        <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                        loading='lazy' src={props.imgThree} alt={props.altThree} />
                        <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                        loading='lazy' src={props.imgFour} alt={props.altFour} />
                    </div>
                )}
            </div>    
        </>
    )
}
