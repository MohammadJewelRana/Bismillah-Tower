import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAddMoney = () => {

  const { data: allAddedMoney = [], isLoading: allAddedMoneyLoading, refetch: addMoneyRefetch } = useQuery({
    queryKey: ["addMoney"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch('https://bismillah-tower-server.vercel.app/addMoney');
      // console.log(res);
      return res.json();
    },
  });

  return [allAddedMoney, allAddedMoneyLoading, addMoneyRefetch];



};

export default useAddMoney;