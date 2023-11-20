import React, { useContext } from 'react';
import Careousal from './Careousal';
import ClubMembers from './ClubMembers';
import GalleryHome from './GalleryHome';
import Marquee from "react-fast-marquee";
import Faq from './Faq';
import Contact from './Contact';
import useNotice from '../../../hooks/useNotice';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Provider/AuthProvider';
import LoadingPage from '../../../Shared/LoadingPage';
import Member from './Member';

const Home = () => {


    const [noticeAll, allNoticeLoading, noticeRefetch] = useNotice();


    const findNotice = noticeAll.filter(data => data.status === 'approved');
    // console.log(noticeAll,findNotice);

    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <LoadingPage></LoadingPage>
    }

    return (
        <div>

            <Helmet>
                <title>Home | Bismillah-Tower </title>
            </Helmet>

            <Careousal></Careousal>
            <div className='mt-12 border m-2 py-4 border-x-0'>
                <Marquee>

                    {
                        findNotice.map(data => <>
                            <div>
                                <p className='text-red-600 font-bold  space-x-3 ml-36'> <span className=' text-red-600'>Notice </span> <span className='text-white space-x-4'>
                                   
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
            <Member></Member>

            {/* <ClubMembers></ClubMembers> */}
            <GalleryHome></GalleryHome>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;