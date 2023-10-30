import React from "react";
import PropTypes from "prop-types";
import meet from "./../../../img/meet.webp";
import { Parallax, Background } from "react-parallax";

import cadong from "./../../../img/anh_cuoi_1.webp";

Moment.propTypes = {};

function Moment(props) {
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <div className="flex flex-col w-full bg-white h-auto">
      <div className="grid grid-cols-2 ">
        <div className="mm-meet  flex flex-col gap-3 py-10  items-center">
          <div className="font-playfair text-red-300 text-3xl ">
            Our Love Story
          </div>
          <img src={meet} alt="" className=" w-96 h-auto" />

          <div className="font-playfair text-red-300 text-lg  w-96">
            <p>Bạn có tin vào duyên số không? với mình thì có nha.</p>
            <p>
              Tụi mình gặp nhau trong một lần đi hoạt động từ thiện, lần đầu
              tiên mình gặp em đã cảm nhận được sự ấm áp mà em mang lại cho
              những người xung quanh.
            </p>
            <p>
              Sau những lần trò chuyện vu vơ mình đã yêu em từ bao giờ không
              hay.
            </p>
            <p></p>
          </div>
        </div>
        <div className={"m-title"}>
          <div className=" h-full w-auto flex flex-col justify-center">
            <Parallax
              strength={700}
              bgImage={cadong}
              bgImageSizes="100% 100%"
              className="bg-center"
              // bgImageStyle={{
              //   height: "",
              //   maxWidth: "350px",
              //   // "background-size": "cover",
              // }}
            >
              <div style={{ height: 400 }}>
                {/* <div style={insideStyles}>HTML inside the parallax</div> */}
              </div>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="mm-meet  flex flex-col gap-3 py-10  items-center">
          <div className=""></div>
        </div>
        <div className={"m-title "}> </div>
      </div>
    </div>
  );
}

export default Moment;
