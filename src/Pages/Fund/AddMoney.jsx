import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';



const AddMoney = ({addMoneyRefetch}) => {

    const [date, setDate] = useState();
    // console.log(date);
    const {user}=useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();

    const onSubmit = data => {
        // console.log(data);

        const info={  name:data.name, amount:parseInt(data.amount) ,date,addedMoneyAdmin:user.displayName}
        // console.log(info);


        fetch('http://localhost:5000/addMoney',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
                addMoneyRefetch();
                Swal.fire(
                    'Good job!',
                    'Money Added Successfully!',
                    'success'
                  )
                reset();
            }
        })

        
    }






    return (
        <div className=' mt-12 '>

            <h1 className='text-center'>Add Money</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Name :</label>
                    <input type='text'
                        className=' bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                        {...register("name", { required: true })}
                        placeholder='Enter Your Name'
                    />
                    {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>

                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Amount :</label>
                    <input type='number'
                        className='bg-base-100 border w-full p-6 rounded-lg text-white text-xl'
                        {...register("amount", { required: true })}
                        placeholder='Enter Your Amount'
                    />
                    {errors.amount && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>

               
                <div className='mb-6'>
                    <label htmlFor="name" className="block text-white mb-2 text-xl ml-2">Pick a date :</label>
       

                    <input
                  className='bg-base-100   border w-full p-6 rounded-lg text-white text-xl'
                  type="date" 
                     {...register("date", { required: true })}
 
                     

                     onChange={e => setDate(e.target.value)} />
                    {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                </div>

 


                <button className="btn  bg-blue-700 text-white  w-full">Add Money</button>
            </form>



<ToastContainer></ToastContainer>

        </div>
    );
};

export default AddMoney;