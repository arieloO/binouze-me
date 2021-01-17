import React from "react";

import MultiSliderTest from "./Slider.js";
import BeerNamesSearches from "./BeerNamesSearches";
import { SRMColorRadient, SRMcolor } from "./SrmStyles.js";
import { yeastTypes, beerTypes } from "./FilterCategories";

const ListFilters = ({
  abvDomain,
  abvRange,
  ibuDomain,
  ibuRange,
  srmDomain,
  srmRange,
  onChange,
  handleNameSearch,
}) => {
  return (
    <div className="nav-filters">
      <div className="filter ">
        {" "}
        Alcohol by volume :
        <MultiSliderTest
          rangeDomain={abvDomain}
          range={abvRange}
          handleRangeChange={(abv) => {
            onChange(abv, ibuRange, srmRange);
          }}
          ticksNumber={6}
        />
      </div>
      <div className="filter ">
        Bitterness (IBU) :
        <MultiSliderTest
          rangeDomain={ibuDomain}
          range={ibuRange}
          handleRangeChange={(ibu) => {
            onChange(abvRange, ibu, srmRange);
          }}
          ticksNumber={6}
          // sliderBackgroundColor={}
        />
      </div>
      <div className="filter ">
        Color (SRM) :
        <MultiSliderTest
          rangeDomain={srmDomain}
          range={srmRange}
          handleRangeChange={(srm) => {
            onChange(abvRange, ibuRange, srm);
          }}
          ticksNumber={6}
          railBackgroundColor={SRMColorRadient}
          noTrack={true}
          customHandleColor={true}
          customColorsList={SRMcolor}
        />
      </div>

      <div className="filter">
        <BeerNamesSearches
          key="1"
          handleSwitch={handleNameSearch}
          category="Beer"
          typesArray={beerTypes}
        />
        <BeerNamesSearches
          key="2"
          handleSwitch={handleNameSearch}
          category="Yeast"
          typesArray={yeastTypes}
        />
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
  );
};

export default ListFilters;
