import React from "react";
import controlIcon from "../../assets/control-icon.png";

const ControlIcon = (props) => {
  const { posX, posY } = props;
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        backgroundImage: `url(${controlIcon})`,
        backgroundPosition: `${posX}px ${posY}px`,
        backgroundSize: "auto",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        filter: "invert(62%)",
      }}
    ></i>
  );
};

export default ControlIcon;
