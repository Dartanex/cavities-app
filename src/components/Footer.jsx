import { Link } from 'react-router-dom'
import logodentart from '../assets/dentart-logo.png'

export const Footer = () => {
  return (
    <>
        <footer className='bottom-0 mt-5 bg-white/30 md:max-w-screen-xl p-2'>
            <div className='w-1/2 ms-5 md:ms-16 flex'>
                <img loading='lazy' className='w-40 rounded-full' src={logodentart} alt="logo Dentart" />
                <p className=' font-bold text-3xl mt-16'>DENTART</p>
            </div>
            <div className='mt-2'>
                <p className='text-slate-200 text-center mb-2'>
                    &#x2117; &#169; Dentart, 2024. Derechos reservados, powered by <Link className='underline cursor-pointer'>Authors</Link>
                </p>
            </div>
        </footer>
    </>
  )
}
