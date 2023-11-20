// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     return (
//         <div>
//             <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
//                 <div className="grid grid-flow-col gap-4">
               
//                     <Link to='/'>Home </Link>
//                     <Link to='/contact'>Contact </Link>
//                     <Link to='/fund'>Fund </Link> 
//                     <Link to='/gallery'>Gallery </Link> 
//                 </div>
//                 <div>
//                     <div className="grid grid-flow-col gap-4">
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//                     </div>
//                 </div>
//                 <div>
//                     <p>Copyright © 2023 - All right reserved by  <span className='text-red-600'>Jewel Rana</span></p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;


import React from "react";
// h-[calc(100vh-70px)]
 

import Logo from '../../src/assets/logo/logo.png'
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className=" px-12">
            <hr  className="my-4"/>
            {/* <div className='mt-[calc(90vh-200px)]'> */}
            <footer className="footer    bg-black text-base-content      ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* text  */}
                    <div className="">
                        {/* <img src={Logo} className="h-16  w-16 rounded-full   " alt="" /> */}
                        <p className="md:text-4xl text-2xl text-white italic mt-4  rounded-3xl"> <span className="text-red-600">Bismillah</span> Tower</p>

                        <p className="mt-4 text-justify text-white font-semibold mb-4">
                           
Welcome to Bismillah Towers, a contemporary haven in the heart of downtown.Residents enjoy the convenience of an on-site fitness center, rooftop lounge, and secure access, providing the perfect blend of comfort and luxury. Nestled within walking distance of bustling urban attractions, CityView Towers ensures a vibrant lifestyle, making it an ideal choice for those seeking a stylish and connected living experience in the heart of the city.
                        </p>

                        <hr className="mt-8 mb-8" />
                        <div className="text-justify text-white   leading-4">
                            <p className="mb-3">
                                House 5/2, west vashantek, Dhaka Cantonment, Dhaka-1206
                            </p>
                            <p className="mb-3">info@bt.com</p>
                            <p className="mb-3">+8801xxxxxxxxx</p>
                            <p> +8801xxxxxxxxx</p>
                        </div>
                    </div>

                    {/* map  */}
                    <div className="pr-10">

 

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58398.296934869184!2d90.35336203208172!3d23.8223837841751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7452d787051%3A0x826652c6f9b5e68d!2sBismillah%20Tower!5e0!3m2!1sen!2sbd!4v1700246653989!5m2!1sen!2sbd"      loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className="md:h-96 md:w-[500px] "
                    ></iframe>

                       
                    </div>
                </div>





            </footer>


            <div className=" bg-black p-4 md:p-0 mt-12">
                <hr />
                

                <footer className="footer items-center p-4  bg-black text-neutral-content">
                    <aside className="items-center grid-flow-col">

                        <p> <span className="text-red-600">Bismillah Tower</span> © 2023 - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                        <div className="flex gap-4   ">

                            <FaFacebook className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaFacebook>
                            <FaTwitter className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaTwitter>
                            <FaInstagram className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaInstagram>
                            <FaLinkedin className="border rounded-full text-4xl p-2   hover:bg-red-600 cursor-pointer "></FaLinkedin>
                        </div>
                    </nav>
                </footer>

            </div>

        </div>
    );
};

export default Footer;
