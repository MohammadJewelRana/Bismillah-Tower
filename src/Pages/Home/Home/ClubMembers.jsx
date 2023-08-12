import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import useMember from '../../../hooks/useMember';
import photo from '../../../assets/caresoul/4.jpg'
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import useUser from '../../../hooks/useUser';

const ClubMembers = () => {


    const [allMember, allMemberLoading, refetch] = useMember();

    const [userAll, userAllLoading, userAllRefetch, findUser] = useUser();

    const member = userAll.filter(memberSingle => memberSingle.userRole === 'member');




    return (
        <div className='mt-24'>

            <SectionTitle heading={'BT Club Members'} subHeading={'Members Details'}></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ml-2 mr-2'>

                {
                    member.map(memberData => <>
                        <div className="card w-full border border-red-300   bg-base-100 shadow-xl mb-12">
                            <figure><img src={memberData.image} className='h-[200px]  w-[200px] mt-4 rounded-full' alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h1 className='text-2xl uppercase'>{memberData.name}</h1>
                                <div>
                                    <div className='w-[200px] mx-auto  flex mb-2 text-[14px]'>
                                        <span><FaMailBulk className='mt-1 mr-4   '></FaMailBulk></span>
                                        <p className='text-left'>  {memberData.email}</p>
                                    </div>

                                    {/* <div className='w-[200px] mx-auto  flex mb-2 text-[14px]'>
                                        <span><FaPhone className='mt-1 mr-4'></FaPhone></span>
                                        <p className='text-left'>  {memberData.contact}</p>
                                    </div>
                                    <div className='w-[200px] mx-auto  flex'>
                                        <span><FaWhatsapp className='mt-1 mr-4'></FaWhatsapp></span>
                                        <p className='text-left text-[12px]'>  {memberData.whatsapp}</p>
                                    </div> */}

                                    <div className='w-[200px] mx-auto  flex mb-2 text-[14px]'>
                                        
                                      <button  className='btn btn-success w-full mt-4 text-black text-xl '>Details</button>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </>)
                }




            </div>

        </div>
    );
};

export default ClubMembers;