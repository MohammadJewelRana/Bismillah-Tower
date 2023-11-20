import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";

const UpdateProfile = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { user } = useContext(AuthContext);
    const [, , , findUser] = useUser();
    console.log(findUser);

    const onSubmit = (data) => {
        // console.log(data);
        const { blood, bio, gender, fb, phone, whatsapp, religion, profession, maritalStatus, dob } = data;
        const info = { name: data.name, email: user?.email, userID: findUser?._id, blood, bio, gender, fb, phone, whatsapp, religion, profession, maritalStatus, dob };
        console.log(info);


        fetch("https://bismillah-tower-server.vercel.app/users/information", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        title: "Success!",
                        text: "Information updated successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            })
            .catch((error) => {
                // console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `${error.message}`

                })
                // toast(
                //     `Failed to update information for this user. And the error is ${error.message}`
                // );
            });





    };

    return (
        <div>
            <h2 className="card-title mt-12 text-green-600">
                Update Profile Information{" "}
            </h2>
            <div className="divider"></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { maxLength: 100 })}
                            placeholder="Enter your Name"
                            className="input input-bordered  border   text-white"
                            defaultValue={findUser?.name}
                        />
                        {errors.name && (
                            <span className="text-red-600 mt-2">Name field is required</span>
                        )}
                    </div>



                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Gender</span>
                        </label>
                        <select
                            className="select select-accent w-full  text-white"
                            {...register("gender", {
                                required: true,
                                maxLength: 100,
                            })}
                            placeholder="Enter ticket price"

                        >
                            <option> Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                        {errors.gender && (
                            <span className="text-red-600 mt-2"> this field is required</span>
                        )}
                    </div>

                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">DOB  </span>
                        </label>
                        <input
                            className="bg-base-100   border w-full p-2  select-accent rounded-lg text-white text-xl"
                            type="date"
                            {...register("dob", {

                                maxLength: 100,
                            })}
                            onChange={(e) => setDatePayment(e.target.value)}
                        />

                    </div>



                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Religion</span>
                        </label>
                        <select
                            className="select select-accent w-full  text-white"
                            {...register("religion", {
                                required: true,
                                maxLength: 100,
                            })}
                            placeholder="Enter ticket price"

                        >
                            <option> Muslim</option>
                            <option>Hindu</option>
                            <option>Buddhist</option>
                            <option>Christian</option>
                            <option>Others</option>
                        </select>
                        {errors.religion && (
                            <span className="text-red-600 mt-2"> this field is required</span>
                        )}
                    </div>

                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Blood Group</span>
                        </label>
                        <select
                            className="select select-accent w-full  text-white"
                            {...register("blood", {

                                maxLength: 100,
                            })}
                            placeholder="Enter ticket price"
                            defaultValue={findUser?.blood}

                        >
                            <option> A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option> AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>

                        </select>
                        {errors.blood && (
                            <span className="text-red-600 mt-2"> this field is required</span>
                        )}
                    </div>

                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Profession</span>
                        </label>
                        <select
                            className="select select-accent w-full  text-white"
                            {...register("profession", {

                                maxLength: 100,
                            })}
                            placeholder="Enter ticket price"

                        >
                            <option>Student</option>
                            <option>Job Holder</option>
                            <option>Others</option>

                        </select>
                        {errors.profession && (
                            <span className="text-red-600 mt-2"> this field is required</span>
                        )}
                    </div>

                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Marital Status</span>
                        </label>
                        <select
                            className="select select-accent w-full  text-white"
                            {...register("maritalStatus", {

                                maxLength: 100,
                            })}
                            placeholder="Enter ticket price"
                            defaultValue={findUser?.maritalStatus}

                        >
                            <option> Married</option>
                            <option>Unmarried</option>

                        </select>
                        {errors.maritalStatus && (
                            <span className="text-red-600 mt-2"> this field is required</span>
                        )}
                    </div>


                    <h2 className="card-title mt-12 text-green-600">
                        Contact Information{" "}
                    </h2>
                    <div className="divider"></div>
                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Phone</span>
                        </label>
                        <input
                            type="text"
                            {...register("phone", { maxLength: 100 })}
                            placeholder="Enter your Phone number"
                            className="input input-bordered  border   text-white"
                            defaultValue={findUser?.phone}
                        />
                        {errors.phone && (
                            <span className="text-red-600 mt-2">
                                Phone number field is required
                            </span>
                        )}
                    </div>
                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Whatsapp</span>
                        </label>
                        <input
                            type="text"
                            {...register("whatsapp", { maxLength: 100 })}
                            placeholder="Enter your whatsapp number"
                            className="input input-bordered  border   text-white"
                            defaultValue={findUser?.whatsapp}
                        />
                        {errors.whatsapp && (
                            <span className="text-red-600 mt-2">
                                whatsapp number field is required
                            </span>
                        )}
                    </div>

                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white">Facebook profile  link</span>
                        </label>
                        <input
                            type="text"
                            {...register("fb", { maxLength: 100 })}
                            placeholder="Enter your facebook link  "
                            className="input input-bordered  border   text-white"
                            defaultValue={findUser?.fb}
                        />
                        {errors.fb && (
                            <span className="text-red-600 mt-2">
                                this field is required
                            </span>
                        )}
                    </div>




                    {/* about start */}
                    <div className="form-control mt-4 ">
                        <label className="label">
                            <span className="label-text text-white"> BIO</span>
                        </label>

                        <textarea
                            {...register("bio", {})}
                            placeholder="Enter Your Message"
                            className="textarea      border  border-white w-full  p-6 rounded-lg text-white text-xl "
                            defaultValue={findUser?.bio}
                        ></textarea>
                        {errors.bio && (
                            <span className="text-red-600 mt-2">
                                Message field is required
                            </span>
                        )}
                    </div>



                    <input
                        type="submit"
                        className="btn btn-success  w-full text-xl mb-8 mt-8"
                    />
                </form>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;
