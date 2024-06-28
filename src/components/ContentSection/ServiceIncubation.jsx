import React from "react";
import { ArrowRight } from "lucide-react";
import triangleIcon from "../../assets/Polygon 3 (2).svg";
import diamondIcon from "../../assets/Polygon 3.svg";
import pentagonIcon from "../../assets/Polygon 3 (1).svg";

function ServiceIncubation() {
  const cards = [
    {
      icon: triangleIcon,
      description:
        "Most early-stage companies and pre-product startups cannot afford professional services especially those who dont have family and  network that can support",
    },
    {
      icon: diamondIcon,
      description:
        "Most early-stage companies and pre-product startups cannot afford professional services especially those who dont have family and friends network that can support",
    },
    {
      icon: pentagonIcon,
      description:
        "Most early-stage companies and pre-product startups cannot afford professional services especially those who dont have family and friends &#39; network that can support",
    },
  ];

  const caseStudy = [
    { title: "Service Incubetor Equity" },
    { title: "Service Incubetor Equity" },
    { title: "Service Incubetor Equity" },
  ];

  return (
    <div className="mb-20 container px-4 mx-auto">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">Our Service Incubation Model</p>
        <p>
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to <br /> offer their services to startups
          in return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see <br /> your share grow
          as much as 1000% in 12 – 24 months as been first to invest.
        </p>
      </div>

      <div className="lg:px-72">
        {/* Hypothesis */}
        <div className="py-8">
          <p className="font-semibold text-xl">
            Hypothesis <br />
            <span className="text-sm font-normal">
              Just a few reasons we know its time for this model in the
              ecosystem
            </span>
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-5 lg:px-72">
        {cards.map((card, i) => (
          <div key={i} className="bg-white px-4 py-8 rounded-xl space-y-4">
            <div>
              <img src={card.icon} alt="Polygons" />
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Case study */}
      <div className="lg:px-72">
        <div className="py-8">
          <p className="font-semibold text-xl">
            Case Study <br />{" "}
            <span className="text-sm font-normal">
              See what Service Incubators get, the maths behind Service Equity
              (SEEQ) and what the value of your share equity can be over time
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 mb-8">
          {caseStudy.map((cases, i) => (
            <div key={i} className="bg-white py-1 px-6 rounded-full border-2">
              <p>{cases.title}</p>
            </div>
          ))}
        </div>

        <div>
          <a href="" className="flex gap-1 justify-center items-center underline">
            <p>Beacome A Service Incubator</p>
            <ArrowRight size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceIncubation;
