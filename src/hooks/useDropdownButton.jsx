import { useState } from "react";

const useDropdownButton = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return  {
        isDropdownOpen,
        toggleDropdown
    }
}

export default useDropdownButton