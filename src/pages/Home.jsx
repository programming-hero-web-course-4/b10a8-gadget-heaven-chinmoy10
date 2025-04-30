import React from 'react';
import Banner from '../components/Banner';
import GadgetsCategories from '../components/GadgetsCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-[450px] px-20'>
            <GadgetsCategories></GadgetsCategories>
            </div>
        </div>
    );
};

export default Home;