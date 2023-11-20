import React, { useContext, useState } from "react";
import expense from "../../assets/fund/expense.png";
import remaining from "../../assets/fund/rem.png";
import total from "../../assets/fund/total.png";

import { FaBeer, FaMoneyCheck, FaMoneyCheckAlt } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddMoney from "./AddMoney";
import Expense from "./Expense";
import useExpense from "../../hooks/useExpense";
import useAddMoney from "../../hooks/useAddMoney";
import { ToastContainer, toast } from "react-toastify";
import useUser from "../../hooks/useUser";

import userImage from "../../assets/profilePic/user.png";
import {
  FaEdit,
  FaMailBulk,
  FaPhone,
  FaTrash,
  FaWhatsapp,
} from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useCampaign from "../../hooks/useCampaign";
import LoadingPage from "../../Shared/LoadingPage";
import { allExpenses } from "../../Utils/AllExpense";
import { grandTotal } from "../../Utils/Deposit";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Fund = () => {
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState(false);
  const [userAll, userAllLoading, userAllRefetch, findUser] = useUser();
  // console.log(userAll,findUser);
  const { user } = useContext(AuthContext);
  //  console.log(user);
  // console.log(allAddedMoney.length >12);
  let [depositedMoney, setDepositedMoney] = useState([]);
  const [changeState, setChangeState] = useState(true);
  const [allExpense, allExpenseLoading, refetch] = useExpense();
  const totalExpense = allExpenses();
  const [totalAmountSum, perCampaignAmount] = grandTotal();

  const remainingBalance = totalAmountSum - totalExpense;
  const showMore = () => {
    // setChangeState(allAddedMoney)
  };

  const [campaign, campaignLoading, campaignRefetch] = useCampaign();
  const oGoingCampaign = campaign.filter((data) => data.status === "approved");
  //   console.log('on : ',oGoingCampaign)


  const handleDelete = (id) => {
    // console.log(id);
    fetch(`https://bismillah-tower-server.vercel.app/expense/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire(
            'Deleted',
            'Your expense has been deleted',
            'success'
          )
        }
      })
      .catch(error => {
        toast('Failed to delete this notice.')
        console.log(error.message);
      })
  }

  // console.log(findUser);


  return (
    <>
      <Helmet>
        <title>Fund | Bismillah-Tower </title>
      </Helmet>
      <div className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:mx-8 mt-12  ">
          <div className="card w-72 h-36 md:w-56 bg-primary text-primary-content    mx-auto">
            <div className="card-body">
              <div className="flex">
                <h2 className="card-title text-4xl">
                  {" "}
                  {totalAmountSum} <span className="text-red-6000">TK</span>
                </h2>
              </div>
              <p className="mt-4"> Deposited Amount</p>
            </div>
          </div>

          <div className="card w-72  h-36 md:w-56 bg-blue-600 text-primary-content  mx-auto ">
            <div className="card-body">
              <h2 className="card-title text-4xl"> {totalExpense} TK</h2>
              <p className="mt-4">Total Expense </p>
            </div>
          </div>

          <div className="card w-72  h-36 md:w-56 bg-red-900 text-primary-content  mx-auto ">
            <div className="card-body">
              <h2 className="card-title text-4xl"> {remainingBalance} TK</h2>
              <p className="mt-4">Remaining Balance</p>
            </div>
          </div>
        </div>

        {findUser?.userRole === "admin" && (
          <div className="pb-24 me-4 md:me-8">
            <button
              onClick={() => setHide(!hide)}
              className="btn btn-success my-12 float-right "
            >
              {hide ? "CLose the form" : " Expense Money"}
            </button>
          </div>
        )}

        <section className=" mx-12 mt-12  ">
          {hide && (
            <div className=" ">
              <Expense refetch={refetch}></Expense>
              {/* <Tabs>
                <TabList className="border-b-2 border-b-black ">
                 

                  <Tab
                    style={{
                      backgroundColor: " ",
                      border: "2px solid",
                      outline: "none",
                      fontSize:"20px"
                    }}
                  >
                    {" "}
                    Expense
                  </Tab>
                </TabList>

                
                <TabPanel>
                  <Expense refetch={refetch}></Expense>
                </TabPanel>
              </Tabs>   */}
            </div>
          )}
        </section>



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
                <div className="flex flex-col  mx-8   mb-12">
                  <div className="overflow-x-auto">
                    <div className="mx-auto max-w-4xl">
                      <div className="w-full shadow-md rounded my-2">
                        <div className="mb-4">
                          <div>
                            <h1 className="text-center mb-2 text-2xl ">

                              Campaign Purpose : {data.campaignPurpose}


                              <div className="pb-24 me-4 md:me-8">
                                <button
                                  onClick={() => setActive(!active)}
                                  className="btn btn-success my-12 float-right "
                                >
                                  {active ? "CLose " : " Inactive Player"}
                                </button>
                              </div>


                              {
                                active &&
                                <>
                                  {
                                    data.memberArray.map(activeData =>
                                      <>
                                        {
                                          activeData.memberStatus === 'inactive' ?

                                            <div className="md:flex md:flex-col md:float-left  mt-4 md:mb-4">
                                              <p className=" mr-4 border p-2  text-[16px]  justify-center  rounded-lg"> {activeData.memberName}</p>
                                            </div>
                                            :
                                            ' '
                                        }

                                      </> 
                                      
                                    )
                                  }
                                </>
                              }

                              { }
                            </h1>
                          </div>
                        </div>
                        <div className="table">
                          <div className="table-row bg-blue-500 text-white text-center">
                          

                            <div className="table-cell text-[14px]  py-6  ">
                              Name
                            </div>
                            <div className="table-cell  py-6  text-[14px]">
                              Amount
                            </div>

                            <div className="table-cell  py-6 text-[14px]">
                              Status
                            </div>

                          </div>

                          {data.memberArray.map((noticeInfo, index) => (
                            <>
                              {/* <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center bg-red-600 "> */}
                              {/* 
                              <div
                                className={`table-row   hover:bg-white hover:text-black cursor-pointer text-center   ${noticeInfo.paymentStatus === "paid"
                                  ? "bg-green-600  "
                                  : "bg-red-600"
                                  }`}
                              >
                                <div className="table-cell py-6 text-[14px] px-4 border-t">
                                  {index + 1}
                                </div>

                                <div className="table-cell py-6 text-[14px]  border-t max-w-[150px]">
                                  {noticeInfo.memberName}
                                </div>

                                <div className="table-cell py-6 text-[14px]  border-t max-w-[150px]">
                                  {noticeInfo.paidAmount
                                    ? noticeInfo.paidAmount
                                    : 0}
                                </div>

                                <div className="table-cell py-6 text-[14px]  border-t">
                                  {" "}
                                  {noticeInfo.paymentStatus}
                                </div>

                              </div> */}

                              {
                                noticeInfo.memberStatus === 'active' &&
                                <div
                                  className={`table-row   hover:bg-white hover:text-black cursor-pointer text-center   ${noticeInfo.paymentStatus === "paid"
                                    ? "bg-black  "
                                    : "bg-red-600"
                                    }`}
                                >
                                  
                                  <div className="table-cell py-6 text-[14px]  border-t max-w-[150px]">
                                    {noticeInfo.memberName}
                                  </div>

                                  <div className="table-cell py-6 text-[14px]  border-t max-w-[150px]">
                                    {noticeInfo.paidAmount
                                      ? noticeInfo.paidAmount
                                      : 0}
                                  </div>

                                  <div className="table-cell py-6 text-[14px]  border-t">
                                    {" "}
                                    {noticeInfo.paymentStatus}
                                  </div>

                                </div>
                              }



                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-8" />
                  
                </div>
              </>
            ))}
          </>
        )}




        {perCampaignAmount.length > 0 && (
          <>
            <SectionTitle
              heading={"Deposited Cash Calculation"}
              subHeading={"All active members contact information"}
            ></SectionTitle>
            <div className="flex flex-col mt-4 mx-8   ">
              <div className="overflow-x-auto">
                <div className="mx-auto max-w-4xl">
                  <div className="w-full shadow-md rounded my-2">
                    <div className="table">
                      <div className="table-row bg-blue-500 text-white text-center">
                        <div className="table-cell  py-6 text-[18px]">
                          Campaign Name
                        </div>
                        <div className="table-cell  py-6 text-[18px]">
                          Deposited cash
                        </div>
                      </div>

                      {perCampaignAmount.slice(0, 15).map((memberInfo) => (
                        <>
                          <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center ">
                            <div className="table-cell py-6 text-[18px]  border-t">
                              {" "}
                              {memberInfo.campaignPurpose}
                            </div>
                            <div className="table-cell py-6 pl-2 text-[18px]  border-t">
                              {" "}
                              {memberInfo.campaignTotal}
                            </div>

                            {/* 
                                                <div className="table-cell py-6 text-xl  border-t px-4">
                                                    <button className="btn btn-success btn-xs mr-4">Details</button>
                                                    <button onClick={() => handleDelete(memberInfo._id)} className="btn btn-error btn-xs">Delete</button>

                                                </div> */}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  {/* 
                  <div className="flex mt-8">
                    <button
                      onClick={() => showMore()}
                      className="btn btn-secondary mx-auto"
                    >
                      {" "}
                      See More
                    </button>  
                  </div>*/}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-24"></div>

        {allExpense.length > 0 && (
          <>
            {/* expense calculation */}
            <SectionTitle
              heading={"Spending Money Calculation"}
              subHeading={"All active members contact information"}
            ></SectionTitle>

            <div className="flex flex-col mt-12 mx-8   ">
              <div className="overflow-x-auto">
                <div className="mx-auto max-w-4xl">
                  <div className="w-full shadow-md rounded my-2">
                    <div className="table">
                      <div className="table-row bg-blue-500 text-white text-center">
                        <div className="table-cell  py-6 text-[10px] pl-4">
                          Date
                        </div>
                        <div className="table-cell  py-6 text-[10px]">Name</div>
                        <div className="table-cell  py-6 text-[10px]">
                          {" "}
                          Ball Count
                        </div>
                        <div className="table-cell  py-6 text-[10px]">
                          Ball Cost
                        </div>
                        <div className="table-cell  py-6 text-[10px]">
                          {" "}
                          Tape Count{" "}
                        </div>
                        <div className="table-cell  py-6 text-[10px]">
                          Tape Cost
                        </div>
                        <div className="table-cell  py-6 text-[10px] pe-4">
                          Total
                        </div>
                        {/* <div className="table-cell  py-6 text-[10px] pe-4">
                          Action
                        </div> */}


                        {
                          findUser?.userRole === 'admin' &&
                          <div className="table-cell  py-6 text-[10px] pe-4">
                            Action
                          </div>

                        }
                      </div>

                      {allExpense.slice(0, 20).map((memberInfo) => (
                        <>
                          <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center ">
                            <div className="table-cell py-6 text-[10px]  border-t">
                              {" "}
                              {memberInfo.date}
                            </div>
                            <div className="table-cell py-6 text-[10px]  border-t">
                              {" "}
                              {memberInfo.name}
                            </div>
                            <div className="table-cell py-6 text-[10px]  border-t">
                              {" "}
                              {memberInfo.ballCount
                                ? memberInfo.ballCount
                                : "none"}
                            </div>
                            <div className="table-cell py-6 text-[10px]  border-t">
                              {" "}
                              {memberInfo.ballCost
                                ? memberInfo.ballCost
                                : "none"}
                            </div>
                            <div className="table-cell py-6 text-[10px]  border-t">
                              {" "}
                              {memberInfo.tapeCount
                                ? memberInfo.tapeCount
                                : "none"}
                            </div>
                            <div className="table-cell py-6 text-[10px]  border-t">
                              {" "}
                              {memberInfo.tapeCost
                                ? memberInfo.tapeCost
                                : "none"}
                            </div>
                            <div className="table-cell py-6 text-[10px]  border-t">
                              {" "}
                              {memberInfo.tapeCost + memberInfo.ballCost}
                            </div>

                            {
                              findUser?.userRole === 'admin' &&
                              <div className="table-cell py-6 text-[10px]  border-t">
                                {" "}

                                <FaTrash className="mx-auto text-red-600 text-[16px]" title="Delete" onClick={() => handleDelete(memberInfo._id)} ></FaTrash>

                              </div>

                            }



                            {/*                                             
                                <div className="table-cell py-6 text-xl  border-t"> {memberInfo.addedMoneyAdmin ? memberInfo.addedMoneyAdmin : 'Jewel Rana suad'}</div> */}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>


                  {allExpense.length > 14 && (
                    <div className="flex mt-8">
                      <button
                        onClick={() => showMore()}
                        className="btn btn-secondary mx-auto"
                      >
                        {" "}
                        See More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* 
                <div className='grid grid-cols-1   gap-8 md:hidden sm:block   mx-4 '>

                    {
                        userAll.map(memberData => <>
                            <div className="card w-9/12 mx-auto border  border-red-300   bg-base-100 shadow-xl mb-12 relative">
                                <figure>
                                    <div className="badge badge-secondary absolute mt-12 ml-48 ">{memberData.userRole}</div>
                                    {
                                        memberData.image ?
                                            <>
                                                <img src={memberData.image} className='h-[200px]  w-[200px] mt-4 rounded-full' alt="Shoes" />
                                            </>
                                            :
                                            <img src={userImage} className='h-[200px]  w-[200px] mt-4 rounded-full' alt="Shoes" />
                                    }
                                </figure>
                                <div className="card-body text-center">
                                    <h1 className='text-2xl uppercase'>{memberData.name}</h1>
                                    <div>
                                        <div className='max-w-[200px] mx-auto  flex mb-2'>
                                            <span><FaMailBulk className='mt-1 mr-4  '></FaMailBulk></span>
                                            <p className='text-[12px]'>  {memberData.email}</p>
                                        </div>

                                        <div className='w-[300px] mx-auto my-4   flex  xs:justify-center   '>
                                            {
                                                memberData.userRole === 'admin' ?
                                                    <>
                                                        <button onClick={() => handleUserRole(memberData._id, 'member')} className='btn  btn-xs btn-success '>  Make Member</button>
                                                        <button onClick={() => handleUserRole(memberData._id, 'visitor')} className='btn  btn-xs btn-warning'>  Make visitor</button>
                                                    </>
                                                    :
                                                    <>
                                                        <button onClick={() => handleUserRole(memberData._id, 'admin')} className='btn  btn-xs btn-success'>  Make Admin</button>
                                                        {
                                                            memberData.userRole === 'member' ?
                                                                <button onClick={() => handleUserRole(memberData._id, 'visitor')} className='btn  btn-xs btn-warning'> Make visitor</button>
                                                                :
                                                                <button onClick={() => handleUserRole(memberData._id, 'member')} className='btn  btn-xs btn-warning'> Make member</button>
                                                        }
                                                    </>
                                            }
                                        </div>
                                        <div className="divider text-white"></div>
                                        <div className='w-[200px] mx-auto justify-center flex gap-4 mt-4'>
                                            <button className="btn btn-xs btn-success">Details</button>
                                            <button className="btn btn-xs btn-error" onClick={() => handleDelete(memberData._id)}>Delete</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>)
                    }
                </div> */}
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Fund;
