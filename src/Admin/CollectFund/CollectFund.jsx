import React, { useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import useCampaign from "../../hooks/useCampaign";
import useUser from "../../hooks/useUser";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AddMoney from "../../Pages/Fund/AddMoney";
import Expense from "../../Pages/Fund/Expense";
import { Helmet } from "react-helmet-async";
import { FaEdit } from "react-icons/fa";

const CollectFund = () => {
  const { user } = useContext(AuthContext);
  const [collect, setCollect] = useState(false);
  const [payment, setPayment] = useState([]);
  // const [date, setDate] = useState('');
  const [hide, setHide] = useState(false);
  const [datePayment, setDatePayment] = useState();

  const [total, setTotal] = useState([]);

  // console.log(date);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [campaign, campaignLoading, campaignRefetch] = useCampaign();
  const oGoingCampaign = campaign.filter((data) => data.status === "approved");
  // console.log(oGoingCampaign);

  const [userAll] = useUser();
  // console.log(userAll);
  const allMember = userAll.filter((data) => data.userRole === "member");

  const onSubmit = (data) => {
    console.log(data);
    let newArray = [];
    allMember.forEach((element) => {
      // console.log(element);
      const info = {
        memberID: element._id,
        memberName: element.name,
        memberEmail: element.email,
        paymentStatus: "pending",
        memberStatus: "active",
      };
      // console.log(info);
      newArray.push(info);
    });

    // console.log(newArray);
    const info = {
      campaignPurpose: data.name,
      date: data.date,
      campaignCreator: user.displayName,
      status: "pending",
      memberArray: newArray,
    };

    // console.log(info);
    fetch("https://bismillah-tower-server.vercel.app/campaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          reset();
          campaignRefetch();
          Swal.fire("Good job!", "Campaign Added Successfully!", "success");
        }
      })
      .catch((error) => {
        toast(`Failed to add campaign . ${error.message}`);
      });
  };

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`https://bismillah-tower-server.vercel.app/campaign/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          campaignRefetch();
          Swal.fire("Deleted", "Your campaign has been deleted", "success");
        }
      })
      .catch((error) => {
        toast("Failed to delete this campaign.");
      });
  };

  const handleStatus = (id, status) => {
    // console.log(id, status);
    const updateCampaign = { id: id, status: status };

    //send data
    fetch("https://bismillah-tower-server.vercel.app/campaign", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          campaignRefetch();
          Swal.fire({
            title: "Success!",
            text: "Status updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        // console.log(error.message);
        toast(
          `Failed to update status for this notice. And the error is ${error.message}`
        );
      });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const show = (memberID, campaignID) => {
    // console.log(memberID, campaignID);
    const campaignInfo = { memberID: memberID, campaignID: campaignID };
    setPayment(campaignInfo);
    window.my_modal_2.showModal(); //call the modal
  };
  // console.log(payment);
  // const [modalClose, setModalClose] = useState(false)
  const changeMemberStatus = (memberId, campaignID, st) => {
    console.log(memberId, campaignID, st);
    let statusMember;
    if (st === "active") {
      statusMember = "inactive";
    } else {
      statusMember = "active";
    }
    // console.log(statusMember);
    const findCampaign = campaign.filter((data) => data._id === campaignID);
    for (let i in findCampaign) {
      var memberArr = findCampaign[i].memberArray;

      memberArr?.forEach((element) => {
        // console.log(element);
        if (element.memberID === memberId) {
          // console.log(element);

          // element["memberStatus"] = 'inactive';
          element["memberStatus"] = statusMember;

          // console.log(element);
        }
      });
    }
    const finalUpdate = { memberArrayUpdate: memberArr, campaignID };
    // console.log(finalUpdate);
    fetch("https://bismillah-tower-server.vercel.app/campaign/payment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        campaignRefetch();
        if (data.modifiedCount > 0) {
          campaignRefetch();
          toast("Player status changed successfully!!!");
        }
      })
      .catch((error) => {
        toast(`Failed to change player status . ${error.message}`);
      });
      setDatePayment("");
  };


  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    const amount = form.paidAmount.value;
    const { memberID, campaignID } = payment;
    const findCampaign = campaign.filter((data) => data._id === campaignID);
    for (let i in findCampaign) {
      // console.log(findCampaign[i].memberArray);
      var memberArr = findCampaign[i].memberArray;

      memberArr?.forEach((element) => {
        // console.log(element);
        if (element.memberID === memberID) {
          // console.log(element);
          element.paymentStatus = "paid";

          element["paidAmount"] = amount;
          element["paidDate"] = datePayment;
          // console.log(element);
        }
      });
    }
    const finalUpdate = { memberArrayUpdate: memberArr, campaignID };
    fetch("https://bismillah-tower-server.vercel.app/campaign/payment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setModalClose(true);
        campaignRefetch();
        if (data.modifiedCount > 0) {
          campaignRefetch();
          toast("Payment status changed successfully!!!");
          form.reset();
        }
      })
      .catch((error) => {
        toast(`Failed to change payment status . ${error.message}`);
      });

    setDatePayment("");
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <>
        <Helmet>
          <title>Collect Fund | Bismillah-Tower </title>
        </Helmet>
        <div className="pb-16 me-4 mt-12 md:me-8">
          <button
            onClick={() => setCollect(!collect)}
            className="btn btn-primary float-right "
          >
            {collect ? "Close the Form" : "Create New Campaign"}
          </button>

          {hide && (
            <button
              onClick={() => setHide(collect)}
              className="btn btn-primary float-right mr-4"
            >
              {collect ? " " : "Close the add money Form"}
            </button>
          )}
        </div>

        <div className="">
          {collect && (
            <>
              <SectionTitle
                heading={"  Campaign :   Collect Fund"}
                subHeading={"All active members contact information"}
              ></SectionTitle>

              <form className="mx-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-white mb-2 text-xl ml-2"
                  >
                    Campaign Purpose :
                  </label>
                  <input
                    type="text"
                    className=" bg-base-100 border w-full p-6 rounded-lg text-white text-xl"
                    {...register("name", { required: true })}
                    placeholder="Enter campaign purpose "
                  />
                  {errors.name && (
                    <span className="mt-4 text-red-600">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-white mb-2 text-xl ml-2"
                  >
                    Pick a date :
                  </label>
                  <input
                    className="bg-base-100   border w-full p-6 rounded-lg text-white text-xl"
                    type="date"
                    {...register("date", { required: true })}
                  />
                  {errors.name && (
                    <span className="mt-4 text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
                <button
                  className={`  mb-24 mt-8 bg-blue-700 text-white text-xl py-4   rounded-xl   w-full ${
                    isLoading
                      ? " opacity-50 cursor-not-allowed bg-base-200"
                      : "hover:bg-base-600"
                  }  `}
                  onClick={handleClick}
                >
                  Add Campaign
                </button>

                {/*               
                <button className="btn  bg-blue-700 text-white  w-full">
                  Add Campaign
                </button> */}
              </form>
            </>
          )}
        </div>
      </>

      <div className="mt-16"></div>

      {oGoingCampaign.length > 0 && (
        <>
          <SectionTitle
            heading={"On-Going Campaign "}
            subHeading={"All active members contact information"}
          ></SectionTitle>

          {/* <div className='pb-12 me-4  md:me-8'>
                        <button className="btn btn-primary float-right ">
                            Total Amount : 1500 <span className='text-red-600'>  Tk</span>
                        </button>
                    </div> */}

          {oGoingCampaign.map((data) => (
            <>
              <div className="flex flex-col mt-4 mx-8   ">
                <div className="overflow-x-auto">
                  <div className="mx-auto max-w-4xl">
                    <div className="w-full shadow-md rounded my-2">
                      <div className="my-8">
                        <div>
                          <h1 className="text-center mb-2 text-2xl">
                            Campaign Purpose : {data.campaignPurpose}
                          </h1>
                        </div>
                      </div>
                      <div className="table">
                        <div className="table-row bg-blue-500 text-white text-center">
                          <div className="table-cell  py-6 md:text-[14px] text-[10px]">
                            SI
                          </div>

                          <div className="table-cell md:text-[14px] text-[10px]  py-6  ">
                            Name
                          </div>
                          <div className="table-cell md:text-[14px] text-[10px]  py-6  ">
                            Player Status
                          </div>
                          <div className="table-cell  py-6  md:text-[14px] text-[10px]">
                            Amount
                          </div>

                          <div className="table-cell  py-6 md:text-[14px]    text-[10px]">
                            Status
                          </div>

                          <div className="table-cell  py-6 md:text-[14px] text-[10px]">
                            Action
                          </div>
                        </div>

                        {data.memberArray.map((noticeInfo, index) => (
                          <>
                            {/* <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center bg-red-600 "> */}

                            <div
                              className={`table-row   hover:bg-white hover:text-black cursor-pointer text-center   ${
                                noticeInfo.paymentStatus === "paid"
                                  ? "bg-[#181818]  "
                                  : "bg-red-600"
                              } 
                            ${
                              noticeInfo.memberStatus !== "active"
                                ? "  bg-[#51524d]"
                                : " bg-blue-600"
                            }`}
                            >
                              <div className="table-cell py-6 md:text-[14px] text-[10px] px-4 border-t">
                                {index + 1}
                              </div>

                              <div className="table-cell py-6 md:text-[14px] text-[10px]  border-t max-w-[150px]">
                                {noticeInfo.memberName}
                              </div>

                              <div className="table-cell py-6 md:text-[14px] text-[10px]  border-t max-w-[150px]">
                                <div className="flex justify-center md:gap-4 gap-2">
                                  <p> {noticeInfo.memberStatus} </p>
                                  <p>
                                    <FaEdit
                                      className=" mt-1 cursor-pointer hover:bg-yellow-600 "
                                      title="Change status to Inactive player!!"
                                      onClick={() =>
                                        changeMemberStatus(
                                          noticeInfo.memberID,
                                          data._id,
                                          noticeInfo.memberStatus
                                        )
                                      }
                                    ></FaEdit>
                                  </p>
                                </div>
                              </div>

                              <div className="table-cell py-6 md:text-[14px] text-[10px]  border-t max-w-[150px]">
                                {noticeInfo.paidAmount
                                  ? noticeInfo.paidAmount
                                  : 0}
                              </div>

                              <div className="table-cell py-6 md:text-[14px] text-[10px]  border-t">
                                {" "}
                                {noticeInfo.paymentStatus}
                              </div>
                              <div className="table-cell py-6 md:text-[14px] text-[10px]  border-t ">
                                {noticeInfo.paymentStatus !== "paid" &&
                                noticeInfo.memberStatus === "active" ? (
                                  <button
                                    onClick={() =>
                                      show(noticeInfo.memberID, data._id)
                                    }
                                    className="btn btn-xs text-white     bg-green-600 md:btn-md hover:text-white text-black mr-2"
                                  >
                                    Pay{" "}
                                  </button>
                                ) : (
                                  <div>
                                    {noticeInfo.memberStatus === "inactive" ? (
                                      <p>none </p>
                                    ) : (
                                      <p>Complete</p>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}

      <div className="mt-16"></div>
      {campaign.length > 0 && (
        <>
          <SectionTitle
            heading={"All Campaign "}
            subHeading={"Details of all campaign"}
          ></SectionTitle>

          <div className="flex flex-col mt-4 mx-8  hidden md:block">
            <div className="overflow-x-auto">
              <div className="mx-auto max-w-4xl">
                <div className="w-full shadow-md rounded my-2">
                  <div className="table">
                    <div className="table-row bg-blue-500 text-white text-center">
                      <div className="table-cell  py-6 text-xl">SI</div>
                      <div className="table-cell  py-6 text-xl">Creator</div>
                      <div className="table-cell  py-6 text-xl">Date</div>
                      <div className="table-cell  py-6 text-xl">Purpose</div>

                      <div className="table-cell  py-6 text-xl">Status</div>

                      <div className="table-cell  py-6 text-xl">Action</div>
                    </div>

                    {campaign.map((noticeInfo, index) => (
                      <>
                        <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center ">
                          <div className="table-cell py-6 text-xl px-4 border-t">
                            {index + 1}
                          </div>

                          <div className="table-cell py-6 text-xl  border-t max-w-[150px]">
                            {noticeInfo.campaignCreator}
                          </div>

                          <div className="table-cell py-6 text-xl  border-t">
                            {noticeInfo?.date ? noticeInfo.date : "none"}
                          </div>
                          <div className="table-cell py-6 text-xl  border-t">
                            {noticeInfo.campaignPurpose}
                          </div>

                          <div className="table-cell py-6 text-xl  border-t">
                            {" "}
                            {noticeInfo.status}
                          </div>
                          <div className="table-cell py-6 text-xl  border-t ">
                            {noticeInfo.status === "pending" ? (
                              <button
                                onClick={() =>
                                  handleStatus(noticeInfo._id, "approved")
                                }
                                className="btn btn-xs bg-green-600 hover:text-white text-black mr-2"
                              >
                                Approved
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  handleStatus(noticeInfo._id, "pending")
                                }
                                className="btn btn-xs bg-green-600 hover:text-white text-black mr-2"
                              >
                                Pending
                              </button>
                            )}

                            <button
                              onClick={() => handleDelete(noticeInfo._id)}
                              className="btn  bg-red-600 btn-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1   gap-8 md:hidden sm:block   mx-4 ">
            {campaign.map((data) => (
              <>
                <div className="card w-full border  border-red-300   bg-base-100 shadow-xl mb-12">
                  <div className="card-body text-center">
                    <table className="text-left">
                      <tr className="  border-b-2 ">
                        <th className="py-4 me-9 ">Creator</th>
                        <th className="py-4  pl-[16px]">
                          {data.campaignCreator}
                        </th>
                      </tr>
                      <tr className="  border-b-2 ">
                        <th className="py-4 me-9 ">Purpose</th>
                        <th className="py-4  pl-[16px]">
                          {data.campaignPurpose}
                        </th>
                      </tr>

                      <tr className="  border-b-2 ">
                        <th className="py-4">Date</th>
                        <th className="py-4 pl-[16px]">
                          {data.date ? data.date : "none"}{" "}
                        </th>
                      </tr>

                      <tr className="  border-b-2 ">
                        <th className="py-4">Status</th>
                        <th className="py-4 pl-[16px]">{data.status} </th>
                      </tr>

                      <tr className="  border-b-2 ">
                        <th className="py-4">Action</th>
                        <th className="py-4 pl-[16px]">
                          {data.status === "pending" ? (
                            <button
                              onClick={() => handleStatus(data._id, "approved")}
                              className="btn btn-xs bg-green-600 hover:text-white text-black mr-2"
                            >
                              Approved
                            </button>
                          ) : (
                            <button
                              onClick={() => handleStatus(data._id, "pending")}
                              className="btn btn-xs bg-green-600 hover:text-white text-black mr-2"
                            >
                              Pending
                            </button>
                          )}

                          <button
                            onClick={() => handleDelete(data._id)}
                            className="btn  bg-red-600 btn-xs"
                          >
                            Delete
                          </button>
                        </th>
                      </tr>
                    </table>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}

      {campaign.length > 0 && (
        <dialog id="my_modal_2" className="modal">
          <form onSubmit={handlePayment} method="dialog" className="modal-box">
            <h1 className="text-center">Add Money</h1>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-white mb-2 text-xl ml-2"
              >
                Amount :
              </label>
              <input
                type="number"
                className="bg-base-100 border w-full p-6 rounded-lg text-white text-xl"
                name="paidAmount"
                placeholder="Enter Your Amount"
              />
              {errors.amount && (
                <span className="mt-4 text-red-600">
                  This field is required
                </span>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-white mb-2 text-xl ml-2"
              >
                Pick a date :
              </label>
              <input
                className="bg-base-100   border w-full p-6 rounded-lg text-white text-xl"
                type="date"
                name="date"
                onChange={(e) => setDatePayment(e.target.value)}
              />
              {errors.name && (
                <span className="mt-4 text-red-600">
                  This field is required
                </span>
              )}
            </div>

            {/* <button className="btn  bg-blue-700 text-white  w-full">
              Add Money
            </button> */}

            <button
              className={`  mb-24 mt-8 bg-blue-700 text-white text-xl py-4   rounded-xl   w-full ${
                isLoading
                  ? " opacity-50 cursor-not-allowed bg-base-200"
                  : "hover:bg-base-600"
              }  `}
              onClick={handleClick}
            >
              {" "}
              Add Money
            </button>
          </form>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CollectFund;
