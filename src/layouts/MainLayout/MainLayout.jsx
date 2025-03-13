import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../../Pages/Loading';

const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div >
            <Navbar></Navbar>

            {
                navigation.state === 'loading' ?
                    <Loading></Loading>
                    :
                    <main className='w-11/12 mx-auto'>
                        <Outlet></Outlet>
                    </main>
            }
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;