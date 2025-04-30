import React from 'react';
import Banner from '../components/Banner';
import GadgetsCategories from '../components/GadgetsCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-[450px] mx-44'>
            <GadgetsCategories></GadgetsCategories>
            </div>
        </div>
    );
};

export default Home;