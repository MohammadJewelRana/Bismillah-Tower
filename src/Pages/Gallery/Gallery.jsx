import React, { useState } from 'react';
import image from '../../assets/image/InShot_20230803_170208594.jpg'
import image1 from '../../assets/image/InShot_20230227_000158400.jpg'
import image2 from '../../assets/image/InShot_20230524_204533682.jpg'
import image3 from '../../assets/image/InShot_20230803_170208594.jpg'
import image4 from '../../assets/image/InShot_20230803_170601161.jpg'
import image5 from '../../assets/image/InShot_20230803_170744426.jpg'
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle';

const Gallery = () => {


    // const gallery = [image, image1, image2, image3, image4, image5,];

    const gallery = [
        { _id: 1, image: image },
        { _id: 2, image: image1 },
        { _id: 3, image: image2 },
        { _id: 4, image: image3 },
        { _id: 5, image: image4 },
        { _id: 6, image: image5 },
    ]



    const [photo, setPhoto] = useState('');//state declare to show image in modal
   //show modal function
    const show = (id) => {
        console.log(id);
        const modalImage = gallery.find(data => data._id === id);
        console.log(modalImage);
        setPhoto(modalImage.image)
        window.my_modal_2.showModal();//call the modal
    }
    console.log(photo);


    return (
        <div className='mx-12'>

            <SectionTitle heading={'Gallery'} subHeading={'All Images in our community'}> </SectionTitle>
            <div className='my-12  flex  '>
                <div className='mx-auto  gap-8'>
                    <button className="btn btn-xs mr-6">All</button>
                    <button className="btn btn-xs  btn-neutral mr-6">Sports</button>
                    <button className="btn btn-xs btn-primary mr-6">Eid</button>
                    <button className="btn btn-accent btn-xs">General</button>
                </div>
            </div>

  <SectionTitle heading={'ALL Image'} subHeading={'Category Images '}></SectionTitle>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-44 gap-y-12 cursor-pointer  '>

                  

                {
                    gallery.map(singleImage => <>
                        <div className=" bg-base-100 shadow-xl  hover:opacity-70 ">
                            {/* <Link  onClick={() => window.my_modal_2.showModal()}>   <img src={singleImage.image} className='w-72 h-72 rounded-lg' alt="" /> </Link> */}

                            <Link onClick={() => show(singleImage._id)}>   <img src={singleImage.image} className='w-72 h-72 rounded-lg' alt="" /> </Link>
                        </div>

                    </>)
                }







                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                        <img src={photo} className='  rounded-lg' alt="" />
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>





            </div>

        </div>
    );
};

export default Gallery;