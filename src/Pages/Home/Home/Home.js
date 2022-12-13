import React from 'react';
import About from '../About/About';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import ProductCatagories from '../ProductCatagories/ProductCatagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCatagories></ProductCatagories>
            <Advertise></Advertise>
            <About></About>
        </div>
    );
};

export default Home;