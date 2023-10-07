import { Link } from "react-router-dom";
import flower1 from "../../assets/flower10.jpg";
import flower2 from "../../assets/flower12.jpg";
import flower3 from "../../assets/flower6.jpg";
import flower4 from "../../assets/flower7.jpg";
const HomeService = () => {
    return (
        <div className="h-[500px] mt-20 md:w-3/4 mx-auto">
            <h2 className="text-5xl text-violet-600 font-bold text-center mb-10">Our Services</h2>
            <div className="  flex justify-between md:justify-around gap-3">
                <div className="cursor-pointer">
                    <img className="h-[200px] w-[200px]" src={flower1} alt="" />
                    <h3 className="text-lg text-blue-500 font-bold text-center
                    mt-4">Gaye Holud</h3>
                </div>
                <div className="cursor-pointer">
                    <img className="h-[200px] w-[200px]" src={flower2} alt="" />
                    <h3 className="text-lg text-pink-500 font-bold text-center
                    mt-4">Photography</h3>
                </div>
                <div className="cursor-pointer">
                    <img className="h-[200px] w-[200px]" src={flower3} alt="" />
                    <h3 className="text-lg text-green-500 font-bold text-center
                    mt-4">Venue Celling</h3>
                </div>
                <div className="cursor-pointer">
                    <img className="h-[200px] w-[200px]" src={flower4} alt="" />
                    <h3 className="text-lg text-orange-500 font-bold text-center
                    mt-4">Stage Decoration</h3>
                </div>
            </div>
            <div className="text-center mt-8">
            <Link to = '/service'>
            <button className="btn btn-success">Show All Services</button>
            </Link>
            </div>
        </div>
    );
};

export default HomeService;