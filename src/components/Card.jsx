import { Link } from 'react-router-dom'
import cavities from '../assets/cavities.png'

// eslint-disable-next-line no-unused-vars
export const Card = (props) => {

    return(
        <>
            <div className="rounded-xl shadow-lg backdrop-blur-md bg-white/40 container mt-6 md:my-2 mx-auto w-7/12 md:w-9/2">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={cavities} alt="Caries dental" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">{props.title}</h3>
                    <div>
                        <p className='font-base '>{props.description}</p>
                    </div>
                    <div className='mt-4'>
                        <Link to='/cavities' className='rounded-md p-2 bg-slate-900 text-base text-pink-200'>{props.button}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
