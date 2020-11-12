import React from "react";
import ImgPath from "./img/img.png";

function Head() {
  return (
    <div className="top">
      <img alt="" src={ImgPath} />
      <div className="naviall">
        <a href="#about" className="navi">
          ABOUT
        </a>
        <a href="#community" className="navi">
          COMMUNITY
        </a>
        <a href="#contact" className="navi">
          CONTACT
        </a>

        {/* Link-React Router */}
        {/* <BrowserRouter>
          <div>
            <div>

              <Link to="/about">
                <p className="navi">ABOUT</p>
              </Link>

              
              <Link to="/community">
                <p className="navi">COMMUNITY</p>
              </Link>
              <Link to="/contact">
                <p className="navi">CONTACT</p>
              </Link>
            </div>
          </div>
        </BrowserRouter> */}
      </div>
    </div>
  );
}

export default Head;
