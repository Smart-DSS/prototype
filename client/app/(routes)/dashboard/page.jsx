import React from "react";
import Navbar from "../../_components/Navbar";
import Footer from "@/app/_components/Footer";
import ShareFeedback from "./_components/ShareFeedback";
import DisclaimerQuote from "./_components/DisclaimerQuote";
import Procedure from "./_components/ProcedureComponent";
import MapComponent from "./_components/MapComponent";
import AlertBox from "./_components/AlertBox";
import ScrollingAlert from "./_components/ScrollingAlert";

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
        <ScrollingAlert />
        {/* Hi {name}, your mobile number {phone} is fetched directly from firebase */}
        <div className="p-4 md:p-20 bg-[#F0F0F0] rounded-t-3xl">
          {/* <div className="justify-between lg:flex"> */}
          <div className="flex justify-center pb-10">
            <AlertBox />
          </div>
          <div>
            <Procedure />
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
