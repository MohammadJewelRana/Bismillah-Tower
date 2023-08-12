import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import { useQuery } from 'react-query';

const useExpense = () => {
 

    const { data: allExpense = [], isLoading: allExpenseLoading,refetch } = useQuery({
        queryKey: ["expense"],
        // enabled: loading,
    
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/expense');
          // console.log(res);
          return res.json();
        },
      });
      
      return [allExpense,allExpenseLoading,refetch];
};

export default useExpense;