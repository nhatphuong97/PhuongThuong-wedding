import React from "react";
import PropTypes from "prop-types";
import meet from "./../../../dalat/matcha.webp";

import dalat5 from "./../../../img/bg-rung.webp";
import DalatPost from "./../../constant/blog_dalat";

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
    translateX: ["-10", "-25"],
    translateY: ["", ""],
    easing: "easeInOutQuad",
  });

  return (
    <div className="flex flex-col items-center w-full  h-auto">
      <div className="grid grid-cols-2  w-full">
        <div className="mm-meet h-[800px] flex flex-col justify-center py-10 gap-2 text-vitange_green-30 items-center">
          <div className="font-vollkorn text-4xl w-[350px] text-vitange_green-500">
            <p>The First</p>
            <p>Date</p>
          </div>
          {/* <div className="h-[2px] bg-vitange_green-20 w-[350px] my-2"></div> */}

          <div className="font-dosis  text-lg  w-[350px] text-vitange_green-20">
            <p className="text-xl pb-2">
              Bạn có tin vào duyên số không? mình thì có nha ^ ^
            </p>
            <p>
              Tụi mình gặp nhau trong một lần hoạt động từ thiện, chuyến đi đó
              là lần đầu tiên trong đời mình được đi bộ hơn 10km trong rừng núi,
              chợt trong đoàn mình tìm thấy em. Khoảnh khắc em quan tâm mọi
              người như lan tỏa sự thiện cảm, ấm áp .Và chắc có lẽ mình đã say
              nắng nụ cười của e từ giây phút ấy.
            </p>
          </div>
        </div>
        <div
          className={
            "m-title h-[800px] bg-red flex matcha flex-col items-center justify-center"
          }
        >
          <img
            src={meet}
            alt=""
            className=" w-[350px] h-auto mt-5 mb-7 shadow-md shadow-vitange_green-20"
          />
        </div>
        <div className="mm-meet row-span-2 h-[auto] flex flex-col p-3 justify-center gap-3 pt-10  text-white items-center">
          <div className="checkin text-vitange_green-40 font-vollkorn text-3xl">
            Checkin
          </div>
          <div className="grid grid-cols-1 gap-4">
            {DalatPost.map((post, i) =>
              i % 2 == 0 ? (
                <div
                  key={"dalat" + i}
                  className="item-post flex flex-row gap-5 h-[300px] bg-vitange_green-20 text-white w-[60%] border  mx-auto "
                >
                  <img
                    src={post.image}
                    alt=""
                    className={`h-full w-[50%] object-cover flex-1 ${
                      i == 2 ? "object-left " : ""
                    }`}
                  />
                  <div className="detail  flex flex-col gap-3 py-10 pr-2 text-white  flex-1">
                    <div className="font-dosis text-xs ">{post.date}</div>
                    <div className="font-playfair font-bold ">{post.title}</div>

                    <div className="font-dosis ">{post.description}</div>
                  </div>
                </div>
              ) : (
                <div
                  key={"dalat" + i}
                  className="item-post flex flex-row gap-5 h-[300px] w-[60%] border  mx-auto "
                >
                  <img
                    src={post.image}
                    alt=""
                    className={`h-full w-[50%] object-cover    flex-1
                    }`}
                  />
                  <div className="detail  flex flex-col gap-3 py-10  flex-1 pr-2 text-black">
                    <div className="font-dosis text-xs ">{post.date}</div>
                    <div className="font-playfair font-bold ">{post.title}</div>

                    <div className="font-dosis  ">{post.description}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div
          className={
            "m-title h-[800px] bg-red flex  flex-col  items-center justify-center"
          }
        >
          <div className="font-vollkorn text-4xl w-[350px]  text-vitange_green-40">
            <p>Mermory</p>
            <p>DaLat 🌲</p>
          </div>
          <div className="h-[2px] bg-vitange_green-20 w-[350px] my-2"></div>
          <div className="font-dosis  text-lg  w-[350px] text-vitange_green-20">
            <p className="text-xl pb-2">
              Có nơi mà khi nhắc đến sẽ làm bạn nhớ về một nửa của mình.
            </p>
            <p>
              Tụi mình đã đến đây rất nhiều lần thế nhưng khi nhắc về Đà Lạt thì
              cảm giác bồi hồi trong lòng vẫn hiện hữu. Hàng quán hay các địa
              điểm checkin trở nên quen thuộc nhưng mà để hỏi về nơi mình muốn
              đến nhất thì vẫn là Đà Lạt. Đây cũng là nơi đầu tiên tụi mình cùng
              nhau trải nghiệm. Chắc hẳn các bạn cũng như mình và có thật nhiều
              kỉ niệm với nơi này. Cùng tham quan một số điểm checkin ở đây nha
              ^ ^
            </p>
          </div>
        </div>
        <div className={"m-title "}>
          <div className="bg-red-300 h-[800px] w-full flex flex-col justify-center items-center ">
            <div className="bg-black h-full  overflow-hidden relative ">
              <img
                ref={ref}
                src={dalat5}
                alt=""
                className="h-full w-[140vw] object-cover object-center max-w-[140%]"
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Moment;

{
  /* <div className="item-post flex flex-row gap-5 h-[300px] w-[50%] border bg-red-300 border-red-200 mx-auto ">
<img
  src={dalat1}
  alt=""
  className="h-full w-[50%] object-cover object-center "
/>
<div className="detail  flex flex-col gap-3 py-10 pr-2 text-white">
  <div className="font-dosis text-xs ">Mar 22 * 2 min</div>
  <div className="font-playfair font-bold ">
    Transform your winter blues into winter creativity
  </div>
  <div className="font-dosis ">
    Create a blog post subtitle that summarizes your post in a few
    short, punchy sentences and entices your audience to
  </div>
</div>
</div>
<div className="item-post flex flex-row gap-5 h-[300px] w-[50%] border  mx-auto ">
<img
  src={dalat2}
  alt=""
  className="h-full w-[50%] object-cover object-left "
/>
<div className="detail  flex flex-col gap-3 py-10 pr-2 text-black">
  <div className="font-dosis text-xs ">Mar 22 * 2 min</div>
  <div className="font-playfair font-bold ">
    Transform your winter blues into winter creativity
  </div>
  <div className="font-dosis ">
    Create a blog post subtitle that summarizes your post in a few
    short, punchy sentences and entices your audience to
  </div>
</div>
</div> */
}
{
  /* <div className={"m-title "}>
          <div className="bg-red-300 h-[800px] w-full flex flex-col justify-center items-center ">
            <div className="bg-black h-full  overflow-hidden relative ">
              <img
                ref={ref}
                src={cadong}
                alt=""
                className="h-full w-[120%] object-cover object-center max-w-[120%]"
              />
             
            </div>

   
          </div>
        </div> */
}

{
  /* <div className="h-[300px] w-[500px] bg-black overflow-hidden">
        <Parallax
          speed={10}
          scale={[1, 1]}
          translateX={[-20, 10]}
          style={{ overflow: "hidden" }}
          translateY={["", ""]}
        ></Parallax>
      </div> */
}
