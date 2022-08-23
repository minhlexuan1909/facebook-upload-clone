import React from "react";
import menuIcon from "../../assets/menu-icon.png";

const MenuIcon = (props) => {
  const { posX, posY } = props;
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        height: "16px",
        width: "16px",
        backgroundImage: `url(${menuIcon})`,
        backgroundPosition: `${posX}px ${posY}px`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        filter: "invert(89%)",
      }}
    ></i>
  );
};

export default MenuIcon;
