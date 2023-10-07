import { Link } from "react-router-dom";
import flower4 from "../../assets/flower8.jpg";
const AboutHome = () => {
    return (
        <div className=" h-full md:h-[500px] w-full bg-blue-950 text-center p-10 md:flex justify-center
        ">
            <img className=" h-[400px] w-[350px] border-2 rounded-xl" src={flower4} alt="" />
            <div className=" md:w-[600px] mt-5 text-left ml-10">
                <h3 className="text-white text-2xl font-bold underline mb-3">About Us</h3>
                <p className="text-slate-100 mb-5">We have the sense fresh, new and original ideas that will ensure the event we organize is successful, unique and memorable. And We are BD Event Management & Wedding Planners, With our young and creative minds, we always ensure that we bring out outstanding events that are easily distinguished from other events of the same field. <br /><br />We are creative in every aspect of the event; planning, promotional and publicity as well as execution. By being creative, our events are more outstanding and will leave a great impact not just to us, but to our clients as well.</p>
                <Link to = '/about'>
                <button className="btn btn-secondary">More About Us</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutHome;