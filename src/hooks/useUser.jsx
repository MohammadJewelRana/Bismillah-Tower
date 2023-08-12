import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {


    const {user}=useContext(AuthContext);

    // const [userAll,setUserAll]=useState([]);
    // useEffect( ()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         setUserAll(data);
    //     })
    // },[])


      
    const { data: userAll = [], isLoading: userAllLoading,refetch:userAllRefetch } = useQuery({
        queryKey: ["users"],
        // enabled: loading,
    
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/users');
          // console.log(res);
          return res.json();
        },
      });
      
      
 

    const findUser=userAll.find(fd=>fd.email=== user?.email); 
    // return [findUser,userAll];

    return [userAll,userAllLoading,userAllRefetch,findUser];
  

};

export default useUser;