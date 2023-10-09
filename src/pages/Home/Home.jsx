
import { useEffect } from "react";
import AboutContact from "../About/AboutContact";
import Banner from "../Header/Banner";
import AboutHome from "./AboutHome";
import HomeBlog from "./HomeBlog";
// import HomeService from "./HomeService";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLoaderData } from "react-router-dom";
import SingleService from "../Service/SingleService";


const Home = () => {
 const service = useLoaderData();
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>

            <Banner></Banner>
            <div className="w-11/12 mx-auto">
                <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h3 className="text-4xl font-bold text-center text-cyan-500 my-6 underline">Our services</h3>
                    <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full
            w-11/12 mx-auto'>
                
                    {
                        service.slice(0, 6).map(serviceData => <SingleService key={serviceData.id}
                        service={serviceData}></SingleService>)
                    }
                    <div>
                        <Link to = '/service'>
                            <button className="btn btn-outline btn-accent">Show All Services</button>
                        </Link>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <AboutHome></AboutHome>
                    

                </div>
                <HomeBlog></HomeBlog>
                <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector">
                <AboutContact></AboutContact>
                </div>
            </div>

        </div>

    );

};
<script src="bower_components/aos/dist/aos.js">
    AOS.init();
</script>
export default Home;