import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const InboxDetails = ({messageData,index,refetch}) => {

    const {_id,name,email,message,status}=messageData;





    return (
        < >



        <tr className="hover:bg-blue-400 text-center">
            <th>{index + 1}</th>
         
            <td>{name} </td>
            <td>{email}</td>
          
            <td>{message}</td>
            <td>{status}</td>
            <td >
                <div className='flex gap-4 hover:text-white mx-auto content-center'>
                    <FaTrash className='cursor-pointer mx-auto  ' title='Delete' ></FaTrash>
                    <FaEdit className='cursor-pointer  mx-auto' title='Edit' ></FaEdit>
                </div>
            </td>
        </tr>



        {/* Open the modal using ID.showModal() method */}
{/* <button className="btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>


<dialog id={index+1  } className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog> */}


    </>
    );
};

export default InboxDetails;