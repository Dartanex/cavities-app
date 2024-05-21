import { Link } from 'react-router-dom'
import cavities from '../assets/cavities.png'

// eslint-disable-next-line no-unused-vars
export const Card = (props) => {

    return(
        <>
            <div className="rounded-xl shadow-lg backdrop-blur-md bg-black/40 container mt-6 md:my-2 mx-auto w-7/12 md:w-9/2">
                <div className="p-5 flex flex-col content-between gap-4">
                    <div className="rounded-xl overflow-hidden">
                        <img loading='lazy' src={cavities} alt="Caries dental" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">{props.title}</h3>
                    <div>
                        <p className='font-base text-white'>{props.description}</p>
                    </div>
                    <div className='mt-4 md:mt-10'>
                        <Link to={props.to} className='rounded-md p-2 bg-violet-500 font-semibold text-slate-100'>{props.button}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
