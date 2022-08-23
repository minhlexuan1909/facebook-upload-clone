import React from "react";
import positionIcon from "../../assets/position-icon.png";

const AddToPostIcon = (props) => {
  const { posX, posY } = props;
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        height: "24px",
        width: "24px",
        backgroundImage: `url(${positionIcon})`,
        backgroundPosition: `${posX}px ${posY}px`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export default AddToPostIcon;
