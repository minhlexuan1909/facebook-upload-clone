import React from "react";
import addPhotoIcon from "../../assets/add-photo-icon.png";

const AddPhotoBtnIcon = (props) => {
  const { posX, posY } = props;
  return (
    <i
      data-visualcompletion="css-img"
      style={{
        height: "20px",
        width: "20px",
        backgroundImage: `url(${addPhotoIcon})`,
        backgroundPosition: `${posX}px ${posY}px`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        filter: "invert(89%)",
      }}
    ></i>
  );
};

export default AddPhotoBtnIcon;
