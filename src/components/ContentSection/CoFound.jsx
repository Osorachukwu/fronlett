import React from "react";
import { ArrowRight } from "lucide-react";

function CoFound() {
  const coFounItems = [
    {
      digit: "1",
      title: "We Ideate",
      description:
        "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market."
    },
    {
      digit: "1",
      title: "We Ideate",
      description:
        "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market."
    },
    {
      digit: "1",
      title: "We Ideate",
      description:
        "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market."
    },
  ];
  return (
    <div className="mb-20 container px-4 mx-auto">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">Co-Found With Us</p>
        <p>
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed{" "}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:px-72 mb-8">
        {coFounItems.map((item, i) => (
          <div key={i} className="bg-white px-4 py-8 rounded-xl space-y-4">
            <p className="bg-red-600 h-10 w-10 rounded-full flex justify-center items-center">
              {item.digit}
            </p>
            <p className="font-semibold text-lg">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div>
        <a href="" className="flex gap-1 justify-center items-center underline">
          <p>Beacome A Service Incubator</p>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}

export default CoFound;
