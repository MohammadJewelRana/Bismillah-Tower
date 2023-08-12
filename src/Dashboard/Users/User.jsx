import React from 'react';

// import useAllUser from '../../Hooks/useAllUser';
import UserTable from './UserTable';
import DashboardComponentTitle from '../DashboardComponentTitle';
import { FaEdit, FaMailBulk, FaPhone, FaTrash, FaWhatsapp } from 'react-icons/fa';

import photo from '../../assets/caresoul/2.jpg'

const User = () => {



    // const [allUsers, allUsersLoading, refetch] = useAllUser();
    // console.log(allUsers);


    return (
        <>

            <DashboardComponentTitle title={'All Users'}></DashboardComponentTitle>

            <div className="card w-full mt-8  border-2">
                <div className="card-body text-center ">



                    <div className="flex flex-col mt-4 mx-8  hidden md:block">
                        <div className="overflow-x-auto">
                            <div className="mx-auto max-w-4xl">
                                <div className="w-full shadow-md rounded my-2">
                                    <div className="table">
                                        <div className="table-row bg-blue-500 text-white text-center">
                                            <div className="table-cell  py-6 text-xl">Image</div>
                                            <div className="table-cell  py-6 text-xl">Name</div>
                                            <div className="table-cell  py-6 text-xl">Email</div>
                                            <div className="table-cell  py-6 text-xl">Mobile</div>
                                            <div className="table-cell  py-6 text-xl">Whatsapp</div>
                                            <div className="table-cell  py-6 text-xl">Role</div>
                                            <div className="table-cell  py-6 text-xl">Action</div>
                                        </div>



                                        <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center text-white ">
                                            <div className='table-cell py-6 text-xl  border-t'>
                                                <div className="w-10 h-10 mx-auto   ">
                                                    <img src={photo} alt="Profile" className="rounded-full w-full h-full flex pt-2  "
                                                    />
                                                </div>
                                            </div>
                                            <div className="table-cell py-6 text-[14px]  border-t"> fdf</div>
                                            <div className="table-cell py-6 text-[14px]  border-t">ff</div>
                                            <div className="table-cell py-6 text-[14px]  border-t">ff</div>
                                            <div className="table-cell py-6 text-[14px]  border-t"> fdf</div>
                                            <div className="table-cell py-6 text-[14px]  border-t"> fdf</div>

                                            <div className="table-cell py-6 text-[14px]  border-t">
                                                <div className='flex gap-4 text-center'>


                                                    <FaEdit className='ml-8' title='Make Admin'></FaEdit>
                                                    <FaTrash title='Delete User'></FaTrash>
                                                </div>

                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className='grid grid-cols-1   gap-8 md:hidden sm:block text-white'>

                    <div className="   border  border-red-300  -p-[32px]  ">
                            <figure><img src={photo} className='h-[200px]  w-[200px] mt-4 relative rounded-full' alt="Shoes" /></figure>

                            <div className='px-2 border rounded-lg bg-red-600 h-8 absolute -mt-12 ml-32'>
                                <p className='text-[8px] '>Role: <span>Admin</span></p>
                            </div>

                            <div className="card-body text-left ">
                                <h1 className='text-2xl uppercase'>JEwel</h1>
                                <div>
                                    <div className='w-[200px] mx-auto  flex mb-2'>
                                        <span><FaMailBulk className='mt-1  mr-4 text-[16px]'></FaMailBulk></span>
                                        <p className='text-left text-[16px]'>  JEwel</p>
                                    </div>
                                    <div className='w-[200px] mx-auto  flex mb-2'>
                                        <span><FaPhone className='mt-1 mr-4 text-[16px]'></FaPhone></span>
                                        <p className='text-left text-[16px]'>  01743666237</p>
                                    </div>
                                    <div className='w-[200px] mx-auto  flex'>
                                        <span><FaWhatsapp className='mt-1 mr-4 text-[16px]'></FaWhatsapp></span>
                                        <p className='text-left text-[16px]'>  JEwel</p>
                                    </div>


                                    <div className='w-[200px] mx-auto    gap-4 mt-4'>
                                        <div className=''>
                                            <button className="btn btn-outline btn-success btn-xs ">Approve </button>
                                            <button className="btn btn-outline btn-success btn-xs">Make Admin </button>
                                        </div>
                                        <button className="btn btn-outline btn-success btn-xs ml-8">Delete</button>

                                    </div>


                                </div>
                            </div>
                        </div>


                    <div className="   border  border-red-300  -p-[32px]  ">
                            <figure><img src={photo} className='h-[200px]  w-[200px] mt-4 relative rounded-full' alt="Shoes" /></figure>

                            <div className='px-2 border rounded-lg bg-red-600 h-8 absolute -mt-12 ml-32'>
                                <p className='text-[8px] '>Role: <span>Admin</span></p>
                            </div>

                            <div className="card-body text-left ">
                                <h1 className='text-2xl uppercase'>JEwel</h1>
                                <div>
                                    <div className='w-[200px] mx-auto  flex mb-2'>
                                        <span><FaMailBulk className='mt-1  mr-4 text-[16px]'></FaMailBulk></span>
                                        <p className='text-left text-[16px]'>  JEwel</p>
                                    </div>
                                    <div className='w-[200px] mx-auto  flex mb-2'>
                                        <span><FaPhone className='mt-1 mr-4 text-[16px]'></FaPhone></span>
                                        <p className='text-left text-[16px]'>  01743666237</p>
                                    </div>
                                    <div className='w-[200px] mx-auto  flex'>
                                        <span><FaWhatsapp className='mt-1 mr-4 text-[16px]'></FaWhatsapp></span>
                                        <p className='text-left text-[16px]'>  JEwel</p>
                                    </div>


                                    <div className='w-[200px] mx-auto    gap-4 mt-4'>
                                        <div className=''>
                                            <button className="btn btn-outline btn-success btn-xs ">Approve </button>
                                            <button className="btn btn-outline btn-success btn-xs">Make Admin </button>
                                        </div>
                                        <button className="btn btn-outline btn-success btn-xs ml-8">Delete</button>

                                    </div>


                                </div>
                            </div>
                        </div>






                    </div>







                </div>
            </div>


        </>
    );
};

export default User;