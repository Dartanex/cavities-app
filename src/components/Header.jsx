import { useState } from 'react'
import dentalcleaning from '../assets/dentart-logo.png'
import { NavbarButton } from './NavbarButton'
import { IoMenu, IoClose } from "react-icons/io5"
import { DropdownButton } from './DropdownButton'

export const Header = () => {

    const [open, setOpen] = useState(false)
    return (
        <header className="bg-white/40 shadow-md w-full fixed top-0 left-0 z-10 backdrop-blur-md">
            <nav className="mx-auto md:flex md:flex-row md:items-center md:justify-between  gap-5 md:px-10 px-7">
                <div className='cursor-pointer flex'>
                    <img className="size-20 mr-1 mt-[-1%] rounded-full" src={dentalcleaning} alt="teeth" />
                    <h3 className='md:mt-10 mt-5 ms-6 md:ms-4 text-3xl font-semibold'>DENTART</h3>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6'>
                {open ? <IoClose className='text-3xl cursor-pointer inline-block md:hidden'/> : 
                <IoMenu className='text-3xl cursor-pointer inline-block md:hidden'/>}
                </div>
                <div className={`absolute z-10  md:static md:min-h-fit min-h-[60hv] left-0 top[10%] w-full md:w-auto flex items-center 
                px-5 transition-all duration-500 ease-in ${open ? 'top-25 bg-black/90 backdrop-blur-sm md:bg-transparent' : 'top-[-490px]'} `}>
                    <div className='flex flex-col md:flex-row md:justify-center md:gap-4 gap-6 my-3 md:mb-0'>
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