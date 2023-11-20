import React from 'react';
import useMember from '../../../hooks/useMember';
import useUser from '../../../hooks/useUser';
import SectionTitle from '../../../Shared/SectionTitle';
import profilePhoto from "../../../assets/profilePic/user.png";
import { Link } from 'react-router-dom';



const Member = () => {



    const [allMember, allMemberLoading, refetch] = useMember();

    const [userAll, userAllLoading, userAllRefetch, findUser] = useUser();

    const member = userAll.filter(
        (memberSingle) => memberSingle.userRole === "member"
    );



    return (
        <div className='px-12'>

            <div className='mt-16'>
                <SectionTitle
                    heading={"BT Club Members"}
                    subHeading={"Members Details"}
                ></SectionTitle>


                <div className='grid grid-cols-1 md:grid-cols-5 mt-16 gap-8'>



                    {
                        member.map(data =>

                            <div className='  '>
                                {/* <img src={img1} className='rounded-full h-24 mx-auto mb-4' alt="" /> */}

                                {data.image ? (
                                    <img
                                        src={data.image}
                                        className="h-[100px] mx-auto  w-[100px] mt-4 rounded-full"
                                        alt="Shoes"
                                    />
                                ) : (
                                    <img
                                        src={profilePhoto}
                                        className="h-[100px] mx-auto  w-[100px] mt-4 rounded-full"
                                        alt="Shoes"
                                    />
                                )}

                                <div className=' mt-4 text-center'>
                                    <h4 className='font-bold'> {data.name}</h4>
                                    <p className='text-[12px] mt-2 text-gray-300'> {data.email}</p>

                                    <p className='text-[12px] mt-2 text-gray-300'>  +880 1xxxxxxxxx</p>
                                    <p className='text-[12px] mt-2 text-gray-300'> {data.email}</p>

                                    {/* <div className="w-[100px] mx-auto  flex mb-2 text-[14px]"> */}
                                    <Link to={`/details/${data._id}`}>
                                        <button className="     px-6 mt-4   text-white   [12px] py-1 bg-green-600 border rounded-xl outline-none border-none    ">
                                            Details
                                        </button>
                                    </Link>
                                    {/* </div> */}

                                </div>
                            </div>

                        )
                    }






                </div>





            </div>
        </div>
    );
};

export default Member;