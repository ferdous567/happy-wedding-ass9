import { FaHome, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutContact = () => {
    return (
        <div className="md:h-[300px]  bg-lime-400 m-10 p-10 md:flex ">
            <div className="w-1/2 mx-10">
                <h3 className="text-3xl font-bold">Our Address</h3>
                <p><FaHome></FaHome>
                    Office:1st &  3rd floor, house : C-34 ,Block-E, Lalmatia ,Mohammadpur,
                    1207 Dhaka, Bangladesh</p>
                <p><FaPhone></FaPhone>Call us at: 0 1 7 1 9   344     312</p>
            </div>
            <div className="mt-20">
                <p className="text-xl font-bold mb-5">To get more our service. Please..</p>
                <Link to = '/contact'>
                <button className="btn btn-primary">Contact Us Here</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutContact;