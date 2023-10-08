
const SingleService = ({ service }) => {
    const { title, image,description, price } = service;
    return (
        <div className='flex'>
            <div className="card  bg-base-100 shadow-xl flex-grow">
                <figure><img className="h-[250px] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;