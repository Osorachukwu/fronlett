import React from "react";
import NetworkOfBuilders from "./ContentSection/NetworkOfBuilders";
import AreaOfFocus from "./ContentSection/AreaOfFocus";
import ConceptInnovation from "./ContentSection/ConceptInnovation";
import ServiceIncubation from "./ContentSection/ServiceIncubation";
import StudioPortfolio from "./ContentSection/StudioPortfolio";
import CoFound from "./ContentSection/CoFound";
import InvestorsNetwork from "./ContentSection/InvestorsNetwork";
import EquityJobs from "./ContentSection/EquityJobs";
import BlogAndResources from "./ContentSection/BlogAndResources";

function ContentSection() {
  return (
    <div className="bg-[#F4F4F4] py-10">
        <NetworkOfBuilders />
        <AreaOfFocus />
        <ConceptInnovation />
        <ServiceIncubation />
        <StudioPortfolio />
        <CoFound />
        <InvestorsNetwork />
        <EquityJobs />
        <BlogAndResources />
      
    </div>
  );
}

export default ContentSection;
