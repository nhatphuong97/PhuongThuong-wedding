import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import image1 from "./../../../img/IMG_3843.jpg";
import {
  ParallaxProvider,
  useParallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
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

  // const { ref } = useParallax({
  //   // speed: -10,
  //   // translateY: [-100, 100],
  // });

  return (
    <ParallaxBanner className="h-[500px] ">
      <ParallaxBannerLayer
        style={{ aspectRatio: "2 / 1" }}
        speed={50}
        className="aspect-[2/1] "
        // translate={[-300, -600]}
        scale={[1, 1.2]}
        opacity={[0.9, 1]}
      >
        <img src={image1} alt="image1" className="w-full h-auto" />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

export default ParallaxDevide;
