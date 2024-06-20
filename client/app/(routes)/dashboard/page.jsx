"use client";

import React, { useEffect, useState } from "react";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "@/config/FirebaseConfig";
import Navbar from "../../_components/Navbar";
import Head from "next/head";

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
        Hi {name}, your mobile number {phone} is fetched directly from firebase
        <Head>
          <title>Detected Persons Map</title>
        </Head>
        <div className="flex justify-center p-5">
          <iframe
            src="/detected_persons_map.html"
            className="w-full h-[75vh] border border-gray-300 rounded-lg shadow-lg"
            title="Detected Persons Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
