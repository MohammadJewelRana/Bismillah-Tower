import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import LoadingPage from '../../../Shared/LoadingPage';
import profilePic from '../../../assets/profilePic/user.png'
import { Link } from 'react-router-dom';

const MemberDetails = () => {

    const { id } = useParams();
    const [userAll, userAllLoading] = useUser();
    if (userAllLoading) {
        return <LoadingPage></LoadingPage>
    }

    const specificUser = userAll.filter(data => data._id === id);
    console.log(specificUser);
    const { blood, bio, gender, fb, phone, whatsapp, religion, profession, maritalStatus, name, photo, userRole, email } = specificUser[0];

    //   console.log(blood);

    return (
        <div>
            <div className=''>
                <div className="card w-full bg-base-600 shadow-xl">
                    <div className="card-body">
                        <h1 className='mb-8 mt-4'> <Link to='/' className='text-red-600 underline underline-offset-1 '>Home</Link> / Member Details / {name}</h1>
                       {
                        photo ? 
                        <img src={photo} alt="" className="rounded-full h-48 w-48 mx-auto" /> :
                        <img src={profilePic} alt="" className="rounded-full h-48 w-48 mx-auto" />
                       }
                    
                       
                    </div>
                </div>

            </div>



            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">




                    <h2 className="card-title text-green-600">Basic Information</h2>
                    <div className='divider'></div>
                    <div>
                        <table border="1" className='w-full '>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Name</td>
                                <td className='pb-6 text-[13px] pl-2    md:text-xl'>{name ? name : 'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Gender</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {gender ? gender : 'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Religion</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {religion ? religion : 'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Blood Group</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {blood ? blood : 'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>DOB</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'>  null</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[10px]  md:text-[16px] font-bold'>Marital Status</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {maritalStatus ? maritalStatus : 'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Nationality</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'>Bangladeshi</td>
                            </tr>
                        </table>
                    </div>

                    {/* Contact */}

                    <h2 className="card-title text-green-600 mt-12">Contact Information</h2>
                    <div className='divider'></div>
                    <div>
                        <table border="1" className='w-full '>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Mobile</td>
                                <td className='pb-6 text-[13px] pl-2    md:text-xl'>{phone ? phone : 'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold '>WhatsApp</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl '> {whatsapp ? whatsapp : 'null'}</td>
                            </tr>

                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'> FB Link  </td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {fb ? fb : 'null'}</td>
                            </tr>


                        </table>
                    </div>



                    <h2 className="card-title mt-12 text-green-600">Profession  </h2>
                    <div className='divider'></div>
                    <div>
                        <table border="1" className='w-full '>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Profession</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {profession ? profession : 'null'}</td>
                            </tr>
                        </table>
                    </div>



                </div>
            </div>


        </div>
    );
};

export default MemberDetails;