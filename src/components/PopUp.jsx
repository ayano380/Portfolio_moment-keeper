import React, { useState } from "react";
import Taginput from "./tag-input";

const PopUp = ({ togglePopUp, setPostData }) => {
  const [tempImage, setTempImage] = useState(""); // 一時的に選択した画像を保持
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState([]); // タグの状態を管理

  const onFileInputChange = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setTempImage(reader.result); // Base64 データをセット
    };

    if (file) {
      reader.readAsDataURL(file); // 画像を Base64 に変換
    }
  };

  // 投稿ボタンを押したときの動き
  const handleSubmit = () => {
    const newPost = {
      image: tempImage,
      comment: comment,
      date: date,
      tags: tags, // タグを保存
    };

    // LocalStorageにデータを追加
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    storedPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(storedPosts));

    console.log("投稿されました");

    setPostData(storedPosts); // 親コンポーネントの状態を更新
    togglePopUp(); // ポップアップを閉じる
  };

  return (
    <>
      <div className="popup_content">
        <div className="flex">
          <div className="selectImg">
            {tempImage && <img src={tempImage} alt="選択した画像" />}
            <input
              type="file"
              accept="image/*"
              onChange={onFileInputChange}
              className="pl-4"
            />
          </div>
          <ul>
            <li>
              <h3>日付</h3>
              <input
                className="calender"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="日付を記述(2024-10-14)"
              />
            </li>
            <li>
              <div>
                <h3>コメント</h3>
                <textarea
                  className="comment"
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="コメントを記述"
                />
              </div>
            </li>
            <li>
              <div>
                <h3>タグ</h3>
                {/* Taginput コンポーネントに setTags を渡す */}
                <Taginput setTags={setTags} />
              </div>
            </li>
          </ul>
        </div>
        <a className="popup_postbutton" onClick={handleSubmit}>
          投稿する
        </a>
      </div>
    </>
  );
};

export default PopUp;
