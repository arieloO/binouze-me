import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as FilterIcon } from "../media/filter-icon.svg";
import MultiSliderTest from "./Slider.js";
import BeerTypeFilter from "./BeerTypeFilter";
import { SRMColorRadient, SRMcolor } from "./SrmStyles.js";
import { yeastTypes, beerTypes } from "./FilterCategories";
import { useWindowWidth } from "../Hooks/LayoutHooks.js";
// import DeviceContext from "../App.js";

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
  const windowWidth = useWindowWidth();

  const [hidden, setHidden] = useState(windowWidth < 640);

  useEffect(() => {
    setHidden(windowWidth < 640);
  }, [windowWidth]);

  return (
    <div className={hidden ? "nav-filters-hidden" : "nav-filters"}>
      <div className="nav-filter-title" onClick={() => setHidden(!hidden)}>
        <h3 hidden={hidden}>Filters :</h3>
        <FilterIcon id={hidden ? "filter-icon-hidden" : "filter-icon"} />
      </div>
      <div id="filters-container">
        <div className={hidden ? "filter-hidden" : "filter"}>
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
        <div className={hidden ? "filter-hidden" : "filter"}>
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
        <div className={hidden ? "filter-hidden" : "filter"}>
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
    </div>
  );
};

export default ListFilters;
