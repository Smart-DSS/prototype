"use client";

import React, { useEffect, useState } from "react";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "@/config/FirebaseConfig";
import Navbar from "../../_components/Navbar";
import Footer from "@/app/_components/Footer";
import ShareFeedback from "./_components/ShareFeedback";
import DisclaimerQuote from "./_components/DisclaimerQuote";
import Head from "next/head";
import dynamic from "next/dynamic";
import MapComponent from "./_components/MapComponent";
import Procedure from "./_components/ProcedureComponent";

// const MapComponent = dynamic(() => import("./_components/MapComponent"), {
//   ssr: false,
// });

const page = () => {
  const db = getDatabase(app);
  // const [message, setMessage] = useState("loading");

  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const getEventDetails = async () => {
    const dbRef = ref(db, "/");
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log(data);
          setName(data.name);
          setPhone(data.phone);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getEventDetails();
  }, []);

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
            <MapComponent />
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
