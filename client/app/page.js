"use client";

import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center m-5">
      {/* left */}
      <div className="flex flex-col justify-center items-center my-20">
        <div className="text-center max-w-xl">
          <h2 className="font-bold text-[30px] md:text-[50px]">
            Smart DSS for crowd monitoring
          </h2>
          <h2 className="text-lg md:text-xl mt-5 text-slate-500 px-4">
            Enhance safety and efficiency using AI, real-time data analytics, and
            predictive algorithms.
          </h2>
          <div className="flex gap-4 flex-col mt-5">
            <h3>Sign Up free with Google</h3>
            <div className="flex justify-center gap-2 md:gap-8 px-2">
              <LoginLink>
                <Button className="py-5 px-7 md:p-7 flex gap-4">
                  <Image src={"/google.png"} width={30} height={30}></Image>
                  Sign up with Google
                </Button>
              </LoginLink>
            </div>
            <hr />
            <h2>
              <LoginLink className="text-primary">
                Sign up Free with Email.
              </LoginLink>
              No Credit card required
            </h2>
          </div>
        </div>
      </div>
      {/* right */}
      <Image
        src={"/undraw3.png"}
        width={600}
        height={100}
        className="hidden lg:block"
      ></Image>
    </div>
  );
};

export default page;
