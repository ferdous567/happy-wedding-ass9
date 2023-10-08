import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const ServiceDetails = () => {
    const {id} = useParams();

    const [detail, setDetail] = useState(null);
    
    useEffect(() => {
        fetch('/service.json')
        .then(res => res.json())
        .then(details =>{
            const detail = details.find(data => data.id === id);
            setDetail(detail)
        })
    }, [])
    
    
    
    const { title, image, all_description} = detail || {};
    return (
        <div >
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500
            h-30 ">
            <h3 className="p-5 text-3xl text-white font-bold text-center">
                Service Details. Category ID-{id}</h3>
            </div>
            <div className="w-3/4 mx-auto">
            <img className="w-full m-5 p-5" src={image} alt="" />
            <h3 className="text-4xl text-center font-bold my-5">{title}</h3>
            <p className="mb-5">{all_description}</p>
            </div>
            <div className="text-center my-5 ">
            <button className="btn btn-outline btn-secondary">Get Service</button>
            </div>
        </div>
    );
};

export default ServiceDetails;