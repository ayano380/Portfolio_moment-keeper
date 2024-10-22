import React from "react";

const Posts = ({ togglePopUp }) => {
  return (
    <>
      {/* <button className="today-record_button" onClick={togglePopUp}>
        今日の記録
      </button> */}
      <button className="btn btn-malformation btn-malformation--pastel" onClick={togglePopUp}>New Post</button>
      {/* <div> */}
        <img src="./images/posts_img.png" alt="" />
      {/* </div> */}
    </>
  );
};

export default Posts;
