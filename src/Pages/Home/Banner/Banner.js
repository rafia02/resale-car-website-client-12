import React from 'react';

const Banner = () => {
    return (
        <div className="hero  h-96" style={{ backgroundImage: `url("https://global.toyota/pages/news/images/2021/07/19/1330/20210719_04_kv_w1920.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Buy Or Sell A Car From Your Happy Place.</h1>
                    <p className="mb-5"> Search largest collection of certified cars from the comfort of your home.</p>
                    <button className="btn btn-primary">View all cars</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;


// https://www.mahindrafirstchoice.com/assets/images/home_slider/2.jpg