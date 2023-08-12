import React from 'react';
 

// import faq from '../../../assets/images/faq-img.png'
import faq from '../../../assets/image/InShot_20230803_170208594.jpg'
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Shared/SectionTitle';

const Faq = () => {

    const faqs = [
        {
            id: 1,
            question: "How can I schedule a medical appointment?",
            answer: "You can schedule a medical appointment by calling our clinic's reception desk or using our online appointment booking system on our website."
        },
        {
            id: 2,
            question: "What information do I need to provide when scheduling an appointment?",
            answer: "When scheduling an appointment, you'll need to provide your name, contact information, reason for the appointment, preferred date and time, and any relevant medical history or referral documents."
        },
        {
            id: 3,
            question: "Can I reschedule or cancel my appointment?",
            answer: "Yes, you can reschedule or cancel your appointment by contacting our clinic's reception ."
        },
      
 

    ]




    return (
        <section className='px-8'>
            <div className="container">
                <SectionTitle heading={"FAQ's"} subHeading={'World class care for everyone Our health system offers unmatched expert health care'}></SectionTitle>


                <div className="flex justify-between gap-8   flex-col lg:flex-row ">
                 
                    {/* about image */}
                    <div className=" w-3/4 lg:w-1/2 xl:w-[770px] mx-auto  ">
                        <img className='h-[600px] rounded-lg ' src={faq} alt="" />
                    </div>


                    <div className="w-full lg:w-1/2 xl:w-[670px] ">
                        <h2 className='text-xl text-red-600 font-bold'>Most questions by our beloved visitors </h2>
                        {
                            faqs.map(faqsData => <div className="collapse collapse-plus border mt-8 ">
                                <input type="radio" name="my-accordion-3" checked="checked" />
                                <div className="collapse-title text-2xl font-bold ">
                                    {faqsData.question}
                                </div>
                                <div className="collapse-content ">
                                    <p className='text-xl'>{faqsData.answer}</p>
                                </div>
                            </div>)
                        }
                    </div>



                </div>
            </div>





        </section>
    );
};

export default Faq;