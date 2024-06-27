import React from "react";
import FooterNav from "./Footer/FooterNav";
import gasus from "../assets/GASUS white SVG-01 1.svg";
import { Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="bg-black px-52 py-10 text-white">
      {/* first row */}
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="font-bold text-2xl">Newsletter</p>

          <p>
            Get the latest about SINC Partners, our startup Incubator program,
            Portfolio <br /> company offerings - straight into your inbox.
          </p>
        </div>

        <form
          action=""
          className="rounded-full h-11 overflow-hidden flex justify-between w-[500px] bg-black"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-black h-full px-3 text-white outline-none"
          />
          <input
            className="bg-white text-black h-full rounded-full text-center"
            value="Subscribe"
          />
        </form>
      </div>

      {/* second row */}
      <FooterNav />

      <div className="text-sm space-y-9">
        <div className="flex justify-between">
          <p>
            Guaranteed 2x on your service or cash investment, usually been the
            first to invest. Get in early and SINC your guaranty!
          </p>

          <div className="flex">
            <img src={gasus} alt="" />
            <p>
              We are a business built on the <br /> foundation of Christian
              values and belief
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p>2023 SINC Partners Ltd. All rights reserved</p>
          </div>

          <div className="space-x-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms of service</a>
            <a href="">Security</a>
          </div>

          <div className="flex gap-3">
            <Linkedin />
            <Linkedin />
            <Linkedin />
            <Linkedin />
            <Linkedin />
          </div>
        </div>
      </div>

      {/* <div>
        <div>
         

          
        </div>

        

        <div>

        </div>
      </div> */}
    </div>
  );
}

export default Footer;
