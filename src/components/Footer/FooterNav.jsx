import React from "react";
import sincLogo from "../../assets/SINC LOGO black outline 1.svg";
import whatsapp from '../../assets/Frame 48877.svg'
import accreditate  from '../../assets/Frame 49241.svg'

function FooterNav() {
  const footerMenuenuData = [
    {
      title: "Plateform",
      links: [
        { name: "Kofundme", url: "" },
        { name: "InResidency", url: "" },
        { name: "Service Market", url: "" },
        { name: "Founders School", url: "" },
        { name: "Metty", url: "" },
        { name: "Grantty", url: "" },
        { name: "Boldtel", url: "" },
        { name: "Chekwa", url: "" },
      ],
    },
    {
      title: "Plateform",
      links: [
        { name: "Kofundme", url: "" },
        { name: "InResidency", url: "" },
        { name: "Service Market", url: "" },
        { name: "Founders School", url: "" },
        { name: "Metty", url: "" },
        { name: "Grantty", url: "" },
        { name: "Boldtel", url: "" },
        { name: "Chekwa", url: "" },
      ],
    },
    {
      title: "Plateform",
      links: [
        { name: "Kofundme", url: "" },
        { name: "InResidency", url: "" },
        { name: "Service Market", url: "" },
        { name: "Founders School", url: "" },
        { name: "Metty", url: "" },
        { name: "Grantty", url: "" },
        { name: "Boldtel", url: "" },
        { name: "Chekwa", url: "" },
      ],
    },
    {
      title: "Plateform",
      links: [
        { name: "Kofundme", url: "" },
        { name: "InResidency", url: "" },
        { name: "Service Market", url: "" },
        { name: "Founders School", url: "" },
        { name: "Metty", url: "" },
        { name: "Grantty", url: "" },
        { name: "Boldtel", url: "" },
        { name: "Chekwa", url: "" },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8 justify-between text-lg my-20 border-t-2 border-b-2 py-5">
        {/* the logo col */}
        <div className="pl-10">
          <div>
            <img src={sincLogo} alt="Logo" />
            <div>
              <p>
                SINC Partners is a service <br /> incubation company connecting{" "}
                <br /> experts in product development <br /> and growth
                marketing willing to <br /> offer their services to amazing{" "}
                <br /> startups in exchange <br />
                for minute equity (usually <br /> 0.5% to 2%)
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-white mb-10 w-100% border-r-2">
          {footerMenuenuData.map((menuLink, i) => (
            <div key={i} className="flex flex-col items-center">
              <div>
                <p className="text-sm text-start font-semibold">
                  {menuLink.title}
                </p>
                <div className="flex flex-col gap-2 text-sm font-extralight">
                  {menuLink.links.map((link) => (
                    <a key={link.name} href={link.url}>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* second col */}

      <div className="space-y-10 ml-10">
        <div>
          <p>Location</p>
          <p>Abuja, Nigeria</p>
          <p>Lagos, Nigeria</p>
          <p>Philadelphia, USA</p>
        </div>

        <div className="flex gap-4">
            <img src={accreditate} alt="" />
            <img src={whatsapp} alt="" />
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default FooterNav;
