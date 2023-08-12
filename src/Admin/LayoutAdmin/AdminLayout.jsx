import React from 'react';
import AdminNavbar from '../AdminShared/AdminNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const AdminLayout = () => {
    return (
        <div>
            <AdminNavbar></AdminNavbar>

            <Outlet></Outlet>

            <Footer></Footer>




        </div>
    );
};

export default AdminLayout;