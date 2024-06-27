import React from "react";
import { ArrowRight } from "lucide-react";

function NetworkOfBuilders() {
  const cards = [
    {
      title: "Work with Service Incubators to expedite your time-to-market",
      description:
        "Collaborate with our meticulously chosen service partners, each witha vested interest, ensuring a shared commitment to success in the game of venture building.",
      detailDescription:
        "For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.",

      linkUrl: "",
    },
    {
      title: "Work with Service Incubators to expedite your time-to-market",
      description:
        "Collaborate with our meticulously chosen service partners, each witha vested interest, ensuring a shared commitment to success in the game of venture building.",
      detailDescription:
        "For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.",

      linkUrl: "",
    },
  ];

  return (
    <div className="mb-20">
      {/* Note */}
      <div className="bg-white w-[600px] rounded-xl mx-auto text-center px-10 py-6 space-y-5 font-semibold mb-20">
        <p>
          "Nigeria and Africa has a massive network effect that have not be
          fully utilized. With Nigerians/Africans in every country and territory
          of the world, we can scale an African business to 100+ countries in
          few weeks"
        </p>

        <div className="space-y-2 text-sm">
          <p>Daniel Izeghs Oratokhai</p>
          <p className="font-normal">Managing Partner at SINC Partners Ltd</p>
        </div>
      </div>

      {/* Network of Builders */}
      <div>
        <p className="text-center font-bold text-3xl mb-10">
          Network of builders helping  <br />  startup scale
        </p>

        {/* Carsd  */}
        <div className="flex gap-5 px-72">
          {cards.map((card) => (
            <div className="flex-1 bg-white p-4 rounded-lg space-y-4">
              <div className="space-y-1 text-sm">
                <p className="font-bold text-base ">{card.title}</p>
                <p>
                  {card.description}
                </p>
                <p className="font-semibold">
                    {card.detailDescription}
                  </p>
              </div>

              <div>
                <a href={card.linkUrl} className="flex items-center gap-1 font-semibold underline">
                  <p>Leran more</p>
                  <ArrowRight size={15}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NetworkOfBuilders;
