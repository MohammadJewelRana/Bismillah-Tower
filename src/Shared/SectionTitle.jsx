import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
 
    return (
        <div className='  my-8 mx-auto text-center'>
     <h3 className='text-4xl uppercase '>{heading}</h3>
        <p className='  mb-2 text-[12px] mt-3 text-white'>---  {subHeading} ---</p>
     
            
        </div>
    );
};

export default SectionTitle;