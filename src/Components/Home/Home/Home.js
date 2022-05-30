import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import About from './About/About';
import Client from './Client/Client';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Product></Product>
           <Client></Client>
           <About></About>
        </div>
    );
};

export default Home;