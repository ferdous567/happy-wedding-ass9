
import AboutContact from "../About/AboutContact";
import Banner from "../Header/Banner";
import AboutHome from "./AboutHome";
import HomeBlog from "./HomeBlog";
import HomeService from "./HomeService";



const Home = () => {
    return (
        <div>
            <div  className="w-11/12 mx-auto">
                
                <Banner></Banner>
                <HomeService></HomeService>
                <AboutHome></AboutHome>
                <HomeBlog></HomeBlog>
                <AboutContact></AboutContact>
            </div>
            
        </div>
    );
};

export default Home;