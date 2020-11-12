import React from "react";
import ImgPath2 from "./img/travel.jpg";

import BackgroundSlideshow from "react-background-slideshow";
import { Component } from "react";

import styled from "styled-components";
import ImgPath3 from "./img/1.jpg";
import ImgPath4 from "./img/2.jpg";
import ImgPath5 from "./img/3.jpg";

function Main() {
  return (
    <div className="box2">
      <img src={ImgPath2} />

      <div className="title">
        <p className="p1">世界の魅力をもっと発見しよう</p>
      </div>
    </div>
  );
}

export default Main;
