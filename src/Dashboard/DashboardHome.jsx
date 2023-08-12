import React, { useContext, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight, FaBuromobelexperte, FaCentos, FaChartBar, FaCircle, FaEquals, FaInbox, FaLongArrowAltRight, FaPlus, FaUser, FaWeebly,  } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';


const DashboardHome = () => {

    const [open, setOpen] = useState(true);

    const [menus, setMenus] = useState([]);

    // const {user,logout}=useContext(AuthContext);
    // console.log(user);

    const navigate=useNavigate();

   


    const handleLogout=()=>{

        // const swalWithBootstrapButtons = Swal.mixin({
        //     customClass: {
        //       confirmButton: 'btn btn-success',
        //       cancelButton: 'btn btn-danger'
        //     },
        //     buttonsStyling: false
        //   })
          
        //   swalWithBootstrapButtons.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'Yes,  log out!',
        //     cancelButtonText: 'No, cancel!',
        //     reverseButtons: true
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //         logout()
        //         .then(() => {
        //             // toast('Successfully logout');
        //             navigate('/login')
        //             swalWithBootstrapButtons.fire(
        //                 'Logged out!',
        //                 'You successfully logged out.',
        //                 'success'
        //               )
        //         })
        //         .catch(error => console.log(error))
        //     }
        //   })
    }


   

    return (
        < >
            <div className='flex text-white'>

                {/* left  */}
                <div className={` ${open ? " w-52" : " w-20"}     duration-300     h-screen bg-blue-950  relative p-5 pt-9 `}>

                {/* <div className={`   ${open ? " w-[100%]" : " w-20"}  ${open ? " md:w-48" : " w-20"}    duration-300     h-screen bg-blue-950  relative p-5 pt-9 `}>
 */}


                    <div className=''>
                        <FaArrowCircleLeft onClick={() => setOpen(!open)} className={`absolute border-2 border-black  text-3xl cursor-pointer -right-3 top-9 w-7   text-white   bg-black   rounded-full  ${!open && 'rotate-180'} `}></FaArrowCircleLeft>
                    </div>

                    <div className='flex gap-x-4 items-center'>
                        {/* logo  */}
                        <span>   <FaCircle className={`cursor-pointer duration-500 text-xl`}> </FaCircle></span>
                        <h1 className={`origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Designer</h1>
                    </div>

 

                    <div>
                        <ul className='mt-14  gap-4'>
                        <div className="divider"></div>
                            <li>
                                <Link to='/dashboard' className='flex gap-4 mt-4'>
                                   <span>   <FaBuromobelexperte className='cursor-pointer duration-500 text-xl mt-1'></FaBuromobelexperte></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/inbox' className='flex gap-4 mt-4'>
                                   <span>   <FaInbox className='cursor-pointer duration-500 text-xl mt-1'></FaInbox></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Inbox</p>
                                </Link>
                            </li>
                            <li>
                                <Link className='flex gap-4 mt-4'>
                                   <span>   <FaChartBar className='cursor-pointer duration-500 text-xl mt-1'></FaChartBar></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Analytics</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/users' className='flex gap-4 mt-4'>
                                   <span>   <FaUser className='cursor-pointer duration-500 text-xl mt-1'></FaUser></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Users</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/addCollege' className='flex gap-4 mt-4'>
                                   <span>   <FaPlus className='cursor-pointer duration-500 text-xl mt-1'></FaPlus></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Add College</p>
                                </Link>
                            </li>




                            <li>
                                <Link className='flex gap-4 mt-4'>
                                   <span>   <FaCentos className='cursor-pointer duration-500 text-xl mt-1'></FaCentos></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Settings</p>
                                </Link>
                            </li>
                            <li className=''  onClick={handleLogout}>
                                <Link className='flex gap-4 mt-4'>
                                   <span>   <FaLongArrowAltRight className='cursor-pointer duration-500 text-xl mt-1'></FaLongArrowAltRight></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Logout</p>
                                </Link>
                            </li>


                            <div className="divider "></div>
                            <div className="divider mt-12"></div>
                            <li className=''  >
                                <Link to='/' className='flex gap-4 mt-4'>
                                   <span>   <FaWeebly FaWeebly className='cursor-pointer duration-500 text-xl mt-1'></FaWeebly></span>
                                    <p className={`origin-left font-medium  duration-300 ${!open && 'scale-0'}`}>Go to Website</p>
                                </Link>
                            </li>
                            <div className="divider"></div>
                            

                        </ul>
                    </div>






                </div>




                {/* right  */}
                <div className='p-4 text-2xl bg-blue-900 font-semibold flex-1   text-black'>
 


        
                   <Outlet></Outlet>

                </div>

                <ToastContainer></ToastContainer>
            </div>
        </>
    );
};

export default DashboardHome; 