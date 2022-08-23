import React from "react";
import flag from "../../assets/flag-and-gif-icon.png";

const AddToPostIcon = (props) => {
  const { posX, posY } = props;
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        height: "24px",
        width: "24px",
        backgroundImage: `url(${flag})`,
        backgroundPosition: `${posX}px ${posY}px`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    ></i>
  );
};

export default AddToPostIcon;
