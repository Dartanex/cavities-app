import { Link, useLocation } from  'react-router-dom'

// eslint-disable-next-line no-unused-vars
export const NavbarButton = (props) => {

    const location = useLocation() // se eobtiene la URL para lograr el efecto active
    const isActive = location.pathname === props.to // Ruta de la actual URL
    const btnActive = isActive ? ' bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg md:rounded-t-lg md:rounded-b-none md:p-2 md:mt-2' : 'md:p-2 md:mt-2 text-white'

    return (
        <>
            <Link className={btnActive} to={props.to}>
                <p className='text-2xl font-semibold pt-2 px-2'>
                {props.title}
                </p>
            </Link>
        </>
    )
}