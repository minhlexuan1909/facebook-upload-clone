import { v4 as uuidv4 } from "uuid";
import React, { createContext, useState, useEffect } from "react";
import StatusAdd from "../StatusAdd";
import StatusList from "../StatusList";
const StatusContext = createContext({});
export { StatusContext };

export const Status = () => {
  const tmp = JSON.parse(localStorage.getItem("statusList"));
  const [isAddingStatus, setIsAddingStatus] = useState(false);
  const [isChangingContent, setIsChangingContent] = useState(false);
  const [isInsertingImage, setIsInsertingImage] = useState(false);
  const [statusList, setStatusList] = useState(tmp === null ? [] : tmp);
  useEffect(() => {
    localStorage.setItem("statusList", JSON.stringify(statusList));
  }, [statusList]);
  const [newStatus, setNewStatus] = useState({
    wordContent: "",
    likeCount: 0,
    cmtCount: 0,
    cmtList: [],
  });

  const providerValue = {
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
  };
  return (
    <div>
      <StatusContext.Provider value={providerValue}>
        <StatusAdd></StatusAdd>
        <StatusList></StatusList>
      </StatusContext.Provider>
    </div>
  );
};
export default Status;
