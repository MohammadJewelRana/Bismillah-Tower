import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAllUser from '../Hooks/useAllUser';

const Header = () => {



    const { user, logout,loading } = useContext(AuthContext);

    if(loading){
        return <p>Loading</p>
    }

    const [allUsers, allUsersLoading, refetch] = useAllUser();
    // console.log('all user', allUsers);

    const loggedUser = allUsers?.find(data => data.email === user?.email);
    // console.log('find user:: ',loggedUser);


    const handleLogout = () => {
        logout()
            .then(() => {
                toast('Successfully logout');
            })
            .catch(error => console.log(error))
    }




    const navLinks = < >
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600    border-b-2   border-b-blue-700 " : ""} > Home </NavLink>

        <NavLink to="/find" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600  border-b-2 border-b-blue-700   " : ""} > Find a doctor </NavLink>

        <NavLink to="/find" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600  border-b-2 border-b-blue-700   " : ""} > My Bookings </NavLink>

        <HashLink smooth to='/#service' > Services </HashLink>

        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-600  border-b-2 border-b-blue-700   " : ""} > Contact </NavLink>

    </>



    return (
        <div className="navbar   header">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box bg-green-200 gap-8 w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">MediCare</a>
            </div>


            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1  gap-8 text-xl">
                    {navLinks}
                </ul>
            </div>




            <div className="navbar-end">

                {
                    user &&
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8">
                                <div className="w-10 rounded-full">
                                    <img title={user ? user?.displayName : 'No logged in user'} src={user?.photoURL} />
                                </div>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52">




                                <li>
                                    {
                                        loggedUser?.role === 'admin' ?
                                            <Link to='/dashboard' className="justify-between"> Dashboard </Link>
                                            :
                                            <Link to='/profile' className="justify-between"> Profile </Link>
                                    }
                                </li>

                                <li><a>Settings</a></li>

                                {
                                    user &&
                                    <li>     <Link to='/login'>  <button onClick={handleLogout} className=" hover:text-red-600  mr-8">Logout</button></Link> </li>

                                }



                                {/* <li><a>Logout</a></li> */}
                            </ul>
                        </div>

                    </>
                }
                {
                    user ?
                        <></>

                        :

                        <Link to='/login' >  <button className="btn btn-info mr-8">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;