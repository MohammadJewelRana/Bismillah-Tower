import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useMember = () => {



  const { data: allMember = [], isLoading: allMemberLoading, refetch } = useQuery({
    queryKey: ["expense"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch('https://bismillah-tower-server.vercel.app/contactInfo');
      // console.log(res);
      return res.json();
    },
  });

  return [allMember, allMemberLoading, refetch];
};

export default useMember;