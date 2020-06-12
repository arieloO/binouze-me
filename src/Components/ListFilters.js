import React from "react";

import MultiSliderTest from "./MultiSliderTest.js";
import BeerNamesSearches from "./BeerNamesSearches";
import {
  SRMColorRadient,
  SRMcolor,
  SRMHandlerButtonStyle,
} from "./SRMcolors.js";

const ListFilters = ({
  abvDomain,
  abvRange,
  handleAbvRangeChange,
  ibuDomain,
  ibuRange,
  handleIbuRangeChange,
  srmDomain,
  srmRange,
  handleSrmRangeChange,
  handleNameSearch,
  // abvHigher,
  // abvLower,
  // handleHigherSlider,
  // handleLowerSlider,
}) => {
  const hexForSrm = Math.round(srmRange[1] / 15);
  console.log("hex for srm", hexForSrm);
  return (
    <div className="nav-filters">
      <BeerNamesSearches handleSwitch={handleNameSearch} />

      <div className="filter ">
        {" "}
        Alcohol by volume :
        <MultiSliderTest
          rangeDomain={abvDomain}
          range={abvRange}
          handleRangeChange={handleAbvRangeChange}
          ticksNumber={8}
        />
      </div>
      <div className="filter ">
        {" "}
        Bitterness (IBU) :
        <MultiSliderTest
          rangeDomain={ibuDomain}
          range={ibuRange}
          handleRangeChange={handleIbuRangeChange}
          ticksNumber={6}
          // sliderBackgroundColor={}
        />
      </div>
      <div className="filter ">
        {" "}
        Color (SRM) :
        <MultiSliderTest
          rangeDomain={srmDomain}
          range={srmRange}
          handleRangeChange={handleSrmRangeChange}
          ticksNumber={6}
          railBackgroundColor={SRMColorRadient}
          noTrack={true}
          handleButtonStyle={SRMHandlerButtonStyle}
        />
      </div>
    </div>
  );
};

export default ListFilters;
