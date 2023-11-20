import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useNotice = () => {


  const { data: noticeAll = [], isLoading: allNoticeLoading, refetch: noticeRefetch } = useQuery({
    queryKey: ["notice"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch('https://bismillah-tower-server.vercel.app/notice');
      // console.log(res);
      return res.json();
    },
  });

  return [noticeAll, allNoticeLoading, noticeRefetch];


};

export default useNotice;