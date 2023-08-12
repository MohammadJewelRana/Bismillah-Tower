import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import image1 from '../../../assets/caresoul/1.jpg'
import image2 from '../../../assets/caresoul/2.jpg'
import image3 from '../../../assets/caresoul/3.jpg'
import image4 from '../../../assets/caresoul/4.jpg'

const GalleryHome = () => {
    return (
        <div className='my-16'>
            <SectionTitle heading={'Photo Gallery'} subHeading={'   Club Activities'}></SectionTitle>

            <Marquee>

                <div className='flex gap-8'>
                    <img src={image1} className='h-[250px] w-full mr-12' alt="" />
                </div>
                <div className='flex gap-8'>
                    <img src={image2} className='h-[250px] w-full mr-12' alt="" />
                </div>
                <div className='flex gap-8'>
                    <img src={image3} className='h-[250px] w-full mr-12' alt="" />
                </div>
                <div className='flex gap-8'>
                    <img src={image2} className='h-[250px] w-full mr-12' alt="" />
                </div>

            </Marquee>

        </div>
    );
};

export default GalleryHome;