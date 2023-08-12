import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAddMoney = () => {

    const { data: allAddedMoney = [], isLoading: allAddedMoneyLoading,refetch:addMoneyRefetch } = useQuery({
        queryKey: ["addMoney"],
        // enabled: loading,
    
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/addMoney');
          // console.log(res);
          return res.json();
        },
      });
      
      return [allAddedMoney,allAddedMoneyLoading,addMoneyRefetch];



};

export default useAddMoney;