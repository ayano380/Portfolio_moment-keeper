
import React, { useState } from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

export const Taginput = ({setTags}) => {
    const [tags, setLocalTags] = useState([]);

    const handleTagChange = (newTags) => {
      setLocalTags(newTags);
      setTags(newTags);
    };

    return (
        <ReactTagInput
            placeholder="入力してください"
            tags={tags} 
            onChange={handleTagChange}
        />
    )
}
  
export default Taginput;