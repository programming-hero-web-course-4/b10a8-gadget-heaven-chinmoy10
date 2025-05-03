import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-full mx-6 mt-5'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-295px)] md:mx-auto ">
                <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;