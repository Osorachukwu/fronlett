import React from "react";
import { Check } from "lucide-react";

function InvestorsNetwork() {

  // const microAngleInvestorItems = [
  //   {title: "Deal 1", itemOne: "", itemTwo: "", itemThree: "", itemFour: ""},
    
  // ]
  return (
    <div className="container px-4 mx-auto lg:px-72 mb-20">
      <div className="text-center space-y-3 mb-10">
        <p className="font-bold text-3xl">SINC Investors Network</p>
        <p>
          Our deals are structured not just to take in investments but to
          onboard owners passionate about our solutions. <br /> Our portfolio
          companies are valued at $50k at start, with these low valuation, you
          are guaranteed at least 2x-5x, usually been <br /> the first to
          invest.
        </p>
        <p>
          <span className="font-semibold">Disclaimer:</span> These deal flows is
          a statement of our projections and may differ from stage to stage and
          from venture to <br /> venture and the guarantee is for deal 1,
          usually the first to invest
        </p>
      </div>

      <div>
        <p>
          <span className="font-semibold">
            Micro Angel Investors & Service incubators
          </span>{" "}
          (Invest from $500 & above)
        </p>

        {/* <div>
          👇first-row 
          <div className="flex border-t-2 border-b-2 divide-x-2 gap-5 text-sm">
            <div className="p-5">
              <p className="font-bold">Deal 1</p>
              <div className="flex items-center gap-1">
                <Check size={15}/>
                <p>
                  Idea Stage: <span className="font-semibold">$5 for 5% Equity</span>
                </p>
              </div>
              <div className="flex gap-1">
                <Check size={15} />
                <p>
                  Idea Stage: <span>$5 for 5% Equity</span>
                </p>
              </div>
              <div className="flex gap-1">
                <Check size={15} />
                <p>
                  Idea Stage: <span>$5 for 5% Equity</span>
                </p>
              </div>
              <div className="flex gap-1">
                <Check size={15} />
                <p>
                  Idea Stage: <span>$5 for 5% Equity</span>
                </p>
              </div>
            </div>
           
           
            
          </div>
          👇second-row 
        </div> */}
      </div>
    </div>
  );
}

export default InvestorsNetwork;
