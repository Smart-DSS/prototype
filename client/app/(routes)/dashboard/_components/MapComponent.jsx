import { app } from "@/config/FirebaseConfig";
import { get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";

const MapComponent = () => {
  const db = getDatabase(app);
  const [LatLongPoints, setLatLongPoints] = useState();

  const getLatLong = async () => {
    const dbRef = ref(db, "/data");
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("LatLongPoints: ",data);
          setLatLongPoints(data)
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getLatLong();
  }, []);

  return (
    <div className="bg-black rounded-2xl pr-1 pb-2">
      {/* <Head>
            <title>Leaflet Map</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            </Head> */}
      <iframe
        src="/detected_persons_map.html"
        className="w-full h-[75vh] border border-gray-400 rounded-lg shadow-lg"
        title="Detected Persons Map"
      ></iframe>
      <div>

      </div>
    </div>
  );
};

export default MapComponent;
