import { useState } from 'react'
import dentalcleaning from '../assets/dental-cleaning.png'
import { NavbarButton } from './NavbarButton'
import { IoMenu, IoClose } from "react-icons/io5"
import { DropdownButton } from './DropdownButton'

export const Header = () => {

    const [open, setOpen] = useState(false)
    return (
        <header className="bg-slate-400 shadow-md w-full fixed top-0 left-0 z-10">
            <nav className="mx-auto md:flex md:flex-row md:items-center md:justify-between  gap-5 md:px-10 px-7">
                <div className='cursor-pointer'>
                    <img className="size-16 mr-1 py-2" src={dentalcleaning} alt="teeth" />
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6'>
                {open ? <IoClose className='text-3xl cursor-pointer inline-block md:hidden'/> : 
                <IoMenu className='text-3xl cursor-pointer inline-block md:hidden'/>}
                </div>
                <div className={`absolute z-10 bg-slate-400 md:static md:min-h-fit min-h-[60hv] left-0 top[10%] w-full md:w-auto flex items-center 
                px-5 transition-all duration-500 ease-in ${open ? 'top-25' : 'top-[-490px]'} `}>
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