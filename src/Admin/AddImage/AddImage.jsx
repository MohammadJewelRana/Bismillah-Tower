import React, { useState } from "react";
import useMember from "../../hooks/useMember";
import useNotice from "../../hooks/useNotice";
import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import { ToastContainer, toast } from "react-toastify";
import {
  FaEdit,
  FaMailBulk,
  FaPhone,
  FaTrash,
  FaWhatsapp,
} from "react-icons/fa";
import useUser from "../../hooks/useUser";
import Swal from "sweetalert2";

import userImage from "../../assets/profilePic/user.png";
import useGallery from "../../hooks/useGallery";
import { Link } from "react-router-dom";
import LoadingPage from "../../Shared/LoadingPage";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddImage = () => {
  const [photo, setPhoto] = useState(""); //state declare to show image in modal
  //show modal function
  const show = (id) => {
    // console.log(id);
    const modalImage = galleryImage.find((data) => data._id === id);
    // console.log(modalImage);
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData(); //create formData
    formData.append("image", data.image[0]); //set image using form data.image 0 index

    fetch(img_hosting_url, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse);

        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          const info = { category: data.categories, image: imgURL };

          fetch("https://bismillah-tower-server.vercel.app/gallery", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(info),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              refetch();
              if (data.insertedId) {
                refetch();
                // userAllRefetch();
                refetch();
                Swal.fire("Good job!", "Image Added Successfully!", "success");
                reset();
                refetch();
              }
            })
            .catch((error) => {
              toast("failed to add image.");
            });
        }
      });
    refetch();
  };

  const [addImage, setAddImage] = useState(false);

  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,  Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bismillah-tower-server.vercel.app/gallery/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            refetch();
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted", "Image has been deleted", "success");
              refetch();
            }
          })
          .catch((error) => {
            toast("Failed to delete this image.");
          });
      }
    });

    refetch();
  };


  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  };



  return (
    <>
      <Helmet>
        <title>Add a image | Bismillah-Tower </title>
      </Helmet>
      <div className="float-right mt-4">
        <button
          onClick={() => setAddImage(!addImage)}
          className="btn btn-primary mr-10 mt-2"
        >
          {addImage ? "Close the Form" : "Add New Image"}
        </button>
      </div>

      <div className="mb-16 mt-20">
        {addImage === true && (
          <>
            <SectionTitle
              heading={"Add Image"}
              subHeading={"New  member contact information"}
            ></SectionTitle>

            <div className="card md:ml-16  bg-base-100 md:w-10/12 shadow-xl">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-white mb-2 text-xl ml-2"
                    >
                      Category of the image :
                    </label>
                    <select
                      className="select select-accent w-full mt-2   text-white"
                      {...register("categories", {
                        maxLength: 100,
                      })}
                    >
                      <option>Sports</option>
                      <option> Eid</option>
                      <option>Members</option>
                      <option>Others</option>
                    </select>
                    {errors.categories && (
                      <span className="text-red-600 mt-2">
                        {" "}
                        this field is required
                      </span>
                    )}
                  </div>

                  <div class="form-control w-full my-4 ">
                    <label class="label">
                      <span class="label-text text-xl text-white"> Image*</span>
                    </label>
                    <input
                      type="file"
                      {...register("image", { required: true })}
                      class="file-input file-input-bordered w-full  "
                    />
                  </div>



                  <button className={`  mt-8 bg-base-200 text-white text-xl py-4 border border-2 rounded-xl btn-warning w-full ${isLoading ? ' opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}  `}
                    onClick={handleClick}
                  >
                    Add Image
                  </button>


                  {/*                  
                  <button className=" mt-8 bg-base-200 text-white text-xl py-4 border border-2 rounded-xl btn-warning w-full "
                     onClick={handleClick}
                     
                   
                  >
                    Add Image
                  </button> */}

              
                </form>
              </div>
            </div>
          </>
        )}

        <div className="mx-12">
          <SectionTitle
            heading={"Gallery"}
            subHeading={"All Images in our community"}
          >
            {" "}
          </SectionTitle>

          <div className="my-12  flex       ">
            <div className="md:mx-auto flex  justify-center items-center flex-wrap gap-4">

              <button
                onClick={() => setShowCategory(galleryImage)}
                className="btn  btn-xs mr-6 btn-info  "
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
                    <div className=" bg-base-100 shadow-xl  hover:opacity-70  relative">
                      <Link
                        title="Click to show!!"
                        onClick={() => show(singleImage._id)}
                      >
                        <img
                          src={singleImage.image}
                          className="w-72 h-72 rounded-lg rounded-b-none "
                          alt=""
                        />{" "}
                      </Link>
                      <button
                        onClick={() => handleDelete(singleImage._id)}
                        className="btn btn-neutral w-full h-8 text-white btn-xs absolute -mt-1 rounded-none"
                      >
                        Delete
                      </button>
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

        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default AddImage;
