import React, { useEffect } from "react";
import "./Navigations.css";

export default function Navigations({ isShowingMore }) {
  const arr = Array(10).fill("");
  return (
    <div
      className={`left-nav ${
        isShowingMore ? "left-nav--small-screen" : "left-nav--disappear"
      }`}
    >
      <div className="left-nav__upper">
        <ul className="left-nav__nav-list">
          <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <img
                    src={require("../../assets/avatar.jpg").default}
                    alt=""
                    className="left-nav__icon nav-item--icon"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="left-nav__name nav-item--name">Minh Lê</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <img
                    src={require("../../assets/friend-icon.png").default}
                    alt=""
                    className="left-nav__icon nav-item--icon"
                  />
                  <div className="left-nav__name nav-item--name">Friends</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <img
                    src={require("../../assets/watch-icon.png").default}
                    alt=""
                    className="left-nav__icon nav-item--icon"
                  />
                  <div className="left-nav__name nav-item--name">Watch</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <img
                    src={require("../../assets/memories-icon.png").default}
                    alt=""
                    className="left-nav__icon nav-item--icon"
                  />
                  <div className="left-nav__name nav-item--name">Memories</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <img
                    src={require("../../assets/flag-icon.png").default}
                    alt=""
                    className="left-nav__icon nav-item--icon"
                  />
                  <div className="left-nav__name nav-item--name">Pages</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <img
                    src={require("../../assets/group-upper-icon.png").default}
                    alt=""
                    className="left-nav__icon nav-item--icon"
                  />
                  <div className="left-nav__name nav-item--name">Groups</div>
                </div>
              </div>
            </a>
          </li>
          {/* <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <div className="see-more-icon left-nav__icon nav-item--icon">
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        backgroundImage:
                          "url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/wvSU1A_lBfe.png')",
                        backgroundPosition: "-126px -86px",
                        backgroundSize: "auto",
                        width: "20px",
                        height: "20px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                        filter: "invert(89%)",
                      }}
                    ></i>
                  </div>
                  <div className="left-nav__name nav-item--name">See More</div>
                </div>
              </div>
            </a>
          </li> */}
        </ul>
        <div style={{ height: "8px", borderBottom: "1px solid #3e4042" }}></div>
      </div>
      <div className="left-nav__lower">
        <div className="left-nav__shortcut-title">Your Shortcuts</div>
        <div className="left-nav__shortcut-list">
          <ul className="left-nav__nav-list">
            {arr.map((item) => (
              <li>
                <a href="">
                  <div className="left-nav__item">
                    <div className="item__wrapper">
                      <img
                        src={require("../../assets/group-icon.png").default}
                        alt=""
                        className="left-nav__icon nav-item--icon shortcut__icon"
                      />
                      <div className="left-nav__name nav-item--name ">
                        Lập Trình Python-nhóm 3
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
