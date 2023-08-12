import React from 'react';
import DashboardComponentTitle from '../DashboardComponentTitle';
// import useMessage from '../../Hooks/useMEssage';
import InboxDetails from './InboxDetails';

const Inbox = () => {

    // const [allMessage, allMessageLoading, refetch] = useMessage();
    // console.log(allMessage);



    const handleMessage=()=>{


    }



    return (
        <div>
            

            <DashboardComponentTitle title={'Inbox'}></DashboardComponentTitle>

            
            <div className="card w-full mt-8  border-2">
                <div className="card-body text-center -p-12">

                <div className="overflow-x-auto    ">
              <table className="table    ">
                {/* head */}
                <thead className='text-white text-center  text-[15px] bg-blue-900 '>
                  <tr>
                    <th>SI</th>
                
                    <th>Name</th>
                    <th>Email</th>
              
                    <th>Message</th>
                    <th>Status</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>



                  {/* {
                    allMessage.map((messageData, index) => <InboxDetails
                      key={ messageData._id}
                       messageData={ messageData}
                      refetch={refetch}
                      index={index}
                    ></InboxDetails>)
                  } */}

                </tbody>
              </table>
            </div>













                </div>
            </div>


{/* Open the modal using ID.showModal() method */}

{/* <button className="btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>


<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> */}


        </div>
    );
};

export default Inbox;