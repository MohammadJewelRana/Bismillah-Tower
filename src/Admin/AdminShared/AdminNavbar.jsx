import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import useUser from '../../hooks/useUser';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ErrorPage from '../../Shared/ErrorPage';

const AdminNavbar = () => {


    const navigate = useNavigate();
    const { user, logout,loading } = useContext(AuthContext);
   

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out!'
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Logged out!',
                    'You are successfully logged out',
                    'success'
                )
                logout()
                    .then(res => res.json())
                    .then(data => {
                        // navigate('/login')
                    })
                navigate('/login')
            }
        })

    }

   

    // const [userAll,setUserAll]=useState([]);
    // useEffect( ()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         setUserAll(data);
    //     })
    // },[])

    // const findUser=userAll.find(fd=>fd.email=== user?.email);
  
    const  [userAll,userAllLoading,userAllRefetch,findUser] = useUser();
  
    if(userAllLoading){
        return  <ErrorPage></ErrorPage>
    }
    //  console.log(findUser);


 



    const navLinks = < >
        <li>    <NavLink to="/dashboard/home" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > Dashboard </NavLink></li>

        <li>    <NavLink to="/dashboard/fund" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > Fund </NavLink></li>

        <li>   <NavLink to="/dashboard/notice" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} >  Notice </NavLink>
        </li>
        <li><NavLink to="/dashboard/image" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > Add Image </NavLink>
        </li>
        <li><NavLink to="/dashboard/user" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "    border-b-2   border-b-white " : ""} > User </NavLink>
        </li>
 


    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52   ">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bismillah <span className='text-red-600 -ml-2'>Tower</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLinks}
                    </ul>
                </div>




                <div className="navbar-end mr-12" title='name'>
                    <div className="dropdown dropdown-end"  >

                        {
                            user ?

                                <div title={findUser?.name}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar" >
                                        <div className="w-10 rounded-full"  >
                                            <img src={user?.photo}  />
                                        </div>
                                    </label>


                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            {findUser?.userRole === 'admin' ?
                                                <Link to='/'>Main Website</Link> :
                                                <Link to='/profile'>Profile</Link>
                                            }

                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><Link onClick={handleLogout}>Logout</Link></li>
                                    </ul>


                                </div>
                                :
                                <Link to='/login'> <button className="btn btn-neutral">Login</button></Link>
                        }




                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdminNavbar;