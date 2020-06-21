import React, { Fragment } from "react";
import PropTypes from "prop-types";

// *******************************************************
// HANDLE COMPONENT
// *******************************************************

const customHandleGradientStyle = (value) => {
  return {
    width: 14,
    height: 34,
    borderRadius: "20%",
    //boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.3)",
    boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.6)",
    backgroundColor: value,
    //borderColor: b,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderStyle: "solid",
    borderWidth: "1px",
  };
};
const defaultHandleStyle = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  width: 2,
  height: 18,
  borderRadius: "20%",
  border: "2px solid #042A2B",
  boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.3)",
};

export default function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  disabled,
  customHandleColor,
  customColorsList,
  getHandleProps,
}) {
  return (
    <Fragment>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 5,
          width: 28,
          height: 42,
          cursor: "pointer",
          // border: '1px solid white',
          backgroundColor: "none",
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          backgroundColor: disabled ? "#666" : "#124e78",
          ...defaultHandleStyle,
          ...(customHandleColor
            ? {
                ...customHandleGradientStyle(
                  `${customColorsList[Math.round(value / 15)]}`
                ),
              }
            : null),
        }}
      />
    </Fragment>
  );
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Handle.defaultProps = {
  disabled: false,
};
