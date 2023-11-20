import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';
// import { AuthContext } from '../../Provider/AuthProvider';



const SocialLogin = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        // googleSignIn()
        //     .then(res => {
        //         const user = res.user;
        //      navigate(from,{replace:true});
        //         // console.log(user);
        //         //  navigate(from,{replace:true});
        //         toast('Successfully Login With Google!!!')

        //     })
        //     .catch(error => {
        //         // console.log(error);
        //         toast('  Login failed With Google!!!')
        //     })

        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, userRole: 'visitor' };

                fetch('https://bismillah-tower-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast('Login with google successfully')
                        // navigate(from, { replace: true })
                        // navigate('/')

                    })
                navigate('/')
            })
    }



    return (
        <div className='mx-auto'>
            <p className='mx-auto' >Or SignUp using  </p>
            <div className="  mt-6 flex gap-4 mx-auto">

                <button className=" border rounded-full bg-blue-500 p-2 text-white"><FaFacebook className='text-4xl'></FaFacebook></button>

                <button onClick={handleGoogleSignIn} className=" border rounded-full bg-blue-500 p-2 text-white "><FaGoogle className='text-4xl'></FaGoogle></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;