import { useState } from "react";

const useSecondDropdownButton = () => {

    const [isDropdownOpenSecond, setIsDropdownOpenSecond] = useState(false)

    const toggleDropdownSecond = () => {
        setIsDropdownOpenSecond(!isDropdownOpenSecond)
    }

    return  {
        isDropdownOpenSecond,
        toggleDropdownSecond
    }
}

export default useSecondDropdownButton