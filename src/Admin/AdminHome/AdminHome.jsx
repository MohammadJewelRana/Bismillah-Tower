import React from 'react';
import Fund from '../../Pages/Fund/Fund';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const AdminHome = () => {
    const [ , , ,findUser]=useUser();
    // console.log(findUser);
  
    return (
        <div>
          
            <div className='my-36'>
                <h1 className='text-center text-[42px]'> <span>Welcome</span><br /> 
                <span className='text text-red-600'>" 
                {
                    findUser?.name ? findUser.name : ''
                }
                ''
                </span><br />
                
                 <span> To Admin Dashboard</span></h1>
            </div>

        </div>
    );
};

export default AdminHome;