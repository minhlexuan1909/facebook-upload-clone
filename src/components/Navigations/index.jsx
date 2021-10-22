import React, { useEffect } from "react";
import "./Navigations.css";

export default function Navigations({ isShowingMore }) {
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
                    src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-1/cp0/c0.18.50.50a/p50x50/169444839_1696627483862853_6011983667638103075_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=5eXMRRSLeNcAX8hOvyv&_nc_ht=scontent.fhan3-5.fna&oh=fb4d45cafee2977bdab03e5334d8deac&oe=6170D6ED"
                    alt=""
                    className="left-nav__icon nav-item--icon"
                  />
                  <div className="left-nav__name nav-item--name">
                    Minh Xuân Lê
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="left-nav__item">
                <div className="item__wrapper">
                  <img
                    src="https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
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
                    src="https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png"
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
                    src="https://www.facebook.com/rsrc.php/v3/y8/r/he-BkogidIc.png"
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
                    src="https://www.facebook.com/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
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
                    src="https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                    alt=""
                    className="left-nav__icon nav-item--icon"
                  />
                  <div className="left-nav__name nav-item--name">Groups</div>
                </div>
              </div>
            </a>
          </li>
          <li>
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
          </li>
        </ul>
        <div style={{ height: "8px", borderBottom: "1px solid #3e4042" }}></div>
      </div>
      <div className="left-nav__lower">
        <div className="left-nav__shortcut-title">Your Shortcuts</div>
        <div className="left-nav__shortcut-list">
          <ul className="left-nav__nav-list">
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/cp0/c21.0.50.50a/p50x50/230814477_1269292150186391_7151365967848894297_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=FQZEkHdtU1MAX-JIxYR&_nc_oc=AQlqWRYf6X8bIjKHh3SWzwT4jhSjlcQZwd-wDQ-Z8FZoXtZ3EH2J9qtBnzDWHQIKwqs&_nc_ht=scontent.fhan3-5.fna&oh=337e04c2a5296f0fc6baa0046ba92a78&oe=6172C353"
                      alt=""
                      className="left-nav__icon nav-item--icon shortcut__icon"
                    />
                    <div className="left-nav__name nav-item--name ">
                      Hội Săn Mã | Mã Giảm Giá Shopee, Lazada ✅
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/cp0/c8.0.50.50a/p50x50/141572837_1091989104558372_6283687573492336744_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=ouvEz3v0EnEAX-qLQ2e&_nc_ht=scontent.fhan3-3.fna&oh=b25295a3cad3ffe3961e6b22cf5b2883&oe=617540F4"
                      alt=""
                      className="left-nav__icon nav-item--icon shortcut__icon"
                    />
                    <div className="left-nav__name nav-item--name ">
                      D19 PROPTIT
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://scontent.fhan4-2.fna.fbcdn.net/v/t1.6435-9/cp0/c20.0.50.50a/p50x50/229455200_124631333210914_1816117426700774855_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=W7qTdmxTt8gAX-imJUM&_nc_ht=scontent.fhan4-2.fna&oh=fa3d987f459dd73860760e1471e86788&oe=6173D83B"
                      alt=""
                      className="left-nav__icon nav-item--icon shortcut__icon"
                    />
                    <div className="left-nav__name nav-item--name ">
                      Giúp Tưới Cây Nông Trại Shopee
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/cp0/c23.0.50.50a/p50x50/131069775_1306318979727789_1701714721928826887_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=boHIRRIOLy4AX-ZJ7wo&_nc_ht=scontent.fhan3-3.fna&oh=ed85a8f1ffce8db79468239d938fd916&oe=6174DB23"
                      alt=""
                      className="left-nav__icon nav-item--icon shortcut__icon"
                    />
                    <div className="left-nav__name nav-item--name ">
                      Nghiện Shopee Live
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/zVvRrO8pOtu.png"
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
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/cp0/c21.0.50.50a/p50x50/230814477_1269292150186391_7151365967848894297_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=FQZEkHdtU1MAX-JIxYR&_nc_oc=AQlqWRYf6X8bIjKHh3SWzwT4jhSjlcQZwd-wDQ-Z8FZoXtZ3EH2J9qtBnzDWHQIKwqs&_nc_ht=scontent.fhan3-5.fna&oh=337e04c2a5296f0fc6baa0046ba92a78&oe=6172C353"
                      alt=""
                      className="left-nav__icon nav-item--icon shortcut__icon"
                    />
                    <div className="left-nav__name nav-item--name ">
                      Hội Săn Mã | Mã Giảm Giá Shopee, Lazada ✅
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/cp0/c21.0.50.50a/p50x50/230814477_1269292150186391_7151365967848894297_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=FQZEkHdtU1MAX-JIxYR&_nc_oc=AQlqWRYf6X8bIjKHh3SWzwT4jhSjlcQZwd-wDQ-Z8FZoXtZ3EH2J9qtBnzDWHQIKwqs&_nc_ht=scontent.fhan3-5.fna&oh=337e04c2a5296f0fc6baa0046ba92a78&oe=6172C353"
                      alt=""
                      className="left-nav__icon nav-item--icon shortcut__icon"
                    />
                    <div className="left-nav__name nav-item--name ">
                      Hội Săn Mã | Mã Giảm Giá Shopee, Lazada ✅
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="left-nav__item">
                  <div className="item__wrapper">
                    <img
                      src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/cp0/c21.0.50.50a/p50x50/230814477_1269292150186391_7151365967848894297_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=FQZEkHdtU1MAX-JIxYR&_nc_oc=AQlqWRYf6X8bIjKHh3SWzwT4jhSjlcQZwd-wDQ-Z8FZoXtZ3EH2J9qtBnzDWHQIKwqs&_nc_ht=scontent.fhan3-5.fna&oh=337e04c2a5296f0fc6baa0046ba92a78&oe=6172C353"
                      alt=""
                      className="left-nav__icon nav-item--icon shortcut__icon"
                    />
                    <div className="left-nav__name nav-item--name ">
                      Hội Săn Mã | Mã Giảm Giá Shopee, Lazada ✅
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
