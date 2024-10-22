import React, {useState} from "react";

const Pictures = ({ postData }) => {
   // どの投稿がクリックされたかを追跡するための状態
   const [selectedPostIndex, setSelectedPostIndex] = useState(null);

   // 画像がクリックされたときに呼び出される関数
   const handleImageClick = (index) => {
     // 同じ画像をクリックした場合は閉じる、違う画像なら新たに開く
     setSelectedPostIndex(index === selectedPostIndex ? null : index);
   };

     // オーバーレイがクリックされたときにポップアップを閉じる
  const handleOverlayClick = () => {
    setSelectedPostIndex(null);
  };
   
  return (
    <div className="pictures_list">
      {!postData || postData.length === 0
        ? // <p>投稿がありません</p>
          ""
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
              {/* 画像がクリックされたら詳細情報を表示 */}
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
                  <p>タグ: {post.tag}</p>
                  </div>
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
