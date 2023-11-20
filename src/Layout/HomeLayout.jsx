import React, { } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
// import { AuthContext } from '../Provider/AuthProvider';
// import { loadConfigFromFile } from 'vite';
// import LoadingPage from '../Shared/LoadingPage';



const HomeLayout = () => {

    // const {user,loading}=useContext(AuthContext);
    // if(loading){
    //     return <LoadingPage></LoadingPage>
    // }
    return (
        <div>

            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>


        </div>
    );
};

export default HomeLayout;