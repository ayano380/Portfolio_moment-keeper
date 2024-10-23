import React, { useState } from "react";

const Pictures = ({ postData, setPostData }) => {
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  // 画像をクリックしたとき
  const handleImageClick = (index) => {
    setSelectedPostIndex(index === selectedPostIndex ? null : index);
  };

  // 投稿を削除する
const handleDelete = (index) => {
  // 削除する投稿を取り除いた新しい配列を作成
  const updatedPosts = postData.filter((_, i) => i !== index);
    
  // LocalStorageのデータを更新
  localStorage.setItem("posts", JSON.stringify(updatedPosts));

  // 削除後の投稿を画面に反映する
  setPostData(updatedPosts);

  console.log("削除されました");
};


  const handleOverlayClick = () => {
    setSelectedPostIndex(null);
  };

  return (
    <div className="pictures_list">
      {!postData || postData.length === 0
        ? ""
        : postData.map((post, index) => (
            <div key={index} className="picture_item">
              {post.image && (
                <img
                  className="pictures_img"
                  src={post.image}
                  alt="投稿された画像"
                  onClick={() => handleImageClick(index)}
                />
              )}
              {selectedPostIndex === index && (
                <>
                  <div className="post_details">
                    <img
                      className="pictures_img"
                      src={post.image}
                      alt="投稿された画像"
                    />
                    <div className="details_withoutimg">
                      <p>日付: {post.date}</p>
                      <p>コメント: {post.comment}</p>
                      <p>タグ: {post.tags.join(", ")}</p> {/* タグを表示 */}
                    </div>

                    <button className="delete_button" onClick={() => handleDelete(index)}>削除する</button>
                  </div>

                  <div className="overlay" onClick={handleOverlayClick}></div>
                </>
              )}
            </div>
          ))}
    </div>
  );
};

export default Pictures;
