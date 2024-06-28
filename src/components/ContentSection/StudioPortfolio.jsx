import React from "react";
import { ArrowRight } from "lucide-react";
import frame95 from "../../assets/Frame 95.svg";
import frame96 from "../../assets/Frame 96.svg";
import frame97 from "../../assets/Frame 97.svg";
import frame100 from "../../assets/Frame 100.svg";
import frame110 from "../../assets/Frame 110.svg";
import frame111 from "../../assets/Frame 111.svg";
import frame112 from "../../assets/Frame 112.svg";
import frame113 from "../../assets/Frame 113.svg";

function StudioPortfolio() {
  const studioPortfolioLogos = [
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
    { logo: frame95 },
  ];

  return (
    <div className="mb-20 container px-4 mx-auto">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">Our Studio Portfolio</p>
        <p>Our 2024 Service Incubator Portfolio Companies</p>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-8 lg:gap-y-5 lg:px-64 mb-8">
        {studioPortfolioLogos.map((logo, i) => (
          <div key={i} className="inline">
            <img src={logo.logo} alt="logo" />
          </div>
        ))}
      </div>
      {/* grid grid-cols-2 lg:grid-cols-8 gap-x-2 gap-y-5 px-64 mb-8 */}

      <div>
        <a href="" className="flex gap-1 justify-center items-center underline">
          <p>Beacome A Service Incubator</p>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}

export default StudioPortfolio;
