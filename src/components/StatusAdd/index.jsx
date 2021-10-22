import React, { useContext, useRef, useEffect, useState } from "react";
import "./StatusAdd.css";
import { StatusContext } from "../Status";
import { v4 as uuidv4 } from "uuid";

export default function StatusAdd() {
  const {
    isAddingStatus,
    setIsAddingStatus,
    isChangingContent,
    setIsChangingContent,
    statusList,
    setStatusList,
    newStatus,
    setNewStatus,
    isInsertingImage,
    setIsInsertingImage,
  } = useContext(StatusContext);

  const postBtnRef = useRef();
  const inputPostRef = useRef();
  const uploadRef = useRef();
  const closeBtnOnClickHandler = () => {
    setIsAddingStatus(false);
  };
  const inputOnInputHandler = (e) => {
    if (e.target.textContent !== "") {
      setIsChangingContent(true);
      e.target.classList.remove("input--focus-color");
    } else {
      setIsChangingContent(false);
      e.target.classList.add("input--focus-color");
    }
    setNewStatus({
      ...newStatus,
      wordContent: e.target.textContent,
    });
  };
  const inputOnBlurHandler = (e) => {
    if (e.target.textContent === "") {
      e.target.classList.remove("input--focus-color");
      e.target.classList.add("input--blur-color");
    }
  };
  const inputOnFocusHandler = (e) => {
    if (e.target.textContent === "") {
      e.target.classList.add("input--focus-color");
      e.target.classList.remove("input--blur-color");
    }
  };
  const addInputOnClickHanlder = (e) => {
    setIsAddingStatus(true);

    // Error: https://stackoverflow.com/questions/53023869/react-refs-cannot-read-property-focus-of-null
    // Lúc này bảng CreatePost chưa xuất hiện => Ref trả về null
    // inputPostRef.current.focus();
  };
  const handlePostBtn = (e) => {
    setIsAddingStatus(false);
    setIsChangingContent(false);
    setIsInsertingImage(false);
    newStatus.id = uuidv4();
    setStatusList([...statusList, newStatus]);
    setNewStatus({
      wordContent: "",
      likeCount: 0,
      cmtCount: 0,
      cmtList: [],
    });
  };
  useEffect(() => {
    if (isAddingStatus === true) {
      if (newStatus.wordContent !== "") {
        inputPostRef.current.textContent = newStatus.wordContent;
        inputPostRef.current.classList.remove("input--focus-color");
      }
      // https://thewebdev.info/2021/05/01/how-to-set-the-cursor-position-on-contenteditable-div-with-javascript/
      // Đẩy caret position xuống cuối contenteditable div
      const selection = window.getSelection();
      const range = document.createRange();
      selection.removeAllRanges();
      range.selectNodeContents(inputPostRef.current);
      range.collapse(false);
      selection.addRange(range);
      inputPostRef.current.focus();
      // Chỉnh Post Btn nếu có nội dung -> active
      if (newStatus.wordContent !== "") {
        console.log("hi there");
        postBtnRef.current.classList.remove("create-feild__postBtn--disabled");
        postBtnRef.current.classList.add("create-feild__postBtn--active");
      }
    }
  }, [isAddingStatus]);
  useEffect(() => {
    if (isAddingStatus) {
      if (isChangingContent) {
        postBtnRef.current.classList.remove("create-feild__postBtn--disabled");
        postBtnRef.current.classList.add("create-feild__postBtn--active");
      } else {
        postBtnRef.current.classList.add("create-feild__postBtn--disabled");
        postBtnRef.current.classList.remove("create-feild__postBtn--active");
      }
    }
  }, [isChangingContent]);
  const uploadHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      console.log(img);
      setNewStatus({
        ...newStatus,
        imageContent: URL.createObjectURL(img),
      });
    }
  };
  const addImageIconOnClickHandler = () => {
    setIsInsertingImage(true);
  };
  const addPhotoOnClickHandler = () => {
    uploadRef.current.click();
  };
  const outsideAddPhotoOnClickHandler = () => {
    setIsAddingStatus(true);
    setIsInsertingImage(true);
  };
  const uploadCloseBtnOnClickHandler = () => {
    setIsInsertingImage(false);

    delete newStatus["imageContent"];
  };

  return (
    <div>
      {isAddingStatus ? (
        <div>
          <div className="overlay"></div>
          <div
            className={`status-add__create-feild ${
              isInsertingImage ? "create-feild--adding-image" : ""
            }`}
          >
            <div className="create-feild__title">
              <div className="create-feild__title-name-wrapper">
                <div className="create-feild__title-name">Create Post</div>
              </div>
              <div
                className="create-feild__closeBtn"
                onClick={closeBtnOnClickHandler}
              >
                <i
                  data-visualcompletion="css-img"
                  style={{
                    backgroundImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/qsE06umyfuJ.png)",
                    backgroundPosition: "-84px -107px",
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
            <div className="create-feild__user">
              <img
                className="user__image"
                src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-1/cp0/c0.14.40.40a/p40x40/169444839_1696627483862853_6011983667638103075_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XEmhW9eD8aEAX_F7r88&_nc_ht=scontent.fhan3-5.fna&oh=54b4c2bb05065686b205de1b2c13912f&oe=617C17F8"
                alt=""
              />
              <div className="user__right">
                <div className="user__name">Minh Xuân Lê</div>
                <div className="status__mode">
                  <div className="status-mode__wrapper">
                    <img
                      className="status-mode__icon"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/n8s2iDL-sOI.png"
                      alt=""
                    />
                    <div className="status-mode__name">Public</div>
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        backgroundImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/qsE06umyfuJ.png)",
                        backgroundPosition: "0px -183px",
                        backgroundSize: "auto",
                        width: "12px",
                        height: "12px",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                        filter: "invert(89%)",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="create-feild__middle-wrapper">
              <div
                className={`create-feild__input input--focus-color ${
                  isInsertingImage ? "create-feild__input--adding-image" : ""
                }`}
                ref={inputPostRef}
                contentEditable={true}
                data-text="What's on your mind, Minh?"
                onInput={inputOnInputHandler}
                onBlur={inputOnBlurHandler}
                onFocus={inputOnFocusHandler}
                style={{ cursor: "text" }}
              ></div>
              {isInsertingImage ? (
                <div className="create-feild__upload-image-wrapper">
                  <div className="create-feild__upload-image">
                    <div className="upload-image__pc-wrapper">
                      <div
                        className="upload-image__closeBtn"
                        onClick={uploadCloseBtnOnClickHandler}
                      >
                        <i
                          data-visualcompletion="css-img"
                          style={{
                            backgroundImage:
                              "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/qsE06umyfuJ.png)",
                            backgroundPosition: "-84px -107px",
                            backgroundSize: "auto",
                            width: "20px",
                            height: "20px",
                            backgroundRepeat: "no-repeat",
                            display: "inline-block",
                            filter: "invert(62%)",
                          }}
                        ></i>
                      </div>
                      {newStatus.hasOwnProperty("imageContent") ? (
                        <img
                          src={newStatus.imageContent}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            overflow: "hidden",
                            borderRadius:
                              "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
                          }}
                        />
                      ) : (
                        <>
                          <div
                            className="upload-image__pc"
                            onClick={addPhotoOnClickHandler}
                          >
                            <div className="upload-image__pc-icon-wrapper">
                              {/* <div className="upload-image__pc-icon"> */}
                              <i
                                data-visualcompletion="css-img"
                                style={{
                                  backgroundImage:
                                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/SMU_Jc8Ccy3.png)",
                                  backgroundPosition: "-21px -379px",
                                  backgroundSize: "auto",
                                  width: "20px",
                                  height: "20px",
                                  backgroundRepeat: "no-repeat",
                                  display: "inline-block",
                                  filter: "invert(89%)",
                                }}
                              ></i>
                              {/* </div> */}
                            </div>
                            <div className="upload-image__pc-big-text">
                              Add Photos/Videos
                            </div>
                            <div className="upload-image__pc-small-text">
                              or drag and drop
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="upload-image__mobile"></div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="uploadBtn">
              <input
                type="file"
                onChange={uploadHandler}
                ref={uploadRef}
                style={{ display: "none" }}
              />
            </div>
            <div className="create-feild__add-and-post">
              <div className="create-feild__add-to-post">
                <div className="add-to-post__title">
                  <div>Add to your post</div>
                </div>
                <div className="add-to-post__item-list">
                  <div
                    className="add-item-list__item"
                    onClick={addImageIconOnClickHandler}
                  >
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png)",
                        backgroundPosition: "0px -225px",
                        backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    ></i>
                  </div>
                  <div className="add-item-list__item">
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png)",
                        backgroundPosition: "0px -100px",
                        backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    ></i>
                  </div>
                  <div className="add-item-list__item">
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png)",
                        backgroundPosition: "0px -25px",
                        backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    ></i>
                  </div>
                  <div className="add-item-list__item">
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/HyeXO0sd7uk.png)",
                        backgroundPosition: "0px -225px",
                        backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    ></i>
                  </div>
                  <div className="add-item-list__item">
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png)",
                        backgroundPosition: "0px -175px",
                        backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    ></i>
                  </div>
                  <div className="add-item-list__item">
                    <i
                      data-visualcompletion="css-img"
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/FXuaWmKuZLn.png)",
                        backgroundPosition: "0px -132px",
                        backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              <div
                className="create-feild__postBtn create-feild__postBtn--disabled"
                onClick={handlePostBtn}
                ref={postBtnRef}
              >
                <div>Post</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="status-add status__item">
        <div className="status-add__upper ">
          <a href="">
            <img
              className="user__image"
              src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-1/cp0/c0.21.60.60a/p60x60/169444839_1696627483862853_6011983667638103075_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XEmhW9eD8aEAX_F7r88&_nc_ht=scontent.fhan3-5.fna&oh=b3e64eb36e0057fd0db89a5d4a236c84&oe=617A0A5A"
              alt=""
            />
          </a>
          <div
            className="status-add__input input"
            onClick={addInputOnClickHanlder}
          >
            <input
              type="text"
              placeholder={
                newStatus.wordContent === ""
                  ? "What's on your mind, Minh?"
                  : newStatus.wordContent
              }
            />
          </div>
        </div>
        <div className="status-add__lower">
          <div className="status-add__live status-add__item">
            <i
              data-visualcompletion="css-img"
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/pqfSsGC8Mfo.png')",
                backgroundPosition: "0 0",
                backgroundSize: "26px 652px",
                width: "24px",
                height: "24px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <div>Live Video</div>
          </div>
          <div
            className="status-add__photos status-add__item"
            onClick={outsideAddPhotoOnClickHandler}
          >
            <i
              data-visualcompletion="css-img"
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/pqfSsGC8Mfo.png')",
                backgroundPosition: "0 -234px",
                backgroundSize: "26px 652px",
                width: "24px",
                height: "24px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <div>Photo/Video</div>
          </div>
          <div className="status-add__feeling status-add__item">
            <i
              data-visualcompletion="css-img"
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/pqfSsGC8Mfo.png')",
                backgroundPosition: "0 -26px",
                backgroundSize: "26px 652px",
                width: "24px",
                height: "24px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
            <div>Feeling/Activity</div>
          </div>
        </div>
      </div>
    </div>
  );
}
