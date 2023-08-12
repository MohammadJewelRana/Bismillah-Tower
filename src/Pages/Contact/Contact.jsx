import React, { useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import photo from '../../assets/fund/money.jpg'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useMember from '../../hooks/useMember';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import useUser from '../../hooks/useUser';

import imageIcon from '../../assets/profilePic/user.png'


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;


const Contact = () => {


    const [allMember, allMemberLoading, refetch] = useMember();


    const [userAll, userAllLoading, userAllRefetch, findUser] = useUser();


    return (

        <>
     


            <div className='mb-16 mt-20'>
     
                <SectionTitle heading={'All Contact'} subHeading={'All active members contact information'}></SectionTitle>

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
                                    </div>

                                    {
                                        userAll.map(memberInfo => <>

                                            <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center ">
                                                <div className='table-cell py-6 text-xl  border-t'>
                                                    <div className="w-10 h-10 mx-auto   ">
                                                     
                                                     {
                                                        memberInfo.image ? 
                                                        <img src={memberInfo.image} alt="Profile" className="rounded-full w-full h-full flex  "
                                                        /> :

                                                        <img src={imageIcon} alt="Profile" className="rounded-full w-full h-full flex  "
                                                        />

                                                     }
                                                        

                                                    </div>
                                                </div>
                                                <div className="table-cell py-6 text-xl  border-t">{memberInfo.name ? memberInfo.name : 'none'}</div>
                                                <div className="table-cell py-6 text-xl  border-t">{memberInfo.email}</div>
                                                <div className="table-cell py-6 text-xl  border-t"> {memberInfo.contact ? memberInfo.contact : 'none'}</div>
                                                <div className="table-cell py-6 text-xl  border-t"> {memberInfo.whatsapp ? memberInfo.whatsapp : 'none'}</div>
                                            </div>

                                        </>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className='grid grid-cols-1   gap-8 md:hidden sm:block   mx-4 '>

                    {
                        userAll.map(memberData => <>
                            <div className="card w-full border  border-red-300   bg-base-100 shadow-xl mb-12">
                                <figure>
                        {
                            memberData.image ?              
                            <img src={memberData.image} className='h-[200px]  w-[200px] mt-4 rounded-full' alt="Shoes" /> :
                                         
                            <img src={ imageIcon } className='h-[200px]  w-[200px] mt-4 rounded-full' alt="Shoes" />
                        }
                                    
                                    </figure>
                                <div className="card-body text-center">
                                    <h1 className='text-2xl uppercase'>{memberData.name}</h1>
                                    <div>
                                        <div className='w-[200px] mx-auto  flex mb-2'>
                                            <span><FaMailBulk className='mt-1 mr-4  '></FaMailBulk></span>
                                            <p>  {memberData.email}</p>
                                        </div>
                                        <div className='w-[200px] mx-auto  flex mb-2'>
                                            <span><FaPhone className='mt-1 mr-4'></FaPhone></span>
                                            <p className='text-left'>  {memberData.contact ? memberData.contact  : 'not added yet'}</p>
                                        </div>
                                        <div className='w-[200px] mx-auto  flex'>
                                            <span><FaWhatsapp className='mt-1 mr-4'></FaWhatsapp></span>
                                            <p className='text-left'>  {memberData.whatsapp ? memberData.whatsapp : 'not added yet'}</p>
                                        </div>


                                        {/* <p>  {memberData.email}</p>
                        <p> <FaPhone> </FaPhone>{memberData.contact}</p>
                        <p> <FaWhatsapp></FaWhatsapp> {memberData.whatsapp}</p> */}
                                    </div>

                                </div>
                            </div>
                        </>)
                    }




                </div>



                <ToastContainer></ToastContainer>

            </div>

        </>



    );
};

export default Contact;