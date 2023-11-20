import React, { useState } from 'react';
import DashboardComponentTitle from '../DashboardComponentTitle';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
// import Multiselect from 'multiselect-react-dropdown';



const AddCollege = () => {
    const [inputs, setInputs] = useState([{ eventDetails: '', eventName: '' }]);

    const [options, setOptions] = useState(['Football', 'Basketball', 'Swimming', 'Volleyball', 'Cricket', 'Tennis', ' Badminton']);
    const [sports, setSports] = useState([]);



    console.log(inputs);
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedInputs = [...inputs];
        updatedInputs[index][name] = value;
        setInputs(updatedInputs);
    };

    const handleAddField = () => {
        setInputs([...inputs, { designation: ' ', institute: ' ' }]);
    };

    const handleRemoveField = (index) => {
        const updatedInputs = [...inputs];
        updatedInputs.splice(index, 1);
        setInputs(updatedInputs);
    };



    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);







        // const { name, email, phone, price, specialization, message } = data;
        // const newData = { name, email, phone, price, specialization, message, experience: experience };
        // // console.log('newData :: ', newData);


        // fetch('https://bismillah-tower-server.vercel.app/doctors', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data);

        //         if (data.insertedId) {
        //             toast("Successfully added doctor!!!")
        //             reset();
        //         }

        //     })



    }






    return (
        <div>
            <DashboardComponentTitle title={'Add College'}></DashboardComponentTitle>


            <div className="card w-full mt-8  border-2">
                <div className="card-body text-center -p-12">


                    <form onSubmit={handleSubmit(onSubmit)} >





                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text text-black">Name of the college</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: true, maxLength: 100 })}
                                placeholder="Enter College Name"
                                className="input input-bordered bg-white border border-sky-300 text-black" />
                            {errors.name && <span className='text-red-600 mt-2'>Name field is required</span>}
                        </div>





                        <div className='mb-6'>
                            <label htmlFor="name" className="block mb-2 text-left mt-4 text-xl ml-2"> Admission Date   :</label>
                            <input
                                className='bg-base-200   border w-full p-6 rounded-lg text-white text-xl'
                                type="date"
                                {...register("date", { required: true })}
                                onChange={e => setDate(e.target.value)} />
                            {errors.name && <span className='mt-4 text-red-600'>This field is required</span>}
                        </div>





                        <div className='mb-6'>
                            <label htmlFor="name" className="block mb-2 mt-4 text-left text-xl ml-2"> Graduate Group Image :</label>
                            <input type="file"
                                {...register("image", { required: true })}
                                class="file-input file-input-bordered w-full  " />
                        </div>


                        <div className='mb-6'>
                            <label htmlFor="name" className="block mb-2 mt-4 text-left text-xl ml-2"> College Image :</label>
                            <input type="file"
                                {...register("image", { required: true })}
                                class="file-input file-input-bordered w-full  " />
                        </div>




                        <div className="form-control mt-4 ">
                            <label className="label"> <span className="label-text text-black">Sports</span> </label>
                            <Multiselect
                                className='border  border-sky-300  rounded-lg'
                                isObject={false}
                                options={options}
                                onRemove={(event) => { event }}
                                // onSelect={(event)=>{event}}
                                onSelect={(event) => {
                                    // console.log(event);
                                    setSports(event)
                                }}
                                required
                                showCheckbox
                            ></Multiselect>
                        </div>


                        <div className="form-control  mt-4">
                            <label className="label">
                                <span className="label-text text-black">Number  of the Research paper</span>
                            </label>
                            <input type="number"
                                {...register("research", { required: true, maxLength: 100 })}
                                placeholder="Enter College  research number"
                                className="input input-bordered bg-white border border-sky-300 text-black" />
                            {errors.research && <span className='text-red-600 mt-2'>Name field is required</span>}
                        </div>



                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black">Admission Process</span>
                            </label>
                            <textarea
                                {...register("process", { required: true })}
                                placeholder='Write About The Admission Process'
                                className="textarea border-sky-300 bg-white   border w-full p-6 rounded-lg text-black text-xl h-48"
                            ></textarea>
                            {errors.process && <span className='text-red-600 mt-2'>Message field is required</span>}
                        </div>



                        {/* about start */}
                        <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black"> About College</span>
                            </label>

                            <textarea
                                {...register("about", { required: true })}
                                placeholder='Write About The College'
                                className="textarea border-sky-300 bg-white   border w-full p-6 rounded-lg text-black text-xl h-48"
                            ></textarea>
                            {errors.about && <span className='text-red-600 mt-2'>Message field is required</span>}
                        </div>




                        {/* experience  */}
                        {/* <div className="form-control mt-4 ">
                            <label className="label">
                                <span className="label-text text-black"> Events</span>
                            </label>


                            {
                                inputs.map((input, index) =>
                                    < div className='flex gap-8'>
                                        <input
                                            {...register("eventName", { required: true, maxLength: 100 })}
                                            type="text"
                                            name="eventName"
                                            placeholder="eventName"
                                            value={input.email}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black w-1/2"
                                        />

                                        <input
                                            {...register("eventDetails", { required: true, maxLength: 100 })}
                                            type="text"
                                            name="eventDetails"
                                            placeholder="eventDetails"
                                            value={input.name}
                                            onChange={(event) => handleChange(index, event)}
                                            className="input input-bordered bg-white border border-sky-300 text-black w-1/2"
                                        />

                                        {index > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveField(index)}
                                                className=" bg-red-500 text-white rounded-md btn btn-xs "
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                )

                            }


                            <button
                                type="button"
                                onClick={handleAddField}
                                className="px-4 py-2 bg-green-500 text-white rounded-md w-[200px] ml-auto mt-4 mr-10"
                            >
                                Add Field
                            </button>


                        </div>
 */}







                        <button className="btn btn-warning  mt-8   text-black  w-full">Done</button>




                        {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}


































                        {/* time slot */}





                    </form>





                </div>
            </div >
            <ToastContainer></ToastContainer>

        </div >
    );
};

export default AddCollege;