import React from "react";

const Pictures = ({ postData }) => {

  return (
    <div className="pictures_list">
      {!postData || postData.length === 0 ? (
        <p>投稿がありません</p>
      ) : (
        postData.map((post, index) => (
          <div key={index} className="picture_item">
            {post.image && (
              <img
                className="pictures_img"
                src={post.image}
                alt="投稿された画像"
              />
            )}
            {/* <p>日付: {post.date}</p>
            <p>コメント: {post.comment}</p>
            <p>タグ: {post.tag}</p> */}
          </div>
        ))
      )}
    </div>
  );
};

export default Pictures;
