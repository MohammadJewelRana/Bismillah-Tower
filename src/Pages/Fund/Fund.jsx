import React, { useContext, useState } from 'react';
import expense from '../../assets/fund/expense.png'
import remaining from '../../assets/fund/rem.png'
import total from '../../assets/fund/total.png'

import { FaBeer, FaMoneyCheck, FaMoneyCheckAlt } from 'react-icons/fa';
import SectionTitle from '../../Shared/SectionTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddMoney from './AddMoney';
import Expense from './Expense';
import useExpense from '../../hooks/useExpense';
import useAddMoney from '../../hooks/useAddMoney';
import { ToastContainer } from 'react-toastify';
import useUser from '../../hooks/useUser';

import userImage from '../../assets/profilePic/user.png'
import { FaEdit, FaMailBulk, FaPhone, FaTrash, FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';


const Fund = () => {




    const [allExpense, allExpenseLoading, refetch] = useExpense();
    // console.log(allExpense);
    let totalBallExpense = 0;
    let totalTapeExpense = 0;
    allExpense.forEach(element => {
        // console.log(element);
        totalBallExpense = totalBallExpense + element.ballCost;
        totalTapeExpense = totalTapeExpense + element.tapeCost;
    });
    // console.log(totalBallExpense, totalTapeExpense);


    const [allAddedMoney, allAddedMoneyLoading, addMoneyRefetch] = useAddMoney();
    let totalMoney = 0;
    // console.log(allAddedMoney);
    allAddedMoney.forEach(element => {
        totalMoney = totalMoney + element.amount;

    })
    // console.log('money :: ',totalMoney);

    const remainingBalance = totalMoney - (totalBallExpense + totalTapeExpense);



    const [hide, setHide] = useState(false);
    const [userAll, userAllLoading, userAllRefetch, findUser] = useUser();
    // console.log(allAddedMoney);

    const { user } = useContext(AuthContext);
    //  console.log(user);

    // console.log(allAddedMoney.length >12);
    let [depositedMoney, setDepositedMoney] = useState([]);
    const [changeState, setChangeState] = useState(true);

    const showMore = () => {
        // setChangeState(allAddedMoney)
    }

    // console.log(depositedMoney);

    return (


        <>






            <div className='mb-24'>




                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:mx-8 mt-12'>

                    <div className="card w-56 h-36 bg-primary text-primary-content  mx-8 ">
                        <div className="card-body">
                            <div className='flex'>
                                <h2 className="card-title text-4xl"> {totalMoney} <span className='text-red-6000'>TK</span></h2>
                            </div>
                            <p className='mt-4'>  Deposited Amount</p>
                        </div>
                    </div>

                    <div className="card w-56  h-36 bg-blue-600 text-primary-content  mx-8 ">
                        <div className="card-body">
                            <h2 className="card-title text-4xl"> {totalBallExpense + totalTapeExpense} TK</h2>
                            <p className='mt-4'>Total  Expense  </p>
                        </div>
                    </div>

                    <div className="card w-56  h-36 bg-red-900 text-primary-content  mx-8 ">
                        <div className="card-body">
                            <h2 className="card-title text-4xl"> {remainingBalance} TK</h2>
                            <p className='mt-4'>Remaining Balance</p>
                        </div>
                    </div>








                </div>







                <div className='pb-24 me-4 md:me-8'>
                    <button onClick={() => setHide(!hide)} className='btn btn-success my-12 float-right ' >
                        {
                            hide ?
                                'CLose the form' : 'Add Or Expense Money'
                        }
                    </button>
                </div>


                <section className=' mx-12 mt-12  '>





                    {
                        hide &&
                        <div className=' '>
                            <Tabs  >
                                <TabList className='border-b-2 border-b-black '>

                                    <Tab style={{ backgroundColor: ' black', color: 'white', border: '2px solid', outline: 'none', marginRight: '20px' }}>Add money</Tab>

                                    <Tab style={{ backgroundColor: ' ', border: '2px solid', outline: 'none' }}> Expense</Tab>

                                </TabList>



                                <TabPanel className=' '>

                                    <AddMoney addMoneyRefetch={addMoneyRefetch}></AddMoney>


                                </TabPanel>

                                <TabPanel>


                                    <Expense refetch={refetch}></Expense>

                                </TabPanel>
                            </Tabs>


                        </div>

                    }


                </section>







                {

                    allAddedMoney.length > 0 &&
                    <>
                        <SectionTitle heading={'Deposited Cash Calculation'} subHeading={'All active members contact information'}></SectionTitle>
                        <div className="flex flex-col mt-4 mx-8   ">
                            <div className="overflow-x-auto">
                                <div className="mx-auto max-w-4xl">
                                    <div className="w-full shadow-md rounded my-2">
                                        <div className="table">
                                            <div className="table-row bg-blue-500 text-white text-center">

                                                <div className="table-cell  py-6 text-[12px] pl-4">Date</div>
                                                <div className="table-cell  py-6 text-[12px]">Name</div>
                                                <div className="table-cell  py-6 text-[12px]">Deposited cash</div>
                                                <div className="table-cell  py-6 text-[12px]">Who added</div>


                                            </div>

                                            {
                                                allAddedMoney.slice(0, 15).map(memberInfo => <>

                                                    <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center ">


                                                        <div className="table-cell py-6 text-[14px]  border-t"> {memberInfo.date}</div>
                                                        <div className="table-cell py-6 pl-2 text-[14px]  border-t"> {memberInfo.name}</div>
                                                        <div className="table-cell py-6 text-[14px]  border-t"> {memberInfo.amount}</div>
                                                        <div className="table-cell py-6 text-[14px]  border-t"> {memberInfo.addedMoneyAdmin ? memberInfo.addedMoneyAdmin : 'null'}</div>


                                                        {/* 
                                                <div className="table-cell py-6 text-xl  border-t px-4">
                                                    <button className="btn btn-success btn-xs mr-4">Details</button>
                                                    <button onClick={() => handleDelete(memberInfo._id)} className="btn btn-error btn-xs">Delete</button>

                                                </div> */}

                                                    </div>

                                                </>)
                                            }


                                        </div>
                                    </div>
                                    {
                                        allAddedMoney.length > 14 &&
                                        <div className='flex mt-8'>
                                            <button onClick={() => showMore()} className='btn btn-secondary mx-auto'> See More</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                }



                <div className='mt-24'>

                </div>


                {
                    allExpense.length > 0 &&
                    <>
                        {/* expense calculation */}
                        <SectionTitle heading={'Spending Money Calculation'} subHeading={'All active members contact information'}></SectionTitle>

                        <div className="flex flex-col mt-12 mx-8   ">
                            <div className="overflow-x-auto">
                                <div className="mx-auto max-w-4xl">
                                    <div className="w-full shadow-md rounded my-2">
                                        <div className="table">
                                            <div className="table-row bg-blue-500 text-white text-center">

                                                <div className="table-cell  py-6 text-[10px] pl-4">Date</div>
                                                <div className="table-cell  py-6 text-[10px]">Name</div>
                                                <div className="table-cell  py-6 text-[10px]">   Ball Count</div>
                                                <div className="table-cell  py-6 text-[10px]">Ball Cost</div>
                                                <div className="table-cell  py-6 text-[10px]"> Tape Count  </div>
                                                <div className="table-cell  py-6 text-[10px]">Tape Cost</div>
                                                <div className="table-cell  py-6 text-[10px] pe-4">Total</div>



                                            </div>

                                            {
                                                allExpense.slice(0, 20).map(memberInfo => <>

                                                    <div className="table-row  hover:bg-white hover:text-black cursor-pointer text-center ">


                                                        <div className="table-cell py-6 text-[10px]  border-t"> {memberInfo.date}</div>
                                                        <div className="table-cell py-6 text-[10px]  border-t"> {memberInfo.name}</div>
                                                        <div className="table-cell py-6 text-[10px]  border-t"> {memberInfo.ballCount ? memberInfo.ballCount : 'none'}</div>
                                                        <div className="table-cell py-6 text-[10px]  border-t"> {memberInfo.ballCost ? memberInfo.ballCost : 'none'}</div>
                                                        <div className="table-cell py-6 text-[10px]  border-t"> {memberInfo.tapeCount ? memberInfo.tapeCount : 'none'}</div>
                                                        <div className="table-cell py-6 text-[10px]  border-t"> {memberInfo.tapeCost ? memberInfo.tapeCost : 'none'}</div>
                                                        <div className="table-cell py-6 text-[10px]  border-t"> {memberInfo.tapeCost + memberInfo.ballCost}</div>
                                                        {/*                                             
                                <div className="table-cell py-6 text-xl  border-t"> {memberInfo.addedMoneyAdmin ? memberInfo.addedMoneyAdmin : 'Jewel Rana suad'}</div> */}




                                                    </div>

                                                </>)
                                            }
                                        </div>
                                    </div>
                                    {
                                        allExpense.length > 14 &&
                                        <div className='flex mt-8'>
                                            <button onClick={() => showMore()} className='btn btn-secondary mx-auto'> See More</button>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>


                    </>
                }










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