import React from 'react';

const About = () => {
    return (
        <div className=' bg-pink-50 p-10 my-20 '>
        <h1 className='text-center text-4xl font-bold text-pink-600'>About Us</h1>
        <div className='grid  my-10  grid-cols-1 md:grid-cols-2 gap-8'>
            <div className=' border'>
                <img className='h-full rounded w-full' src="https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/d85e312f60b48102a2551a7a5daef354" alt="" />
            </div>
            <div>
                <h1>Mahindra First Choice Wheels is  leading used auto platform business which is organizing the market by aggregating demand and supply.  large and fast-growing partnerships to procure used vehicles efficiently as well as the dominant share of the enterprise solutions market for banks, NBFCs, insurance companies and OEMs.</h1>
                <h1 className='my-5'>The company is a part of the diversified Mahindra Group. It has also attracted funding from Silicon Valley based hedge fund Valiant Capital, a global $ 7 Billion Auto-Tech player based in USA.</h1>
                <button className='btn btn-secondary'>Reade More</button>
            </div>
        </div>
    </div>
    );
};








export default About;



