import React from 'react';

const DashboardComponentTitle = ({title}) => {
    return (
        <div className="card w-full  bg-blue-950 text-white  border-2">
        <div className=" py-4 text-center -p-12">
           {title}
        </div>
      </div>
    );
};

export default DashboardComponentTitle;