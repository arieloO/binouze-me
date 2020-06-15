import React from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

import { SliderRail, Handle, Track, Tick } from "./SliderComponents"; // example render components - source below

const MultiSliderTest = ({
  rangeDomain,
  range,
  handleRangeChange,
  handleRangeUpdate,
  ticksNumber,
  railBackgroundColor,
  noTrack,
  customHandleColor,
  customColorsList,
}) => {
  const sliderStyle = {
    position: "relative",
    width: "100%",
  };
  const domain = rangeDomain;
  const defaultValues = range;

  return (
    <div
      style={{
        margin: "10%",
        height: 20,
        width: "80%",
      }}
    >
      <Slider
        mode={2}
        step={1}
        domain={domain}
        rootStyle={sliderStyle}
        onUpdate={handleRangeUpdate}
        onChange={handleRangeChange}
        values={defaultValues}
        className={"filter-slider"}
      >
        <Rail>
          {({ getRailProps }) => (
            <SliderRail
              railBackgroundColor={railBackgroundColor}
              getRailProps={getRailProps}
            />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => {
                const styleId = handle.id;
                return (
                  <Handle
                    key={handle.id}
                    styleId={styleId}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                    customHandleColor={customHandleColor}
                    customColorsList={customColorsList}
                  />
                );
              })}
            </div>
          )}
        </Handles>
        {noTrack ? null : (
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        )}
        <Ticks count={ticksNumber}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
};

export default MultiSliderTest;
