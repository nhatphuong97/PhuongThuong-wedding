import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import image1 from "./../../../img/bg-rung.webp";
import {
  ParallaxProvider,
  useParallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  Parallax,
} from "react-scroll-parallax";
import { memo } from "react";
ParallaxDevide.propTypes = {};

function ParallaxDevide(props) {
  // window.addEventListener("scroll", function () {
  //   let pageY = window.pageYOffset;
  //   let pageYend = window.page;
  //   console.log({ pageY: pageY });
  //   let main = this.document.getElementById("parallax");
  //   main.style.backgroundPositionY = pageY * 0.5 + "px";
  //   //5417 = 10%
  //   console.log(main.style.backgroundPositionY);
  //   console.log(pageY);
  // });

  const { ref } = useParallax({
    speed: 10,
    translateX: ["-30", "-10"],
    translateY: ["", ""],
  });

  return (
    <div className="bg-red-300 h-[500px] w-full flex flex-col justify-center items-center ">
      <div className="bg-black h-full w-[800px] overflow-hidden">
        <img
          loading="lazy"
          ref={ref}
          src={image1}
          alt=""
          className="h-[500px] w-[1200px] object-cover max-w-[1200px]"
        />
      </div>

      {/* <div className="h-[300px] w-[500px] bg-black overflow-hidden">
        <Parallax
          speed={10}
          scale={[1, 1]}
          translateX={[-20, 10]}
          style={{ overflow: "hidden" }}
          translateY={["", ""]}
        ></Parallax>
      </div> */}
    </div>
  );
}

export default memo(ParallaxDevide);

