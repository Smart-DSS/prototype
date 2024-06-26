"use client"

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "@/config/FirebaseConfig";

export default function MapComponent() {
  const mapRef = useRef(null);

  const db = getDatabase(app);
  const [latLongPoints, setLatLongPoints] = useState([
    [11.32261876002703, 75.93654139343259, 0.1],
  ]);

  const getLatLong = () => {
    const dbRef = ref(db, "/data");
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          console.log("latLongPoints: ", data);
          setLatLongPoints(data); // No idea why this usestate was not working
        } else {
          console.log("No data available");
        }
        console.log("useeffect", latLongPoints);
        if (!mapRef.current) {
          mapRef.current = L.map("map", {
            center: [11.322670519283392, 75.9365477879981],
            crs: L.CRS.EPSG3857,
            zoom: 30,
            zoomControl: true,
            preferCanvas: false,
          });

          // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          //   attribution:
          //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          // }).addTo(mapRef.current);

          var tile_layer = L.tileLayer(
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
              attribution:
                '\u0026copy; \u003ca href="https://www.openstreetmap.org/copyright"\u003eOpenStreetMap\u003c/a\u003e contributors',
              detectRetina: false,
              maxNativeZoom: 19,
              maxZoom: 19,
              minZoom: 0,
              noWrap: false,
              opacity: 1,
              subdomains: "abc",
              tms: false,
            }
          );

          tile_layer.addTo(mapRef.current);

          // L.heatLayer(points).addTo(mapRef.current);
          console.log("latLongPoints before heatmap:", latLongPoints);
          var heat_map = L.heatLayer(data, {
            blur: 15,
            maxZoom: 18,
            minOpacity: 0.5,
            radius: 25,
          }).addTo(mapRef.current);

          heat_map.addTo(mapRef.current);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   getLatLong();
  //   console.log("useeffect",latLongPoints)
  // }, []);

  useEffect(() => {
    getLatLong();
  }, []);

  return (
    <div className="bg-black rounded-2xl pr-1 pb-2">
      <div
        id="map"
        className="w-full h-[75vh] border border-gray-400 rounded-lg shadow-lg"
      ></div>
    </div>
  );
}
