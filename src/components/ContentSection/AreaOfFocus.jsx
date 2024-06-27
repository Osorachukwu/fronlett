import React from "react";

function AreaOfFocus() {
  const cards = [
    { digit: "01", title: "Bussiness Support and incubation", color: "bg-red-400" },
    { digit: "01", title: "Bussiness Support and incubation", color: "bg-pink-400" },
    { digit: "01", title: "Bussiness Support and incubation", color: "bg-green-400" },
    { digit: "01", title: "Bussiness Support and incubation", color: "bg-blue-400" },
    { digit: "01", title: "Bussiness Support and incubation", color: "bg-yellow-400" }
  ];

  return (
    <div className="mb-20">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">
          Our Area of Focus
        </p>
        <p>
          In our quest to help make success available to everyone, we have
          initial strategic <br /> direction to focus on these five (5) key areas at
          the lab
        </p>
      </div>

      <div className="flex px-72">
        {cards.map((card) => (
          <div className={`${card.color} px-5 py-3 space-y-8`}>
            <p>{card.digit}</p>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AreaOfFocus;
