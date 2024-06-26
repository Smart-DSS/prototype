import React from "react";
import Navbar from "../../_components/Navbar";
import Footer from "@/app/_components/Footer";
import ShareFeedback from "./_components/ShareFeedback";
import DisclaimerQuote from "./_components/DisclaimerQuote";
import Procedure from "./_components/ProcedureComponent";
import MapComponent from "./_components/MapComponent";

// const MapComponent = dynamic(() => import("./_components/MapComponent"), {
//   ssr: false,
// });

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center py-8">
          <div className="flex justify-center h-[200px] w-[75%] bg-[#FF00001A] border-t-[10px] border-[#FF000080] rounded-3xl animate-fadeInUp">
            <h2 className="flex flex-col justify-center font-mono font-extrabold text-2xl">
              No Alerts At The Moment
            </h2>
          </div>
        </div>
        {/* Hi {name}, your mobile number {phone} is fetched directly from firebase */}
        <div className=" p-20 bg-[#F0F0F0] rounded-t-3xl">
          {/* <div className="justify-between lg:flex"> */}
          <div className="grid grid-col-1 md:grid-cols-2 gap-4">
            <MapComponent/>
            <div className="flex flex-col gap-4">
              <Procedure count={1}/>
              <Procedure count={2}/>
              <Procedure count={3}/>
            </div>
          </div>
          <div className="pt-36 flex justify-center">
            <ShareFeedback />
          </div>
        </div>
      </div>
      <DisclaimerQuote />
      <Footer />
    </div>
  );
};

export default page;
