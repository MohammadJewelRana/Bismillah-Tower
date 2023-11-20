import React from "react";
import profilePic from "../../assets/profilePic/user.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { Helmet } from "react-helmet-async";
import LoadingPage from "../../Shared/LoadingPage";

const Profile = () => {

    const [, userAllLoading, , findUser] = useUser();
    if (userAllLoading) {
        return <LoadingPage></LoadingPage>
    }
    // console.log(findUser);
    const { blood, bio, gender, fb, phone, whatsapp, religion, profession, maritalStatus, name, photo, userRole, email } = findUser;

    return (
        <div className="md:mx-12 mx-8">
            <Helmet>
                <title>Profile | Bismillah-Tower </title>
            </Helmet>
            <div className="card w-full my-8  bg-base-100 shadow-xl">
                <div className="card-body  grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* left */}
                    <div className="min-w-[300px] mx-auto ">
                        <div className="md:mx-auto    ">


                            {
                                findUser?.photo ?
                                <img src={findUser?.photo} alt="" className="rounded-full h-44 w-44 ml-10" />
                                    :
                                    <img src={ profilePic} alt="" className="rounded-full h-44 w-44 ml-10" />

                            }
                          

                            {
                                bio &&
                                <h1 className=" ml-6 md:ml-8 mt-3 text-[14px] text-red-600">  <span className="text-2xl text-white"> "</span>{bio} <span className="text-2xl text-white"> "</span></h1>
                            }
                            <h1 className="md:ml-8  mt-12 text-2xl "> {name}</h1>
                        </div>

                        <div className="mt-8 me-12 mx-auto">

                            <Link to='/profile'> <button className="btn btn-success w-full   ">View Profile</button></Link>
                            <Link to='/profile/updateProfile'> <button className="btn w-full mt-4 btn-  btn-secondary">Update Profile</button></Link>
                        </div>
                    </div>

                    {/* right */}


                    <div className="mt-12 md:-mt-4">
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
