import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useCampaign = () => {

  const { data: campaign = [], isLoading: campaignLoading, refetch: campaignRefetch } = useQuery({
    queryKey: ["campaign"],
    // enabled: loading,
    queryFn: async () => {
      const res = await fetch('https://bismillah-tower-server.vercel.app/campaign');
      // console.log(res);
      return res.json();
    },
  });


  return [campaign, campaignLoading, campaignRefetch];


};

export default useCampaign;