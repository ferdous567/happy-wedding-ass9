import { useLoaderData } from 'react-router-dom';
import background from '../../assets/bgimg2.jpg';
import SingleService from './SingleService';
const Service = () => {
    const serviceData = useLoaderData();

    return (
        <div>
            <div className='md:h-[250px] relative'>
                <img className='h-full w-full' src={background} alt="" />
                <h2 className='absolute bottom-20 left-40 text-6xl text-blue-700
                font-bold underline'>Our All Services</h2>
            </div>
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full
            w-11/12 mx-auto'>
                {
                    serviceData.map(services => <SingleService key={services.id} 
                        service={services}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;