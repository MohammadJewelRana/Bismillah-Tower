import React, { useRef, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
// import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rpce64n', 
      'template_t1k90cj',
       form.current, 'ux5lTHXEuz49dDg-J')
      
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
    };
  
     
  
      return (
          <div id='contact' name='contact' className=' text-gray-300 w-full  '>
              <div className='  max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full mb-24'>
               
              <SectionTitle heading={"Have any query?"} subHeading={"Curious Minds Welcome: Uncover Answers to Your Questions"}></SectionTitle>

                  <div>
                     
                      <p className='pb-6'>Submit the form below or shoot me an email - <span className='text-pink-600 underline cursor-pointer'>js.rana0326@gmail.com</span></p>
                  </div>
  


                  <form ref={form} onSubmit={sendEmail} className="w-full mx-auto">
                      <div className="mb-4">
                          <label htmlFor="name" className="block text-white-700 font-bold mb-2">
                              Name
                          </label>
                          <input
                              type="text"
                              id="name"
                              name="from_name"
                          
                              className="  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline "
                              placeholder="Your Name"
                              required
                          />
                      </div>
                      <div className="mb-4">
                      <label htmlFor="email" className="block text-white-700 font-bold mb-2">
                              Email
                          </label>
                          <input
                              type="email"
                              id="email"
                              name="from_email"
                              
                              className=" border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                              placeholder="example@gmail.com"
                              required
                          />
                      </div>
                      <div className="mb-4">
                          <label htmlFor="message" className="block text-white-700 font-bold mb-2">
                              Message
                          </label>
                          <textarea
                              id="message"
                              name="message"
                            
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                              placeholder="Your Message"
                              required
                          />
                      </div>
                      <div className="flex justify-center">
                          <button
                              type="submit" value="Send"
                              className=" btn  border border-white bg-base-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                              Let's Collaborate
                          </button>
                      </div>
                  </form>
  
  
  
  
  
  
              </div>
  
  
          </div>
  
    );
};

export default Contact;