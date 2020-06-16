import React, { Fragment } from "react";
import PropTypes from "prop-types";

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export default function Track({ source, target, getTrackProps, disabled }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 14,
        zIndex: 1,

        backgroundColor: disabled ? "#999" : "#f2bb05",
        borderRadius: 7,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  );
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Track.defaultProps = {
  disabled: false,
};
