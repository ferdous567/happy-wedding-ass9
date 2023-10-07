import Marquee from "react-fast-marquee";
import men1 from "../../assets/men1.jpg";
import women1 from "../../assets/women1.jpg";
import men2 from "../../assets/men2s.jpg";
import women2 from "../../assets/women2.jpg";
import men3 from "../../assets/men3.jpg";
import women3 from "../../assets/women3.jpg";
const HomeBlog = () => {
    return (
        <div className="my-8 ">
            <h3 className="text-4xl text-amber-600 font-bold text-center mb-10">Our Best Reviews</h3>
            <Marquee speed={100}>
                <div className=" w-[200px] mx-10 ">
                    <img className="h-[150px] w-[150px] rounded-full mb-8 " src={men1} alt="" />
                    <p className="text-justify">We are very particular in every aspect of the event management to guarantee the event we organise runs perfectly and efficiently.</p>
                </div>
                <div className=" w-[200px] mx-10 ">
                    <img className="h-[150px] w-[150px] rounded-full mb-8 " src={women1} alt="" />
                    <p>We are very particular in every aspect of the event management to guarantee the event we organise runs perfectly and efficiently.</p>
                </div>
                <div className=" w-[200px] mx-10">
                    <img className="h-[150px] w-[150px] rounded-full mb-8 " src={men2} alt="" />
                    <p>We are very particular in every aspect of the event management to guarantee the event we organise runs perfectly and efficiently.</p>
                </div>
                <div className=" w-[200px] mx-10">
                    <img className="h-[150px] w-[150px] rounded-full mb-8 " src={women2} alt="" />
                    <p>We are very particular in every aspect of the event management to guarantee the event we organise runs perfectly and efficiently.</p>
                </div>
                <div className=" w-[200px] mx-10">
                    <img className="h-[150px] w-[150px] rounded-full mb-8 " src={men3} alt="" />
                    <p>We are very particular in every aspect of the event management to guarantee the event we organise runs perfectly and efficiently.</p>
                </div>
                <div className=" w-[200px] mx-10">
                    <img className="h-[150px] w-[150px] rounded-full mb-8 " src={women3} alt="" />
                    <p>We are very particular in every aspect of the event management to guarantee the event we organise runs perfectly and efficiently.</p>
                </div>
            </Marquee>
        </div>
    );
};

export default HomeBlog;