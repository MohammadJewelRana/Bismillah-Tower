import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Expense = ({ refetch }) => {



    const [date, setDate] = useState();
    // console.log(date);
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {


        const info = { name: data.name, ballCount: parseInt(data.ballCount), ballCost: parseInt(data.ballCost), tapeCount: parseInt(data.tapeCount), tapeCost: parseInt(data.tapeCost), date, expenseAddedAdmin: user.displayName }
        console.log(info);


        fetch('http://localhost:5000/expense', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    refetch();
                    Swal.fire(
                        'Good job!',
                        'Expense Added Successfully!',
                        'success'
                    )
                    reset();
                }
            })






    }



    return (
        <div className=' mt-12 '>

            <h1 className='text-center'>Expense  </h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Name of buyer :</label>
                    <input type='text'
                        className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                        {...register("name", { required: true })}
                        placeholder='Enter Your Name'
                    />
                    {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>



                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Number of Ball :</label>
                    <input type='number'
                        className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                        {...register("ballCount",)}
                        placeholder='Ball number'
                    />
                    {errors.ballCount && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>

                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">  Ball Cost:</label>
                    <input type='number'
                        className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                        {...register("ballCost",)}
                        placeholder='Total Ball Cost '
                    />
                    {errors.ballCost && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>

                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Number of Tape :</label>
                    <input type='number'
                        className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                        {...register("tapeCount",)}
                        placeholder='Tape number'
                    />
                    {errors.tapeCount && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>

                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">  Tape Cost:</label>
                    <input type='number'
                        className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                        {...register("tapeCost",)}
                        placeholder='Tape Total Cost'
                    />
                    {errors.tapeCost && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>



                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Pick a date :</label>


                    <input
                        className='bg-base-100   border w-full p-6 rounded-lg text-white text-xl'
                        type="date"
                        {...register("date", { required: true }
                        )}



                        onChange={e => setDate(e.target.value)} />
                    {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>




                <button className="btn  bg-blue-700 text-white  w-full">Add Expense</button>
            </form>




            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Expense;