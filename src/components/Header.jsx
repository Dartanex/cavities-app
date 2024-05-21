import { useState } from 'react'
import logodentart from '../assets/dentart-logo.png'
import { NavbarButton } from './NavbarButton'
import { IoMenu, IoClose } from "react-icons/io5"
import { DropdownButton } from './DropdownButton'

export const Header = () => {

    const [open, setOpen] = useState(false)
    return (
        <header className="bg-white/40 shadow-md w-full h-auto sticky z-20 top-0  md:h-24 lg:h-auto backdrop-blur-md">
            <nav className="mx-auto flex lg:flex-row lg:items-center content-center justify-between lg:px-10 px-2">
                <div className='cursor-pointer flex'>
                    <img className="size-20 mr-1 rounded-full" loading='lazy' src={logodentart} alt="teeth" />
                    <h3 className='lg:mt-6 mt-5 ms-4 lg:ms-4 text-3xl font-semibold'>DENTART</h3>
                </div>
                <div onClick={() => setOpen(!open)} className='mt-6'>
                {open ? <IoClose className='text-3xl cursor-pointer inline-block md:me-2 lg:hidden'/> : 
                <IoMenu className='text-3xl cursor-pointer inline-block md:me-2 lg:hidden'/>}
                </div>
                <div className={`absolute lg:static lg:min-h-fit left-0 w-full lg:w-auto flex items-center 
                px-5 transition-all duration-500 ease-in ${open ? 'mt-20 bg-black/90 backdrop-blur-sm lg:bg-transparent' : 'hidden lg:flex'} `}>
                    <div className='flex flex-col lg:flex-row lg:justify-center lg:gap-4 gap-6 my-3 md:my-10 lg:my-3  lg:mb-0'>
                        <NavbarButton title='Inicio' to={'/home'} />
                        <NavbarButton title='Caries' to={'/cavities'} />
                        <DropdownButton />                     
                        <NavbarButton title='Mide tus conocimientos' to={'/quiz'} />
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}