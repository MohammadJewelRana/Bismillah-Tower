import React from "react";
import SectionTitle from "../../../Shared/SectionTitle";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

import useGallery from "../../../hooks/useGallery";

const GalleryHome = () => {
  const [galleryImage, galleryLoading, refetch] = useGallery();
  // console.log(galleryImage);
  // let imageArray=[];
  // galleryImage.forEach(element => {
  //     // console.log(element);
  //     const data={}
  //     imageArray.push(element.image)
  // });
  // console.log(imageArray);

  return (
    <div className="my-16">
      <SectionTitle
        heading={"Photo Gallery"}
        subHeading={"   Club Activities"}
      ></SectionTitle>

      <Marquee>
        {galleryImage.map((data) => (
          <>
            <div className="flex gap-8">
              <img src={data.image} className="h-[250px] w-full mr-12" alt="" />
            </div>
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default GalleryHome;
