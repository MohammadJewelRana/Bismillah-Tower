import React from 'react';

import { FaEdit, FaTrash, } from 'react-icons/fa';

const UserTable = ({ userData, refetch, index }) => {


    // console.log(userData);

    const { _id, name, email, role, password, image } = userData;

    return (
        < >



            <tr className="hover:bg-blue-400">
                <th>{index + 1}</th>
                <td> <img src={image} alt="null" />  </td>
                <td>{name} </td>
                <td>{email}</td>
                <td>{password ? password : <span className='text-red-600'>google SignIn</span>} </td>
                <td>{role}</td>
                <td>
                    <div className='flex gap-4 hover:text-white'>
                        <FaTrash className='cursor-pointer  ' title='Delete' ></FaTrash>
                        <FaEdit className='cursor-pointer  ' title='Edit' ></FaEdit>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default UserTable;