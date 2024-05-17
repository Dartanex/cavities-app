import { Link } from 'react-router-dom'
import cavities from '../assets/cavities.png'

// eslint-disable-next-line no-unused-vars
export const Card = (props) => {

    return(
        <>
            <div className="rounded-xl shadow-lg backdrop-blur-md bg-white/30 container mt-6 md:my-2 mx-auto w-7/12 md:w-9/2">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={cavities} alt="Caries dental" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium">{props.title}</h3>
                    <div>
                        <p>{props.description}</p>
                    </div>
                    <div className='mt-4'>
                        <Link to='/cavities' className='rounded-md p-2 bg-slate-500 text-base text-white'>Ver más</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
