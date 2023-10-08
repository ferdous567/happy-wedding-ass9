import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleService = ({ service }) => {
    const { id, title, image,description, price } = service;
    return (
        <div className='flex'>
            <div className="card  bg-base-100 shadow-xl flex-grow">
                <figure><img className="h-[250px] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/serviceDetails/${id}`}>
                        <button  className="btn btn-primary">Show Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleService.propTypes = {
    service: PropTypes.object
}
export default SingleService;