import background from '../../assets/bgimg1.jpg';
import image1 from '../../assets/flower9.jpg';
const About = () => {
    return (
        <div>
            <div className='md:h-[250px] relative'>
                <img className='h-full w-full' src={background} alt="" />
                <h2 className='absolute bottom-20 left-40 text-6xl text-rose-600
                font-bold underline'>About Us</h2>
            </div>
            <div className='w-11/12 mx-auto'>
                <h3 className="text-3xl text-center font-bold my-5">Make Your Wedding More Memorable!</h3>

                <p className=''>is one of the best wedding planner in Bangladesh.  In fact, We have two offices in Bangladesh located in Dhaka & Chittagong. From 2008 we started to doing wedding management company. Meanwhile, from our beginning we have done more then 400 wedding event planning, wedding event budgeting etc. We make all the wedding event management customize packages as per our clients requirements and budget. So, all of our clients was happy to get memorable event within their budget.</p>
                <p>
                As you are here in best wedding planner’s website in Bangladesh. Therefore, we may consider that you have upcoming wedding ceremony of you or your nearest one’s! As you are finding the best Wedding Planner BD, we may say that yes you are in right place.A wedding is a memorable and very important thing for our lives. Ananta Events & Entertainment provides the best wedding event planning in Bangladesh.  As a professional Wedding planning organization – We have a qualified, experienced and best wedding planner group. We can introduce (ways of reaching goals) to face/deal with our customer’s needs in a meaningful way.
                </p>
                <div className='my-20 md:flex justify-around '>
                   
                   <img className='h-[400px] md:w-[350px] rounded-xl drop-shadow-2xl' src={image1} alt="" />
                   
                    <div className='md:w-1/2 '>
                        <h3 className='font-bold text-2xl text-blue-500'>Why are we among Bangladesh’s best wedding planners?</h3>
                        <p>Firstly, A wedding needs fantastic knowledge, preparation, and constant efforts. Ananta Events- organize big and grand fat weddings in Bangladesh. It makes us one of Bangladesh’s most (very good/very pleasing) wedding planners. The best wedding planner BD will create appropriate wedding planner packages for your budget. Since 2008, we providing best wedding planning Services. That is to say, we are proud of the beautiful and exclusive setups and experiences we have developed.</p>
                        <p className='mt-5'>Secondly, Every single individual has this goal in mind somewhere that his / her wedding should be a great one. Also, many of us think it should be at a location/stadium that fits our mood and theme of our wedding. Most Importantly, Our team helps our customers to enjoy those moments in fantastic locations. And not think about something. Wedding Destination is the dream of a dreamer. We delighted that as a wedding coordinator, we are part of that dream.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;