import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Pictures from "./pictures";

const TabComponent = () => {
  return (
    <Tabs className="">
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <Pictures />
      </TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default TabComponent;
