import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { MainBottom } from "../components/main/MainBottom";
import { MainTop } from "../components/main/MainTop";
import "../css/main/main.css";

const Main = () => {
  return (
    <>
      <MainTop />
      <MainBottom />
    </>
  );
};

export default Main;
