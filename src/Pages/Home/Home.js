import React from 'react';
import Deals from '../Deals/Deals';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Flight from './Flight/Flight';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Deals></Deals>
            <Flight></Flight>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;