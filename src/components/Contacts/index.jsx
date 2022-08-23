import React from "react";
import "./Contact.css";
import ContactItem from "./ContactItem";

export const Contacts = () => {
  const arr = new Array(20).fill("");
  return (
    <div className="contact">
      <div className="contact__top-header">
        <div className="contact__title">
          <div>Contacts</div>
        </div>
        <div className="contact__btn">
          <div className="contact-btn__item">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/xjSfC2Ull5v.png')",
                backgroundPosition: "0 -415px",
                backgroundSize: "auto",
                width: "16px",
                height: "16px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                filter: "invert(62%)",
              }}
            ></i>
          </div>
          <div className="contact-btn__item">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png')",
                backgroundPosition: "-170px -149px",
                backgroundSize: "auto",
                width: "16px",
                height: "16px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                filter: "invert(62%)",
              }}
            ></i>
          </div>
          <div className="contact-btn__item">
            <i
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png')",
                backgroundPosition: "-147px -107px",
                backgroundSize: "auto",
                width: "20px",
                height: "20px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                filter: "invert(62%)",
              }}
            ></i>
          </div>
        </div>
      </div>
      <ul className="contact__list">
        {arr.map((item) => {
          console.log("object");
          return <ContactItem />;
        })}
      </ul>
    </div>
  );
};
