
import { useEffect } from "react";
import AboutContact from "../About/AboutContact";
import Banner from "../Header/Banner";
import AboutHome from "./AboutHome";
import HomeBlog from "./HomeBlog";
import HomeService from "./HomeService";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>

            <Banner></Banner>
            <div className="w-11/12 mx-auto">
                <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <HomeService></HomeService>
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