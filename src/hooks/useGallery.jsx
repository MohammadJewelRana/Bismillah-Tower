import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useGallery = () => {

  const { data: galleryImage = [], isLoading: galleryLoading, refetch } = useQuery({
    queryKey: ["gallery"],
    // enabled: loading,

    queryFn: async () => {
      const res = await fetch('https://bismillah-tower-server.vercel.app/gallery');
      // console.log(res);
      return res.json();
    },
  });

  return [galleryImage, galleryLoading, refetch];

};

export default useGallery;