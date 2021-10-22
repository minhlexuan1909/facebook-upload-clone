import React, { useContext, useState, useRef } from "react";
import "./StatusList.css";
import { StatusContext } from "../Status";
import { v4 as uuidv4 } from "uuid";

export default function StatusList() {
  const {
    isAddingStatus,
    setIsAddingStatus,
    isChangingContent,
    setIsChangingContent,
    statusList,
    setStatusList,
    newStatus,
    setNewStatus,
  } = useContext(StatusContext);
  const uploadImgCmtBtn = useRef();
  const cmtDeleteBtn = useRef();
  const [comment, setComment] = useState({
    wordCmt: "",
  });
  const [isLiked, setIsLiked] = useState(false);
  const statusDeleteBtnHandler = (status) => {
    const newList = statusList.filter((item) => item.id !== status.id);
    console.log(newList);
    setStatusList([...newList]);
  };
  const commentInputOnChangeHandler = (e) => {
    comment.wordCmt = e.target.value;
    setComment({ ...comment });
  };
  const commentInputOnKeyDownHandler = (status, e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      comment.id = uuidv4();
      status.cmtList.push(comment);
      status.cmtCount += 1;
      setStatusList([...statusList]);
      setComment({
        wordCmt: "",
      });
    }
  };
  const commentImageUploadBtnHandler = () => {
    uploadImgCmtBtn.current.click();
  };
  const uploadHandle = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setComment({
        ...comment,
        imageCmt: URL.createObjectURL(img),
      });
    }
  };
  const showCmtDeleteBtn = (e) => {
    e.currentTarget.classList.remove("deleteBtn--disappear");
  };
  const hideCmtDeleteBtn = (e) => {
    e.currentTarget.classList.add("deleteBtn--disappear");
  };
  const cmtDeleteBtnOnClickHandler = (status, comment) => {
    console.log(status);
    console.log(comment);
    const newCmtList = status.cmtList.filter((item) => item.id !== comment.id);
    status.cmtList = newCmtList;
    status.cmtCount -= 1;
    setStatusList([...statusList]);
  };
  const likeStatusBtnOnClickHanlder = (status) => {
    status.likeCount += 1;
    setStatusList([...statusList]);
  };

  // _________________________________________________

  return (
    <div className="status-list">
      {console.log(statusList)}
      {statusList.reverse().map((item) => (
        <div className="status__item">
          <div
            className="status__delete"
            onClick={() => statusDeleteBtnHandler(item)}
          >
            <i
              style={{
                backgroundImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png)",
                backgroundPosition: "-126px -107px",
                backgroundSize: "auto",
                width: "20px",
                height: "20px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                filter: "invert(62%)",
              }}
            ></i>
          </div>
          <div className="status__informations">
            <div className="status-info__left">
              <img
                className="status-info__image"
                src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/cp0/c0.18.50.50a/p50x50/169444839_1696627483862853_6011983667638103075_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=D9foiasEPtUAX9GaAE3&_nc_ht=scontent.fhph1-2.fna&oh=d6d82b1a006b8e76c98e848554c6645d&oe=6178BFED"
                alt=""
              />
            </div>
            <div className="status-info__right">
              <a href="">
                <div className="status-info__name">Minh Xuân Lê</div>
              </a>
              <a href="">
                <div className="status-info__time">Yesterday at 10:02 AM</div>
              </a>
            </div>
          </div>
          <div className="status__content">
            <div className="content__word">{item.wordContent}</div>
            {item.hasOwnProperty("imageContent") ? (
              <div className="content__image">
                <img src={item.imageContent} alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="status__react-and-comments">
            <div className="status__react-status-wrapper">
              <div className="status__react-status">
                <div className="status__react-count">
                  <img
                    className="like-icon"
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                    alt=""
                  />
                  <div className="status__like-count">{item.likeCount}</div>
                </div>
                <div className="status__cmt-count">
                  {item.cmtCount} Commnents
                </div>
              </div>
            </div>
            <div className="status__btns-wrapper">
              <div className="status__btns">
                <div
                  className="status-btn__item"
                  onClick={() => likeStatusBtnOnClickHanlder(item)}
                >
                  <div className="status-btn__item-wrapper">
                    <div className="status-btn__icon-wrapper">
                      <i
                        data-visualcompletion="css-img"
                        style={{
                          backgroundImage:
                            "url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png)",
                          backgroundPosition: "0px -218px",
                          backgroundSize: "auto",
                          width: "18px",
                          height: "18px",
                          backgroundRepeat: "no-repeat",
                          display: "inline-block",
                          filter: "invert(62%)",
                        }}
                      ></i>
                    </div>
                    <div className="status-btn__text">Like</div>
                  </div>
                </div>
                <div className="status-btn__item">
                  <div className="status-btn__item-wrapper">
                    <div className="status-btn__icon-wrapper">
                      <i
                        data-visualcompletion="css-img"
                        style={{
                          backgroundImage:
                            "url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png)",
                          backgroundPosition: "0px -180px",
                          backgroundSize: "auto",
                          width: "18px",
                          height: "18px",
                          backgroundRepeat: "no-repeat",
                          display: "inline-block",
                          filter: "invert(62%)",
                        }}
                      ></i>
                    </div>
                    <div className="status-btn__text">Commment</div>
                  </div>
                </div>
                <div className="status-btn__item">
                  <div className="status-btn__item-wrapper">
                    <div className="status-btn__icon-wrapper">
                      <i
                        data-visualcompletion="css-img"
                        style={{
                          backgroundImage:
                            "url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png)",
                          backgroundPosition: "0px -237px",
                          backgroundSize: "auto",
                          width: "18px",
                          height: "18px",
                          backgroundRepeat: "no-repeat",
                          display: "inline-block",
                          filter: "invert(62%)",
                        }}
                      ></i>
                    </div>
                    <div className="status-btn__text">Share</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="status__comments">
              <div className="status__comments-input-wrapper">
                <div className="status__comment-input">
                  <img
                    className="status-comment__ava-image"
                    src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/cp0/c0.18.50.50a/p50x50/169444839_1696627483862853_6011983667638103075_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=D9foiasEPtUAX9GaAE3&_nc_ht=scontent.fhph1-2.fna&oh=d6d82b1a006b8e76c98e848554c6645d&oe=6178BFED"
                    alt=""
                  />
                  <div className="status-comment__right-input">
                    <div className="status-comment__input-feild">
                      <input
                        type="text"
                        placeholder="Write a comment"
                        value={comment.wordCmt}
                        onChange={commentInputOnChangeHandler}
                        onKeyDown={(e) => commentInputOnKeyDownHandler(item, e)}
                      />
                      <input
                        ref={uploadImgCmtBtn}
                        type="file"
                        style={{ display: "none" }}
                        onChange={uploadHandle}
                      />

                      <div
                        className="status-comment__add-image-btn"
                        onClick={commentImageUploadBtnHandler}
                      >
                        <i
                          data-visualcompletion="css-img"
                          style={{
                            backgroundImage:
                              "url('https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png')",
                            backgroundPosition: "0 -358px",
                            backgroundSize: "auto",
                            width: "16px",
                            height: "16px",
                            backgroundRepeat: "no-repeat",
                            display: "inline-block",
                            filter: "invert(62%)",
                          }}
                        ></i>
                      </div>
                    </div>
                    {comment.hasOwnProperty("imageCmt") ? (
                      <div className="status-commnet__image-preview">
                        <img src={comment.imageCmt}></img>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="status__comment-list">
                {item.cmtList.map((comment) => (
                  <div className="status__comment-item ">
                    <img
                      className="status-comment__ava-image"
                      src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/cp0/c0.18.50.50a/p50x50/169444839_1696627483862853_6011983667638103075_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=D9foiasEPtUAX9GaAE3&_nc_ht=scontent.fhph1-2.fna&oh=d6d82b1a006b8e76c98e848554c6645d&oe=6178BFED"
                      alt=""
                    />
                    <div className="status-comment__right-side">
                      <div
                        className="trigger-deleteBtn-overlay deleteBtn--disappear"
                        onMouseEnter={showCmtDeleteBtn}
                        onMouseLeave={hideCmtDeleteBtn}
                      >
                        <div className="status-comment__text-and-deleteBtn">
                          <div
                            className={
                              comment.wordCmt !== ""
                                ? "status-comment__text-wrapper"
                                : "status-comment__text-wrapper--no-text"
                            }
                          >
                            <a className="status-comment__username">
                              Minh Xuân Lê
                            </a>
                            <div className="status-comment__text">
                              {comment.wordCmt}
                            </div>
                          </div>
                          <div
                            className="status-comment__deleteBtn-wrapper"
                            onClick={() =>
                              cmtDeleteBtnOnClickHandler(item, comment)
                            }
                          >
                            <div
                              className="status-comment__deleteBtn"
                              key={comment.id}
                              ref={cmtDeleteBtn}
                            >
                              <i
                                style={{
                                  backgroundImage:
                                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png)",
                                  backgroundPosition: "-126px -107px",
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
                        {comment.hasOwnProperty("imageCmt") ? (
                          <div className="status-commnet__cmt-image">
                            <div>
                              <img src={comment.imageCmt} alt="" />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="status-comment__btn">
                        <a>Like</a>
                        <span> · </span>
                        <a>Reply</a>
                        <span> · </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
