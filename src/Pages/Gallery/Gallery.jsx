import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import useGallery from "../../hooks/useGallery";
import LoadingPage from "../../Shared/LoadingPage";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  // const gallery = [image, image1, image2, image3, image4, image5,];


  const [photo, setPhoto] = useState(""); //state declare to show image in modal
  //show modal function
  const show = (id) => {
    console.log(id);
    const modalImage = galleryImage.find((data) => data._id === id);
    console.log(modalImage);
    setPhoto(modalImage.image);
    window.my_modal_2.showModal(); //call the modal
  };

  const [galleryImage, galleryLoading, refetch] = useGallery();
  //   console.log(galleryImage);

  const memberImage = galleryImage.filter(
    (data) => data.category === "Members"
  );
  const sportsImage = galleryImage.filter((data) => data.category === "Sports");
  const eidImage = galleryImage.filter((data) => data.category === "Eid");
  const otherImage = galleryImage.filter((data) => data.category === "Others");
  const [showCategory, setShowCategory] = useState(galleryImage);


  return (
    <div className="mx-12">
      <Helmet>
        <title>Gallery | Bismillah-Tower </title>
      </Helmet>
      <SectionTitle
        heading={"Gallery"}
        subHeading={"All Images in our community"}
      >
        {" "}
      </SectionTitle>
      <div className="my-12  flex   ">
        <div className="mx-auto  gap-8">
          <button
            onClick={() => setShowCategory(galleryImage)}
            className="btn  btn-xs mr-6 btn-info"
          >
            All
          </button>
          <button
            onClick={() => setShowCategory(sportsImage)}
            className="btn btn-xs  btn-neutral mr-6 btn-warning"
          >
            Sports
          </button>
          <button
            onClick={() => setShowCategory(eidImage)}
            className="btn btn-xs btn-primary mr-6"
          >
            Eid
          </button>
          <button
            onClick={() => setShowCategory(memberImage)}
            className="btn btn-xs   mr-6 btn-error"
          >
            Members
          </button>
          <button
            onClick={() => setShowCategory(otherImage)}
            className="btn   btn-xs btn-success"
          >
            General
          </button>
        </div>
      </div>

      {showCategory.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-44 gap-y-12 cursor-pointer  ">
            {showCategory.map((singleImage) => (
              <>
                <div className=" bg-base-100 shadow-xl  hover:opacity-70 ">
                  <Link
                    title="Click to show!!"
                    onClick={() => show(singleImage._id)}
                  >
                    {" "}
                    <img
                      src={singleImage.image}
                      className="w-72 h-72 rounded-lg"
                      alt=""
                    />{" "}
                  </Link>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mb-12">
            <div className="card w-full bg-base-100 shadow-xl text-center">
              <div className="card-body">
                <h2 className=" text-center text-4xl text-red-600 mb-4">
                  Ooops!!
                </h2>
                <p> No image found!! </p>
                <p> Please add some images in this category.</p>
              </div>
            </div>
          </div>
        </>
      )}

      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <img src={photo} className="  rounded-lg" alt="" />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Gallery;
