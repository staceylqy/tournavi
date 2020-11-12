import React from "react";
import ImgPath3 from "./img/1.jpg";
import ImgPath4 from "./img/2.jpg";
import ImgPath5 from "./img/3.jpg";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

function About() {
  return (
    <div className="box3">
      <h3 id="about" className="yellowtitle">
        ABOUT
      </h3>
      <div className="introduction">
        <p className="p4">
          TourNaviは、新しい旅行体験プランを作成できるサービスです。
          <br />
          <br />
          お気に入りの旅行プランを収集できるだけでなく、
          <br />
          <br />
          他の人が共有している素晴らしい旅行の思い出も見ることができます。
        </p>
      </div>
      <div className="image1">
        <img src={ImgPath3} />
        <img src={ImgPath4} />
        <img src={ImgPath5} />
      </div>
    </div>
  );
}

export default About;
