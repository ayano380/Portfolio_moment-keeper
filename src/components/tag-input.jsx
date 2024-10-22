import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
// import 'react-tag-input/example/reactTags.css';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const TagInputComponent = () => {
  const [tags, setTags] = useState([
    { id: "1", text: "JavaScript" },
    { id: "2", text: "React" },
  ]);

  // タグの追加
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  // タグの削除
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  // タグのドラッグ操作 (オプション)
  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  return (
    <div>
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="inline" // タグ入力フィールドの位置
        placeholder="Add a new tag"
      />
    </div>
  );
};

export default TagInputComponent;
