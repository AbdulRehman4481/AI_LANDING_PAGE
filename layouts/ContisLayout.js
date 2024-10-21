"use client";
import VideoPopup from "@/components/VideoPopup";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
const ContisLayout = ({ children, footer }) => {
  useEffect(() => {
    niceSelect();
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <TopBar />
      <NavBar />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default ContisLayout;
