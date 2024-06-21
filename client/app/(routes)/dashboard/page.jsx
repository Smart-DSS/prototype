"use client";

import React, { useEffect, useState } from "react";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "@/config/FirebaseConfig";
import Navbar from "../../_components/Navbar";
import Head from "next/head";
import Footer from "@/app/_components/Footer";

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
            <h2 className="flex flex-col justify-center font-mono font-extrabold text-2xl">No Alerts At The Moment</h2>
          </div>
        </div>
        {/* Hi {name}, your mobile number {phone} is fetched directly from firebase */}
        {/* <Head>
          <title>Detected Persons Map</title>border-top: 20px solid #FF000080
        </Head> */}
        <div className="justify-between p-20 lg:flex bg-[#F0F0F0] rounded-t-3xl">
          <iframe
            src="/detected_persons_map.html"
            className="w-full lg:w-[50%] h-[75vh] border border-gray-400 rounded-lg shadow-lg"
            title="Detected Persons Map"
          ></iframe>
          <div>hello</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
