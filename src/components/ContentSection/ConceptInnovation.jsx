import React from "react";

function ConceptInnovation() {
  const cards = [
    {
      title: "Service Incubetor",
      description:
        "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
    },
    {
      title: "Service Incubetor",
      description:
        "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
    },
    {
      title: "Service Incubetor",
      description:
        "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
    }
  ];

  return (
    <div className="mb-20 container px-4 mx-auto">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">Our Concept Innovations</p>
        <p>
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and <br />{" "}
          ultimately help democratize success;
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:px-72 text-center">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-6 space-y-3 rounded-xl">
            <p className="font-bold">{card.title}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConceptInnovation;
