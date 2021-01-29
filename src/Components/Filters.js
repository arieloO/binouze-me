import React from "react";
import MultiSliderTest from "./Slider.js";
import BeerTypeFilter from "./BeerTypeFilter";
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
  hidden,
  isMobile,
}) => {
  return (
    <div className={hidden ? "nav-filters nav-filters-hidden" : "nav-filters"}>
      <div className="nav-filter-title">
        <h3 hidden={isMobile}>filters</h3>
      </div>
      <div id="filters-container">
        <div className={hidden ? "filter-hidden" : "filter"}>
          {" "}
          alcohol by volume
          <MultiSliderTest
            rangeDomain={abvDomain}
            range={abvRange}
            handleRangeChange={(abv) => {
              onChange(abv, ibuRange, srmRange);
            }}
            ticksNumber={6}
          />
        </div>
        <div className={hidden ? "filter-hidden" : "filter"}>
          bitterness - IBU
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
        <div className={hidden ? "filter-hidden" : "filter"}>
          color -SRM
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

        <div className={hidden ? "filter-hidden" : "filter"}>
          <BeerTypeFilter
            key="1"
            handleSwitch={handleNameSearch}
            category="Beer"
            typesArray={beerTypes}
          />
          <BeerTypeFilter
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
      <div
        style={{
          flexGrow: 3,
          height: "600px",
          margin: "auto",
        }}
      ></div>
    </div>
  );
};

export default ListFilters;
