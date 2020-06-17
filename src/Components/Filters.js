import React from "react";

import MultiSliderTest from "./Slider.js";
import BeerNamesSearches from "./BeerNamesSearches";
import { SRMColorRadient, SRMcolor } from "./SrmStyles.js";

// const getHexForSRMs = (valuesArray) => {
//   return [
//     `${SRMcolor[Math.round(valuesArray[0] / 15)]}`,
//     `${SRMcolor[Math.round(valuesArray[1] / 15)]}`,
//     `${SRMcolor[Math.round((valuesArray[0] / 15 + valuesArray[1] / 15) / 2)]}`,
//     `${SRMcolor[Math.round((valuesArray[0] * 2 + valuesArray[1]) / 15 / 3)]}`,
//   ];
// };
// const hexForSRMs = getHexForSRMs(srmRange);

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
          handleRangeUpdate={handleAbvRangeChange}
          ticksNumber={6}
        />
      </div>
      <div className="filter ">
        {" "}
        Bitterness (IBU) :
        <MultiSliderTest
          rangeDomain={ibuDomain}
          range={ibuRange}
          handleRangeChange={handleIbuRangeChange}
          handleRangeUpdate={handleIbuRangeChange}
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
          customHandleColor={true}
          customColorsList={SRMcolor}
        />
        <div>
          {/* <div
            id="brown"
            style={{
              height: 100,
              width: "100%",
              background: `linear-gradient(100deg, ${hexForSRMs[0]},${hexForSRMs[3]}, ${hexForSRMs[2]}, ${hexForSRMs[1]})`,
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default ListFilters;
