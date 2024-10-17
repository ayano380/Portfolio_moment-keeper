import React from "react";

const Posts = ({ togglePopUp }) => {
  return (
    <>
      <button className="today-record_button" onClick={togglePopUp}>
        今日の記録
      </button>
      <div>
        <img src="../images/posts_img.png" alt="" />
      </div>
    </>
  );
};

export default Posts;
