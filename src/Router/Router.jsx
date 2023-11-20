import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home/Home/Home';
import Fund from '../Pages/Fund/Fund';
import Gallery from '../Pages/Gallery/Gallery';
import Contact from '../Pages/Contact/Contact';
// import User from '../Dashboard/Users/User';
// import Inbox from '../Dashboard/Inbox/Inbox';
// import AddCollege from '../Dashboard/AddDoctor/AddColleger';
// import Dashboard from '../Dashboard/Dasboard/Dashboard';
// import DashboardHome from '../Dashboard/DashboardHome';
import Login from '../Pages/LoginReg/Login';
import Registration from '../Pages/LoginReg/Registration';
import AdminLayout from '../Admin/LayoutAdmin/AdminLayout';
import Notice from '../Admin/Notice/Notice';
import AdminHome from '../Admin/AdminHome/AdminHome';
import AdminUser from '../Admin/User/AdminUser';
import AddImage from '../Admin/AddImage/AddImage';
// import Money from '../Admin/Money/Money';
import CollectFund from '../Admin/CollectFund/CollectFund';
import Profile from '../Pages/Profile/Profile';
import ViewProfile from '../Pages/Profile/ViewProfile';
import UpdateProfile from '../Pages/Profile/UpdateProfile';
import MemberDetails from '../Pages/Home/Home/MemberDetails';
import PrivateRoute from './PrivateRoute';
import Rules from '../Pages/Rules/Rules';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/fund',
                element: <Fund></Fund> 
                // element:  <PrivateRoute><Fund></Fund></PrivateRoute>
            },
            {
                path: '/rules',
                element:  <Rules></Rules>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/details/:id',
                element: <MemberDetails></MemberDetails>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <Profile></Profile>,
                children:[
                    {
                        path: '/profile',
                        element:<ViewProfile></ViewProfile>
                    },
                    {
                        path: '/profile/updateProfile',
                        element:<UpdateProfile></UpdateProfile>
                    }
                ]
            },


            // login registration
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]

    },



    
    {
        path: '/dashboard',
        element: <PrivateRoute> <AdminLayout></AdminLayout></PrivateRoute>,
        children: [

            {
                path:'/dashboard',
                element:  <AdminHome></AdminHome>
                 
            },
            {
                path: '/dashboard/notice',
                element: <Notice></Notice>
            },
            {
                path: '/dashboard/user',
                element: <AdminUser></AdminUser>
            },
            {
                path: '/dashboard/image',
                element: <AddImage></AddImage>
            },
      
            {
                path: '/dashboard/collect',
                element: <CollectFund></CollectFund>
            },
            {
                path: '/dashboard/fund',
                element:  <Fund></Fund>
            }

        ]
    }
 


])



export default Router;