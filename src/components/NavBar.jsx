import React from "react";
import sincLogo from "../assets/SINC LOGO black outline 1.svg";

function NavBar() {
  return (
    <div>
      <nav className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10">
          {/* Header Logo */}
          <img src={sincLogo} alt="Sinc Logo" />

          {/* Header Navigation */}
          <div className="space-x-3">
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
        <div className="space-x-5">
          <button className="bg-pink-500 px-5 py-3 rounded-full">SINC With Us</button>
          <button className="bg-pink-500 px-5 py-3 rounded-full">Apply to SIP 1.0</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
