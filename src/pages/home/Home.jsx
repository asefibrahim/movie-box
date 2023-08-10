import React from 'react';
import './styles.scss'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
const Home = () => {
    return (
        <div className='homePage'>
            <HeroBanner
            ></HeroBanner>
            <Trending></Trending>
            <Popular />
        </div>
    );
};

export default Home;