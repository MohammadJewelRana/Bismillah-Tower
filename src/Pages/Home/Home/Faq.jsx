import React from 'react';
 

// import faq from '../../../assets/images/faq-img.png'
import faq from '../../../assets/image/InShot_20230803_170208594.jpg'
import faq1 from '../../../assets/image/InShot_20231118_001636242.jpg'
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Shared/SectionTitle';

const Faq = () => {

    const faqs = [
        {
            id: 1,
            question: "How is the security in the building?",
            answer: "The building has 24/7 security personnel, surveillance cameras in common areas, secure access entry systems, and well-lit parking areas to ensure residents' safety."
        },
        {
            id: 2,
            question: "Is parking available for residents and visitors?",
            answer: "Yes, there is designated parking available for residents. Visitors can use the guest parking area on a first-come, first-served basis."
        },
        {
            id: 3,
            question: "What's the policy on subletting the apartment?",
            answer: "Subletting is generally not allowed without prior approval from the building management. If you're interested in subletting, please discuss it with the management team."
        },
      
 

    ]




    return (
        <section className='  px-12'>
            <div className="container">
                <SectionTitle heading={"FAQ's"} subHeading={'World class care for everyone Our health system offers unmatched expert health care'}></SectionTitle>


                <div className="flex justify-between gap-8   flex-col lg:flex-row ">
                 
                    {/* about image */}
                    <div className=" w-3/4 lg:w-1/2 xl:w-[770px] mx-auto  ">
                        <img className='md:h-[600px] h-[400px] rounded-lg   md:ml-16' src={faq1} alt="" />
                    </div>


                    <div className="w-full lg:w-1/2 xl:w-[670px]   ">
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