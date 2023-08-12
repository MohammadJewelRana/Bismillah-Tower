import React, { useContext, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
import { FaEye } from 'react-icons/fa';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
 


const Login = () => {
 

    const { login,user } = useContext(AuthContext) ;
    // console.log(user);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const { register, reset, handleSubmit, formState: { errors } } = useForm();
   

    const onSubmit = data => {
        console.log(data);

        login(data.email, data.password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate(from, { replace: true });
                reset();
                toast("Successfully Login!!!");

            })
            .catch((error) => {
                // console.log(error);
                toast("  Login Failed!!!")
            })

    }
 


    return (
        <div className=''>

            {/* <Helmet>
                <title>Login | CosmetiCraft</title>
            </Helmet> */}

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left sm:mt-16">
                            <h1 className="text-2xl font-bold">Secure Access Portal!</h1>
                            <p className="py-6">"Log in to Your Account for Seamless Experience."</p>
                        </div>


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-800 border">
                            <div className="card-body">


                                <div className="form-control  ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", { required: true, maxLength: 100 })}
                                        placeholder="Enter your email" className="input w-full   bg-base-100 border  text-white" />
                                    {errors.email && <span className='text-red-600 mt-2'>Email field is required</span>}
                                </div>


                                <div className="form-control">


                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Password</span>
                                        </label>
                                        <div className='w-full rounded-md border-sky-300  '>

                                            <input type='text'  required
                                                {...register("password", {
                                                    required: true,
                                                    maxLength: 20,
                                                    minLength: 6,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/

                                                })}
                                                placeholder="password" className="input w-full   bg-base-100 border  text-white" />
                                           


                                        </div>
                                        <p>
                                            {errors.password?.type === 'required' && <p className='text-red-600 mt-2' > Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className='text-red-600 mt-2' > Password must be 6 character</p>}
                                            {errors.password?.type === 'maxLength' && <p className='text-red-600 mt-2' > Password should not be greater than 20 character   </p>}
                                            {errors.password?.type === 'pattern' && <p className='text-red-600 mt-2' > Password  must have one uppercase one lowercase one number and one special characters  </p>}
                                        </p>

                                    </div>


                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover mt-2">Forgot password?</a>
                                    </label>
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn btn-primary"><input type="submit" value='Login' /></button>

                                </div>
                                <br />
                                <hr />


                                <SocialLogin></SocialLogin>


                                <div className='mx-auto mt-2'>
                                    <p><small>Don't have an account?</small>
                                        <Link to='/registration' className='text-blue-200 ml-2'>Register Now</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default Login;