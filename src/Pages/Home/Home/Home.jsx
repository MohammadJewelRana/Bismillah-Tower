import React from 'react';
import Careousal from './Careousal';
import ClubMembers from './ClubMembers';
import GalleryHome from './GalleryHome';
import Marquee from "react-fast-marquee";
import Faq from './Faq';
import Contact from './Contact';
import useNotice from '../../../hooks/useNotice';

const Home = () => {


    const [noticeAll, allNoticeLoading, noticeRefetch] = useNotice();
    

    const findNotice = noticeAll.filter(data => data.status === 'approved');
    // console.log(noticeAll,findNotice);
  


    return (
        <div>


            <Careousal></Careousal>
            <div className='mt-12 border m-2 py-4'>
                <Marquee>

                    {
                        findNotice.map(data => <>
                            <div>
                            <p className='text-red-600 ml-36'> <span className=' text-red-600'>Notice:</span> <span className='text-white'>
                               : 
                               {data.notice} 
                            </span></p> 
                            </div>
                        </>)
                    }
                    {/* <p className='text-red-600 '>Notice: <span className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam sint fugit
                    </span></p> */}
                </Marquee>
            </div>

            <ClubMembers></ClubMembers>
            <GalleryHome></GalleryHome>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;