import React, { Fragment } from "react";
import PropTypes from "prop-types";

// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 42,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer",
  // border: '1px solid white',
};

const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 14,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none",
  backgroundColor: "#F2BB05",
};

export default function SliderRail({ getRailProps, railBackgroundColor }) {
  return (
    <Fragment>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railBackgroundColor || railInnerStyle} />
    </Fragment>
  );
}

SliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired,
};
