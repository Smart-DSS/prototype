import React from "react";
import Navbar from "../../_components/Navbar";
import Footer from "@/app/_components/Footer";
import ShareFeedback from "./_components/ShareFeedback";
import DisclaimerQuote from "./_components/DisclaimerQuote";
import Procedure from "./_components/ProcedureComponent";
import MapComponent from "./_components/MapComponent";
import AlertBox from "./_components/AlertBox";

// const MapComponent = dynamic(() => import("./_components/MapComponent"), {
//   ssr: false,
// });

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center py-8">
          <MapComponent />
        </div>
        {/* Hi {name}, your mobile number {phone} is fetched directly from firebase */}
        <div className="p-4 md:p-20 bg-[#F0F0F0] rounded-t-3xl">
          {/* <div className="justify-between lg:flex"> */}
          <div className="flex justify-center pb-10">
            <AlertBox />
          </div>
          <div className="grid grid-col-1 md:grid-cols-3 gap-4">
            {/* <div className="flex flex-col gap-4"> */}
            <Procedure count={1} />
            <Procedure count={2} />
            <Procedure count={3} />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <ShareFeedback />
      </div>
      <DisclaimerQuote />
      <Footer />
    </div>
  );
};

export default page;
