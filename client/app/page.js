"use client";

import React, { useEffect, useState } from "react";
import { get, getDatabase, onValue, ref } from "firebase/database";
import { app } from "@/config/FirebaseConfig";

const page = () => {
  const db = getDatabase(app);
  const [message, setMessage] = useState("loading");
  const [name, setName] = useState()
  const [phone, setPhone] = useState()

  const getEventDetails = async () => {
    const dbRef = ref(db, "/");
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data=snapshot.val();
          console.log(data)
          setName(data.name)
          setPhone(data.phone)
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
      .then((data) => setMessage(data.message));
  }, []);
  return (
  <div>
    <div>

    {message}
    </div>
    <div>
      Hi {name}, your mobile number is {phone}
    </div>
      
  </div>
  )
};

export default page;
