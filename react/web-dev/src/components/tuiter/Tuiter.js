import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
const Tuiter = () => {
  return (
    <>
      <NavigationSidebar active="home" />
      <WhoToFollowList />
    </>
  );
};
export default Tuiter;
