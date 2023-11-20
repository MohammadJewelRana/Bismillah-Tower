import React from 'react';
import useUser from '../../hooks/useUser';
import LoadingPage from '../../Shared/LoadingPage';

const ViewProfile = () => {



    const [,userAllLoading,,findUser]=useUser();
    if(userAllLoading){
        return <LoadingPage></LoadingPage>
    }
    // console.log(findUser);
    const {blood,bio,gender,fb,phone,whatsapp,religion,profession,maritalStatus,name,photo,userRole,email }=findUser;


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">


                    <h2 className="card-title text-green-600">Basic Information</h2>
                    <div className='divider'></div>
                    <div>
                        <table border="1" className='w-full '>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Name</td>
                                <td className='pb-6 text-[13px] pl-2    md:text-xl'>{ name ? name :'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Gender</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {gender ? gender :'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Religion</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {religion ? religion :'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Blood Group</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {blood ? blood :'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>DOB</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'>  null</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[10px]  md:text-[16px] font-bold'>Marital Status</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {maritalStatus ? maritalStatus :'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Nationality</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'>Bangladeshi</td>
                            </tr>
                        </table>
                    </div>

                    {/* Contact */}
                    <h2 className="card-title mt-12 text-green-600">Contact Information</h2>
                    <div className='divider'></div>
                    <div>
                        <table border="1" className='w-full '>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Mobile</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {phone ? phone :'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Whatsapp</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {whatsapp ? whatsapp :'null'}</td>
                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Email</td>
                         

                                 
                                        <td className='pb-6 text-[13px] pl-2  md:text-[16px]  flex '>
                                             {email  ? email :'null'}
                                        </td>
                                   


                            </tr>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>FB Link</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {fb ? fb :'null'}</td>
                            </tr>

                        </table>
                    </div>
                    <h2 className="card-title mt-12 text-green-600">Profession  </h2>
                    <div className='divider'></div>
                    <div>
                        <table border="1" className='w-full '>
                            <tr className=''>
                                <td className='pb-6 text-[13px]  md:text-xl font-bold'>Profession</td>
                                <td className='pb-6 text-[13px] pl-2  md:text-xl'> {profession ? profession :'null'}</td>
                            </tr>
                        </table>
                    </div>



                </div>
            </div>



        </div>
    );
};

export default ViewProfile;