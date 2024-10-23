// import './Top.css';
import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Tab from "../components/Tab";
import Posts from "../components/posts";
import Pictures from "../components/pictures";
import PopUp from "../components/PopUp";

const Top = () => {
  // PopUpの表示非表示
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  // 投稿するコンテンツの状態管理
  const [postData, setPostData] = useState([]);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  // コンポーネントがマウントされたときにlocalStorageからデータを取得
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPostData(storedPosts);
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Tab postData={postData} setPostData={setPostData}/>
        {/* <Pictures postData={postData} setPostData={setPostData} /> */}
        <Posts togglePopUp={togglePopUp} />
        {isPopUpVisible && (
          <>
            <div className="overlay" onClick={togglePopUp}></div>
            <PopUp togglePopUp={togglePopUp} setPostData={setPostData} />
          </>
        )}
      </div>
    </>
  );
};

export default Top;
