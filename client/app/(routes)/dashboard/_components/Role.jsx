import React from "react";

const Role = ({ stage }) => {
  let alertMessage = "No Alerts At The Moment";
  let backgroundColor = "#FF00001A";
  let borderColor = "#FF000080";

  switch (stage) {
    case 1:
      alertMessage = "Stage 1 Alert";
      backgroundColor = "#00FF001A"; // Green
      borderColor = "#00FF0080";
      break;
    case 2:
      alertMessage = "Stage 2 Alert";
      backgroundColor = "#FFA5001A"; // Orange
      borderColor = "#FFA50080";
      break;
    case 3:
      alertMessage = "Stage 3 Alert";
      backgroundColor = "#FF00001A"; // Red
      borderColor = "#FF000080";
      break;
    default:
      // Stage 0 or any other stage not explicitly defined
      break;
  }

  return (
    <div className="flex flex-col bg-white w-[90%] lg:w-[70%] mx-auto justify-center shadow-lg h-auto rounded-xl">
      <div className="flex flex-row w-full justify-between px-4 py-4">
        This section is to decide what's the role the person has to play in this situation in stage 
        {stage}
      </div>
    </div>
  );
};

export default Role;
