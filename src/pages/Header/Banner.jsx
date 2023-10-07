

const Banner = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jG1R-pi6a-EG3e--S89pD2Utp7DonfBOJw&usqp=CAU' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className=" md:flex gap-40">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold text-yellow-300">Hello there</h1>
                        <p className="mb-5 text-black text-xl font-semibold tracking-widest">Therefore, we may consider that you have <br />
                        <span className="text-5xl text-white font-bold">upcoming</span> <br />
                        <span className="text-6xl font-bold text-[#F8C471] tracking-widest">wedding ceremony</span> <br />of you or your nearest one-s!</p>
                        
                    </div>
                </div>
                <div className="border-2 rounded-md drop-shadow-xl h-96 w-82">
                    <img className=" h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWbZ68zFl23Zx0DPIb05d5WwHKSHnE__XaL_sV3y7K_b8m0c_J52RGYXZ2OTx6ZBMWAc&usqp=CAU" alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;