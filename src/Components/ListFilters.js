import React from "react";

import MultiSliderTest from "./MultiSliderTest.js";
import BeerNamesSearches from "./BeerNamesSearches";
import {
  SRMColorRadient,
  SRMHandlerButtonStyle,
  SRMcolor,
} from "./SrmStyles.js";

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
}) => {
  const hexForSrm0 = SRMcolor[Math.round(srmRange[0] / 15)];
  const hexForSrm1 = SRMcolor[Math.round(srmRange[1] / 15)];
  const hexForSrmMiddle =
    SRMcolor[Math.round((srmRange[0] / 15 + srmRange[1] / 15) / 2)];

  console.log("hex for srm", hexForSrm0, hexForSrmMiddle, hexForSrm1);
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
        <div>
          {/* <div
            style={{
              height: 30,
              width: "50%",
              backgroundColor: SRMcolor[hexForSrm0],
            }}
          ></div> */}
          <div
            id="brown"
            style={{
              height: 100,
              width: "100%",
              background: `linear-gradient(90deg, ${hexForSrm0}, ${hexForSrmMiddle}, ${hexForSrm1})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ListFilters;
