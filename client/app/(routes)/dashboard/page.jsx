"use client";

import React, { useEffect, useState } from "react";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "@/config/FirebaseConfig";
import DataPage from "@/app/_components/DataPage";
import DashboardHeader from "./_components/DashboardHeader";
import Navbar from "./_components/Navbar";

const page = () => {
  const db = getDatabase(app);
  // const [message, setMessage] = useState("loading");
  const [jsonData, setJsonData] = useState();
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
    fetch("http://localhost:8080//api/home")
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  }, []);
  return (
    <div>
      <Navbar/>
      <div>
        Hi {name}, your mobile number {phone} is fetched directly from firebase
        <DataPage data={jsonData} />
      </div>
    </div>
  );
};

export default page;
