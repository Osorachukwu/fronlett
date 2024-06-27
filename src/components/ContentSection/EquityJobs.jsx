import React from "react";
import { ArrowRight } from "lucide-react";
import skimake from "../../assets/Frame 1000002471.svg";
import kreeca from "../../assets/Company logo.svg";
import krowdback from "../../assets/Company logo (1).svg";
import wetta from "../../assets/Company logo (2).svg";

function EquityJobs() {
  const equityJobsItems = [
    {
      logo: skimake,
      desc: "This company is a SAAS Startup that builds AI copy generator...",
      title: "Chief Executive Officer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "12%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
    {
      logo: kreeca,
      desc: "This company is a SAAS Startup that builds AI copy generator...",
      title: "Chief Executive Officer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "12%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
    {
      logo: krowdback,
      desc: "This company is a SAAS Startup that builds AI copy generator...",
      title: "Chief Executive Officer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "12%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
    {
      logo: wetta,
      desc: "This company is a SAAS Startup that builds AI copy generator...",
      title: "Chief Executive Officer",
      location: "Abuja, Nigeria",
      industry: "On-demand print",
      equity: "12%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      roleType: "Full-time",
    },
  ];

  return (
    <div className="px-60 mb-20">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">Equity Jobs</p>
        <p>
        See companies and startups offering equity or a mix of cash and equity for very important position in their company.
        </p>
      </div>

      <div className="flex gap-5 mb-8">
        {equityJobsItems.map((item, i) => (
          <div key={i} className="bg-white p-4 space-y-2 rounded-xl">
            <img src={item.logo} alt="" />
            <p className="text-sm font-semibold">{item.desc}</p>
            <p className="font-bold">{item.title}</p>

            <div className="space-y-3">
              <div className="flex justify-between">
                <p>
                  LOCATION <br />
                  <span className="text-sm font-semibold">{item.location}</span>
                </p>
                <p className="text-end">
                  INDUSTRY <br />
                  <span className="text-sm font-semibold">{item.industry}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  EQUITY <br />
                  <span className="text-sm font-semibold">{item.equity}</span>
                </p>
                <p className="text-end">
                  STIPEN <br />
                  <span className="text-sm font-semibold">{item.stipend}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  DEADLINE <br />
                  <span className="text-sm font-semibold">{item.deadline}</span>
                </p>
                <p className="text-end">
                  ROLE TYPE <br />
                  <span className="text-sm font-semibold">{item.roleType}</span>
                </p>
              </div>

              <div className="pt-8 pb-3">
                <a
                  href=""
                  className="bg-black rounded-full text-white px-6 py-3"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <a href="" className="flex gap-1 justify-center items-center">
          <p className="border-b border-black">See More Equity Jobs</p>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}

export default EquityJobs;
