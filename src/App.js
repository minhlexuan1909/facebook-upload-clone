import "./App.css";
import Header from "./components/Header";
import Navigations from "./components/Navigations";
import Status from "./components/Status";
import StatusAdd from "./components/StatusAdd";
import StatusList from "./components/StatusList";
import { Contacts } from "./components/Contacts";
import { useState } from "react";

function App() {
  const [isShowingMore, setIsShowingMore] = useState(false);

  return (
    <div>
      <header>
        <Header setIsShowingMore={setIsShowingMore}></Header>
      </header>
      {/* <div className="main">
        <Navigations></Navigations>
      </div> */}
      <main>
        <Navigations isShowingMore={isShowingMore}></Navigations>
        <div className="status-anh-friends">
          {/* <StatusListContextProvider> */}
          {/* <StatusAdd></StatusAdd>
          <StatusList></StatusList> */}
          {/* </StatusListContextProvider> */}
          <div className="status">
            <Status></Status>
          </div>
          <Contacts></Contacts>
        </div>
      </main>
    </div>
  );
}

export default App;
