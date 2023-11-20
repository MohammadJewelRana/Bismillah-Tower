import React, { useState } from 'react';
import useMember from '../../hooks/useMember';
import useNotice from '../../hooks/useNotice';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../Shared/SectionTitle';
import { ToastContainer, toast } from 'react-toastify';
import { FaEdit, FaMailBulk, FaPhone, FaTrash, FaWhatsapp } from 'react-icons/fa';
import useUser from '../../hooks/useUser';
import Swal from 'sweetalert2';

import userImage from '../../assets/profilePic/user.png'
import { Helmet } from 'react-helmet-async';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AdminUser = () => {
    const [allMember, allMemberLoading, refetch] = useMember();
    // console.log(allMember);
    // const { _id, name, email, contact, whatsapp } = allMember;

    // const [findUser, userAll] = useUser();
    const [userAll, userAllLoading, userAllRefetch, findUser] = useUser();
    // console.log(userAll);





    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();


    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


    const onSubmit = data => {
        const formData = new FormData();//create formData
        formData.append('image', data.image[0]);//set image using form data.image 0 index

        fetch(img_hosting_url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);

                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    const info = { name: data.name, email: data.email, password: data.password, image: imgURL, userRole: 'member' }

                    fetch('https://bismillah-tower-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.insertedId) {
                                refetch();
                                userAllRefetch();
                                Swal.fire(
                                    'Good job!',
                                    'Member Added Successfully!',
                                    'success'
                                )
                                reset();
                            }
                        })
                }

            })

    }


    const [addMember, setAddMember] = useState(false);


    const handleDelete = (id) => {
        // console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,  Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://bismillah-tower-server.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            userAllRefetch()
                            Swal.fire(
                                'Deleted',
                                'User has been deleted',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        toast('Failed to delete this user.')
                    })


            }
        })




    }


    const handleUserRole = (id, role) => {
        // console.log(id, role);

        const newData = { userId: id, updateUserRole: role };

        fetch('https://bismillah-tower-server.vercel.app/users/role', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    userAllRefetch();
                    Swal.fire({
                        title: 'Success!',
                        text: `User Role updated successfully to ${role}`,
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
            .catch(error => {
                // console.log(error.message);
                toast('Failed to update status for this notice.')
            })






    }


    return (

        <>
                    <Helmet>
                <title>User | Bismillah-Tower </title>
            </Helmet>
            <div className='float-right mt-4'>
                <button onClick={() => setAddMember(!addMember)} className="btn btn-primary ">
                    {addMember ? 'Close the Form' : 'Add New Member'}
                </button>
            </div>


            <div className='mb-16 mt-20'>
                {
                    addMember === true &&


                    <>

                        <SectionTitle heading={'Add Member'} subHeading={'New  member contact information'}></SectionTitle>

                        <div className="card md:ml-16  bg-base-100 md:w-10/12 shadow-xl">
                            <div className="card-body">

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='mb-6'>
                                        <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Name of the member :</label>
                                        <input type='text'
                                            className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                                            {...register("name", { required: true })}
                                            placeholder='Enter Member Name'
                                        />
                                        {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Email of the member :</label>
                                        <input type='email'
                                            className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                                            {...register("email", { required: true })}
                                            placeholder=' xyz@gmail.com'
                                        />
                                        {errors.email && <span className='mt-4 text-red-600'>This field is required</span>}
                                    </div>


                                    <div className='mb-6'>
                                        <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Password of the member :</label>
                                        <input type='password'
                                            className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                                            {...register("password", { required: true })}
                                            placeholder=' Aaaaa$11111'
                                        />
                                        {errors.password && <span className='mt-4 text-red-600'>This field is required</span>}
                                    </div>




                                    <div class="form-control w-full my-4 ">
                                        <label class="label">
                                            <span class="label-text text-xl text-white">Member Image*</span>
                                        </label>
                                        <input type="file"
                                            {...register("image", { required: true })}
                                            class="file-input file-input-bordered w-full  " />
                                    </div>



                                    <button className=" mt-8 bg-base-200 text-white text-xl py-4 border border-2 rounded-xl btn-warning w-full ">Add Member</button>
                                </form>
                            </div>
                        </div>

                    </>

                }







                <SectionTitle heading={'All User'} subHeading={'All active members contact information'}></SectionTitle>

                <div className="flex flex-col mt-4 mx-8  hidden md:block">
                    <div className="overflow-x-auto">
                        <div className="mx-auto max-w-4xl">
                            <div className="w-full shadow-md rounded my-2">
                                <div className="table">
                                    <div className="table-row bg-blue-500 text-white text-center">
                                        <div className="table-cell  py-6 text-xl">Image</div>
                                        <div className="table-cell  py-6 text-xl">Name</div>
                                        <div className="table-cell  py-6 text-xl">Email</div>

                                        <div className="table-cell  py-6 text-xl">Role</div>

                                        <div className="table-cell  py-6 text-xl">ChangeRole</div>
                                        <div className="table-cell  py-6 text-xl pe-4">Action</div>
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
                                                                <img src={userImage} alt="Profile" className="rounded-full w-full h-full flex  "
                                                                />
                                                        }




                                                    </div>
                                                </div>
                                                <div className="table-cell py-6 text-xl  border-t">{memberInfo.name}</div>
                                                <div className="table-cell py-6 text-xl  border-t max-w-[400px]">{memberInfo.email}</div>

                                                <div className="table-cell py-6 text-xl  border-t"> {memberInfo.userRole}</div>

                                                <div className="table-cell py-6 text-xl  border-t">
                                                    {
                                                        memberInfo.userRole === 'admin' ?

                                                            <>
                                                                <button
                                                                    onClick={() => handleUserRole(memberInfo._id, 'member')}
                                                                    className='btn  btn-xs '>  Member</button>
                                                                <button
                                                                    onClick={() => handleUserRole(memberInfo._id, 'visitor')}
                                                                    className='btn  btn-xs '>  visitor</button>


                                                            </>

                                                            :
                                                            <>
                                                                <button onClick={() => handleUserRole(memberInfo._id, 'admin')} className='btn  btn-xs '>  Admin</button>
                                                                {
                                                                    memberInfo.userRole === 'member' ?
                                                                        <button onClick={() => handleUserRole(memberInfo._id, 'visitor')} className='btn  btn-xs '>  visitor</button>
                                                                        :
                                                                        <button
                                                                            onClick={() => handleUserRole(memberInfo._id, 'member')}
                                                                            className='btn  btn-xs '>  member</button>
                                                                }

                                                            </>

                                                    }
                                                </div>

                                                <div className="table-cell py-6 text-xl  border-t px-4">
                                                    <button className="btn btn-success btn-xs mr-4">Details</button>
                                                    <button onClick={() => handleDelete(memberInfo._id)} className="btn btn-error btn-xs">Delete</button>

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
                        userAll.map(memberData => <>
                            <div className="card w-9/12 mx-auto border  border-red-300   bg-base-100 shadow-xl mb-12 relative">
                                <figure>
                                    <div className="badge badge-secondary absolute mt-12 ml-48 ">{memberData.userRole}</div>
                                    {
                                        memberData.image ?
                                            <>
                                                <img src={memberData.image} className='h-[200px]  w-[200px] mt-4 rounded-full' alt="Shoes" />
                                            </>
                                            :
                                            <img src={userImage} className='h-[200px]  w-[200px] mt-4 rounded-full' alt="Shoes" />
                                    }
                                </figure>
                                <div className="card-body text-center">
                                    <h1 className='text-2xl uppercase'>{memberData.name}</h1>
                                    <div>
                                        <div className='max-w-[200px] mx-auto  flex mb-2'>
                                            <span><FaMailBulk className='mt-1 mr-4  '></FaMailBulk></span>
                                            <p className='text-[12px]'>  {memberData.email}</p>
                                        </div>

                                        <div className='w-[300px] mx-auto my-4   flex  xs:justify-center   '>
                                            {
                                                memberData.userRole === 'admin' ?
                                                    <>
                                                        <button onClick={() => handleUserRole(memberData._id, 'member')} className='btn  btn-xs btn-success '>  Make Member</button>
                                                        <button onClick={() => handleUserRole(memberData._id, 'visitor')} className='btn  btn-xs btn-warning'>  Make visitor</button>
                                                    </>
                                                    :
                                                    <>
                                                        <button onClick={() => handleUserRole(memberData._id, 'admin')} className='btn  btn-xs btn-success'>  Make Admin</button>
                                                        {
                                                            memberData.userRole === 'member' ?
                                                                <button onClick={() => handleUserRole(memberData._id, 'visitor')} className='btn  btn-xs btn-warning'> Make visitor</button>
                                                                :
                                                                <button onClick={() => handleUserRole(memberData._id, 'member')} className='btn  btn-xs btn-warning'> Make member</button>
                                                        }
                                                    </>
                                            }
                                        </div>
                                        <div className="divider text-white"></div>
                                        <div className='w-[200px] mx-auto justify-center flex gap-4 mt-4'>
                                            <button className="btn btn-xs btn-success">Details</button>
                                            <button className="btn btn-xs btn-error" onClick={() => handleDelete(memberData._id)}>Delete</button>
                                        </div>
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


export default AdminUser;