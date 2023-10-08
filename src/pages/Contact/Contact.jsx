import background from '../../assets/bgimg3.jpg';
const Contact = () => {
    return (
        <div >
            <div className='md:h-[250px] relative'>
                <img className='h-full w-full' src={background} alt="" />
                <h2 className='absolute bottom-20 left-40 text-6xl text-sky-700
                font-bold underline'>Contact Us</h2>
            </div>
            <div className='p-10  md:flex justify-around bg-gradient-to-r from-rose-200 to-pink-200 '>
                <div className='pt-24'>
                    <div >
                        <h2 className='text-xl font-semibold'>Call:</h2>
                        <p>Call for emergency: 01 158 125 123 </p>
                        <p>Head Office: 01 158 125 123 </p>
                        <p>Call for Service: 01 158 125 123 </p>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-xl font-semibold'>Email Us</h2>
                        <p>Email: info@example.com </p>
                        <p>Head Office: office@example.com </p>
                        <p>Service: service@example.com </p>
                    </div>
                    </div>
                    <div className='w-1/2'>
                        <h2 className='text-4xl font-bold text-red-500 mb-6'>Send Us Message </h2>
                        <div>
                            <input className=' p-3 m-3 rounded-md' type="text" placeholder='Name' />
                            <input className=' p-3 m-3 rounded-md' type="email" placeholder='Email'/>
                            <input className=' p-3 m-3 rounded-md ' type="number" placeholder='Contact No'/><br />
                            
                            <textarea className='p-3' name="" id="" cols="30" rows="5" placeholder='Write Your Message'></textarea><br />
                            <button className='btn btn-info m-5'>Send</button>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default Contact;