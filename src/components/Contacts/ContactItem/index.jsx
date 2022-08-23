import React from "react";
import "./ContactItem.css";

const ContactItem = () => {
  return (
    <div className="contact-list__item">
      <div className="contact-list__item-wrapper">
        <div className="contact-list__img-wrapper">
          <img src={require("../../../assets/avatar.jpg").default} alt="" />
        </div>
        <div className="contact-list__name">
          <div>Minh Lê</div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
