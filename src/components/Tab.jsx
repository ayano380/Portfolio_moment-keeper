import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Pictures from "./pictures";

const TabComponent = ({ postData, setPostData }) => {
  // タグのセットを作成
  const tags = [...new Set(postData.flatMap(post => post.tags))]; // タグの重複を排除

  return (
    <Tabs>
      <TabList>
        <Tab>ALL</Tab>
        {/* タグごとに自動生成 */}
        {tags.map((tag, index) => (
          <Tab key={index}>{tag}</Tab>
        ))}
      </TabList>

      <TabPanel>
        <Pictures 
        postData={postData} 
        setPostData={setPostData} 
        />
      </TabPanel>

      {tags.map((tag, index) => (
        <TabPanel key={index}>
          <Pictures postData={postData.filter(post => post.tags.includes(tag))}
          setPostData={setPostData}
          />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabComponent;
