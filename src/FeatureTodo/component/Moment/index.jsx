import React from "react";
import PropTypes from "prop-types";
import meet from "./../../../img/meet.webp";

import cadong from "./../../../img/bg-rung.webp";
import dalat1 from "./../../../dalat/dalat1.webp";
import dalat2 from "./../../../dalat/dalat2.webp";
import dalat3 from "./../../../dalat/dalat3.webp";
import dalat4 from "./../../../dalat/dalat4.webp";

import {
  ParallaxProvider,
  useParallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  Parallax,
} from "react-scroll-parallax";
Moment.propTypes = {};

function Moment(props) {
  const insideStyles = {
    background: "#fcdce2",
    padding: 20,
    position: "absolute",
    top: "60%",
    left: "50%",
    color: "white",
    transform: "translate(-50%,-50%)",
  };

  const { ref } = useParallax({
    speed: 20,
    translateX: ["0", "-15"],
    translateY: ["", ""],
  });
  return (
    <div className="flex flex-col items-center w-full  h-auto">
      <div className="grid grid-cols-2  w-full">
        <div className="mm-meet h-[800px] flex flex-col py-10  text-red-500 items-center">
          <div className="font-playfair text-3xl  ">The First Date</div>
          <img src={meet} alt="" className=" w-[350px] h-auto mt-5 mb-7" />

          <div className="font-playfair  text-base  w-[350px]">
            <p>Bạn có tin vào duyên số không? mình thì có nha ^^.</p>
            <p>
              Tụi mình gặp nhau trong một lần hoạt động từ thiện, chuyến đi đó
              là lần đầu tiên trong đời mình được đi bộ hơn 10km trong rừng núi,
              chợt trong đoàn mình tìm thấy em. Khoảnh khắc em quan tâm mọi
              người đã lan tỏa sự thiện cảm, ấm áp .Và chắc có lẽ mình đã say
              nắng nụ cười của e từ giây phút ấy.
            </p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className={"m-title "}>
          <div className="bg-red-300 h-[800px] w-full flex flex-col justify-center items-center ">
            <div className="bg-black h-full  overflow-hidden relative ">
              <img
                ref={ref}
                src={cadong}
                alt=""
                className="h-full w-[120%] object-cover object-center max-w-[120%]"
              />
              {/* <div className="absolute" style={insideStyles}>
                {" "}
                Ảnh chỗ này sẽ đổi để phù hợp với màu
              </div> */}
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
        </div>
        <div className="mm-meet h-[auto] flex flex-col p-3 justify-center bg-red-100 gap-3 text-white items-center">
          <div className="grid grid-cols-3 gap-3 w-[60%]">
            <img
              src={dalat4}
              alt=""
              className="h-auto max-w-auto object-cover object-center "
            />
            <img
              src={dalat4}
              alt=""
              className="h-auto max-w-auto object-cover object-center "
            />
            <img
              src={dalat4}
              alt=""
              className="h-auto max-w-auto object-cover object-center "
            />
            <img
              src={dalat4}
              alt=""
              className="h-auto max-w-auto object-cover object-center "
            />
            <img
              src={dalat4}
              alt=""
              className="h-auto max-w-auto object-cover object-center "
            />
            <img
              src={dalat4}
              alt=""
              className="h-auto max-w-auto object-cover object-center "
            />
          </div>
        </div>
        <div className={"m-title h-[800px] bg-red"}> </div>
      </div>
    </div>
  );
}

export default Moment;
