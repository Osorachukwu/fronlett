import React, { useState } from "react";
import sincLogo from "../assets/SINC LOGO black outline 1.svg";
import { Menu, X } from "lucide-react";
import Hambouger from "./Hambouger";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="relative py-5 container px-4 mx-auto">
      <nav className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10">
          {/* Header Logo */}
          <img src={sincLogo} alt="Sinc Logo" className="w-20 lg:w-32" />

          {/* Header Navigation */}
          <div className="space-x-3 hidden lg:block">
            <a href="">About</a>
            <a href="">SIP</a>
            <a href="">Studio</a>
            <a href="">SEEQ</a>
            <a href="">Platforms</a>
            <a href="">Initiatives</a>
            <a href="">More</a>
          </div>
        </div>

        {/* Header Buttons */}
        <div className="space-x-5 hidden lg:block">
          <button className="bg-pink-500 px-5 py-3 rounded-full">
            SINC With Us
          </button>
          <button className="bg-pink-500 px-5 py-3 rounded-full">
            Apply to SIP 1.0
          </button>
        </div>


        <div onClick={handleToggle} className="lg:hidden">
          {toggle ? <X /> : <Menu />}

          {toggle ? (
            <div className="absolute top-0 left-0 bg-slate-600 text-white h-[100vh] w-[80vw] py-5">
              <nav className="flex flex-col gap-5 pl-5">
                <a href="">About</a>
                <a href="">SIP</a>
                <a href="">Studio</a>
                <a href="">SEEQ</a>
                <a href="">Platforms</a>
                <a href="">Initiatives</a>
                <a href="">More</a>
              </nav>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
