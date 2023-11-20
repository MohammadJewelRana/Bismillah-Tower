import React from 'react';
import { useRef } from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { useForm } from 'react-hook-form';
import useMember from '../../hooks/useMember';
import { useState } from 'react';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
// import useNotice from '../../hooks/useNotice';
import { useEffect } from 'react';
import useNotice from '../../hooks/useNotice';
import { Helmet } from 'react-helmet-async';

const Notice = () => {


    const [allMember, allMemberLoading, refetch] = useMember();
    const [noticeAll, allNoticeLoading, noticeRefetch] = useNotice();
    const [addNotice, setAddNotice] = useState(false);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    // console.log(formattedDate);


    const onSubmit = data => {
        // console.log(data);
        const notice = { subject: data.subject, notice: data.message, status: 'pending', noticeCreatedDate: formattedDate };

        fetch('https://bismillah-tower-server.vercel.app/notice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(notice)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    // refetch();
                    noticeRefetch();
                    Swal.fire(
                        'Good job!',
                        'Notice Created Successfully!',
                        'success'
                    )
                    reset();
                }
            })
            .catch(error => {
                // console.log(error.message);
                toast(`Failed to add a new notice because of ${error.message}`);
            })
    }



    const handleDelete = (id) => {
        // console.log(id);
        fetch(`https://bismillah-tower-server.vercel.app/notice/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    noticeRefetch();
                    Swal.fire(
                        'Deleted',
                        'Your notice has been deleted',
                        'success'
                    )
                }
            })
            .catch(error => {
                toast('Failed to delete this notice.')
            })
    }



    const handleStatus = (id, status) => {
        // console.log(id, status);
        const updateNotice = { id: id, status: status };

        //send data
        fetch('https://bismillah-tower-server.vercel.app/notice', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateNotice)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    noticeRefetch();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Status updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(error => {
                // console.log(error.message);
                toast(`Failed to update status for this notice. And the error is ${error.message}`)
            })


    }


    return (

        <>
                    <Helmet>
                <title>Notice | Bismillah-Tower </title>
            </Helmet>
            <div className='float-right mt-4'>
                <button onClick={() => setAddNotice(!addNotice)} className="btn btn-primary ">
                    {addNotice ? 'Close the Form' : 'Add New Notice'}
                </button>
            </div>


            <div className='mb-16 mt-20'>
                {
                    addNotice === true &&


                    <>

                        <SectionTitle heading={'Add New Notice'} subHeading={'New notice for every members of our community'}></SectionTitle>

                        <div className="card md:ml-16  bg-base-100 md:w-10/12 shadow-xl">
                            <div className="card-body">

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='mb-6'>
                                        <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Subject :</label>
                                        <input type='text'
                                            className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                                            {...register("subject", { required: true })}
                                            placeholder='Enter Notice Subject'
                                        />
                                        {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="name" className="block mb-2 text-xl ml-2">Notice :</label>
                                        <textarea
                                            {...register("message", { required: true })}
                                            placeholder='Enter Your Message'
                                            className="textarea  bg-base-100  border border-white w-full p-6 rounded-lg text-white text-xl h-48"
                                        ></textarea>
                                        {errors.message && <span className='mt-4 text-red-600'>This field is required</span>}
                                    </div>






                                    <button className=" mt-8 bg-base-200 text-white text-xl py-4 border border-2 rounded-xl btn-warning w-full ">Create Notice</button>
                                </form>
                            </div>
                        </div>

                    </>

                }







                <SectionTitle heading={'All Notice'} subHeading={'All active members contact information'}></SectionTitle>

                <div className="flex flex-col mt-4 mx-8  hidden md:block">
                    <div className="overflow-x-auto">
                        <div className="mx-auto max-w-4xl">
                            <div className="w-full shadow-md rounded my-2">
                                <div className="table">

                                    <div className="table-row bg-blue-500 text-white text-center">
                                        <div className="table-cell  py-6 text-xl">SI</div>
                                        <div className="table-cell  py-6 text-xl">Date</div>
                                        <div className="table-cell  py-6 text-xl">Subject</div>
                                        <div className="table-cell  py-6 text-xl">Message</div>
                                        <div className="table-cell  py-6 text-xl">Status</div>

                                        <div className="table-cell  py-6 text-xl">Action</div>
                                    </div>

                                    {
                                        noticeAll.map((noticeInfo, index) => <>
                                            <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center ">
                                                <div className='table-cell py-6 text-xl px-4 border-t'>
                                                    {index + 1}
                                                </div>
                                                <div className='table-cell py-6 text-xl  border-t'>
                                                    {noticeInfo?.noticeCreatedDate ? noticeInfo.noticeCreatedDate : 'none'}
                                                </div>
                                                <div className="table-cell py-6 text-xl  border-t">{noticeInfo.subject}</div>
                                                <div className="table-cell py-6 text-xl  border-t max-w-[150px]">{noticeInfo.notice}</div>

                                                <div className="table-cell py-6 text-xl  border-t"> {noticeInfo.status}</div>
                                                <div className="table-cell py-6 text-xl  border-t ">

                                                    {
                                                        noticeInfo.status === 'pending' ?
                                                            <button onClick={() => handleStatus(noticeInfo._id, 'approved')} className="btn btn-xs bg-green-600 hover:text-white text-black mr-2">Approved</button>

                                                            :

                                                            <button onClick={() => handleStatus(noticeInfo._id, 'pending')} className="btn btn-xs bg-green-600 hover:text-white text-black mr-2">Pending</button>

                                                    }


                                                    <button onClick={() => handleDelete(noticeInfo._id)} className="btn  bg-red-600 btn-xs">Delete</button>

                                                </div>
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
                        noticeAll.map(data => <>
                            <div className="card w-full border  border-red-300   bg-base-100 shadow-xl mb-12">

                                <div className="card-body text-center">

                                    <table className='text-left'>

                                        <tr className='  border-b-2 '>
                                            <th className='py-4 me-9 '>Subject</th>
                                            <th className='py-4  pl-[16px]'>{data.subject}</th>
                                        </tr>

                                        <tr className='  border-b-2 '>
                                            <th className='py-4'>Notice</th>
                                            <th className='py-4 pl-[16px]' >{data.notice}  </th>
                                        </tr>
                                        <tr className='  border-b-2 '>
                                            <th className='py-4'>Date</th>
                                            <th className='py-4 pl-[16px]' >{data.noticeCreatedDate ? data.noticeCreatedDate : 'none'}  </th>
                                        </tr>

                                        <tr className='  border-b-2 '>
                                            <th className='py-4'>Status</th>
                                            <th className='py-4 pl-[16px]' >{data.status}  </th>
                                        </tr>

                                        <tr className='  border-b-2 '>
                                            <th className='py-4'>Action</th>
                                            <th className='py-4 pl-[16px]' >

                                                {
                                                    data.status === 'pending' ?
                                                        <button onClick={() => handleStatus(data._id, 'approved')} className="btn btn-xs bg-green-600 hover:text-white text-black mr-2">Approved</button>

                                                        :

                                                        <button onClick={() => handleStatus(data._id, 'pending')} className="btn btn-xs bg-green-600 hover:text-white text-black mr-2">Pending</button>

                                                }


                                                <button onClick={() => handleDelete(data._id)} className="btn  bg-red-600 btn-xs">Delete</button>

                                            </th>
                                        </tr>



                                    </table>






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
export default Notice;