"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DashboardHeader from "./DashboardHeader";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "dashboard",
    },
    {
      id: 2,
      link: "data",
    },
  ];

  // Function to hide nav on resize
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-full h-screen px-4 text-white bg-cover bg-center rounded-b-xl nav animate-fadeInDown" // h-[450px] fixed md:sticky
      style={{
        backgroundImage: "url('/background.svg')",
      }}
    >
      {/* addign fixed caused problem */}
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={"/logo.svg"}
            width={100}
            height={100}
            alt="logo"
            className="w-[100px] md:w-[500px] pt-[70px] pl-[100px]"
            // className="w-[50px] md:w-[60px] p-1"
          />
        </div>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize text-xl font-semibold font-mono text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline flex flex-col justify-center"
              >
                <Link href={link}>{link}</Link>
              </li>
            ))}
            <li
              key={"dashboardHeader"}
              className="nav-links cursor-pointer flex flex-col justify-center"
            >
              <DashboardHeader />
            </li>
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Image
        src={"/nitc.png"}
        width={200}
        height={100}
        alt="logo"
        className="w-[25%] md:hidden justify-center items-center mx-auto my-[50px] "
      />
      <div className="md:mt-[180px] flex flex-col justify-center md:px-20 mx-10 md:flex-row-reverse md:justify-between ">
        <div
          className="flex flex-col justify-center md:w-[40%] md:items-center rounded-3xl bg-[#FFFFFF]"
          style={{ boxShadow: "4px 4px 50px 0px #00000080 inset" }}
        >
          <Image
            src={"/GOI.svg"}
            width={300}
            height={150}
            alt="logo"
            className="p-5 flex justify-center items-center mx-auto "
            // className="w-[50px] md:w-[60px] p-1"
          />
        </div>
        <div className="flex md:justify-start items-center ">
          <div>
            <h2 className="text-sm font-mono md:w-[60%] text-center md:text-left md:text-xl mt-[60px] text-slate-300 ">
              Enhance safety and efficiency using AI, real-time data analytics,
              and predictive algorithms.
            </h2>
          </div>
          {/* <div> */}
          {/* <div className="flex felx-col justify-center w-[400px] h-[200px] rounded-3xl bg-[#FFFFFF] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
