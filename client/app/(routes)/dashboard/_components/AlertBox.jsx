import React from "react";

const AlertBox = () => {
  return (
    <div className="flex justify-center h-[200px] w-[90%] bg-[#FF00001A] border-t-[10px] border-[#FF000080] rounded-3xl animate-fadeInUp">
      <div className="flex flex-col justify-center font-mono font-extrabold text-md md:text-2xl">
        No Alerts At The Moment
      </div>
    </div>
  );
};

export default AlertBox;
