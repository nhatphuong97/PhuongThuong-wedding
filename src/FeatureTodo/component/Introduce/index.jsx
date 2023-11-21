import React, { forwardRef } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import vo from "../../../img/vo.png";
import chong from "../../../img/chong.png";

const Introduce = (props, ref) => {
  //phần phía trên test ref
  const itemRef = ref;
  console.log("ref", itemRef);
  return (
    <div
      ref={itemRef}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      {/* <div className="introduce-main mx-auto justify-center my-auto relative"> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="introduce-title relative flex flex-row justify-center items-center w-full "
      >
        {/* <div className="introduce-line"></div> */}
        <div className="title  bg-heading-tile w-14 items-center bg-origin-border border-spacing-3 h-14 bg-contain bg-no-repeat"></div>
        <div className="mm-title text-4xl mx-5 font-cuprum text-center text-red-400">
          Introduce
        </div>

        {/* <div className="introduce-line"></div> */}
      </motion.div>

      <div className="h-[50px]"></div>

      <div className=" grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-4 transition-all duration-200">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="introduce-image flex overflow-hidden "
        >
          <div className="introduce-image-vochong">
            <img
              className="w-full h-full object-contain transition-transform duration-300 scale-125  hover:scale-110"
              loading="lazy"
              src={chong}
              alt="chong"
            />
          </div>
        </motion.div>
        <div className="introduce-info">
          <div className="introduce-name">
            <p>Nhật Phương</p>
            <p className="font-playfair text-base">Groom</p>
          </div>
          <div className="introduce-description">
            {/* Nhật Phương */}
            {/* Chàng trai IT vui vẻ, hòa đồng. Luôn yêu thương gia đình và những
            người xung quanh. */}
          </div>
        </div>
        <div className="introduce-info order-last md:order-none">
          <div className="introduce-name">
            <p>Hoài Thương</p>
            <p className="font-playfair text-base">Bridge </p>
          </div>
          <div className="introduce-description">
            {/* Hoài Thương */}
            {/* Một cô gái cá tính, mạnh mẽ và phóng khoáng. Luôn thích khám phá
            những điều mới mẻ, đi đến những nơi chưa từng đến và mang trong mình
            một tâm hồn tự do. */}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="introduce-image flex overflow-hidden"
        >
          <div className=" introduce-image-vochong">
            <img
              className="w-full h-full object-contain transition-transform duration-300 scale-125 hover:scale-110"
              loading="lazy"
              src={vo}
              alt="vo"
            />
          </div>
        </motion.div>
      </div>
      <div className="h-[100px]"></div>

      <div className=" font-cuprum text-red-400  text-xl pt-5 text-center tracking-normal ">
        <p>
          Hạnh phúc nhất không phải giây phút được cùng nhau nắm tay bước đến lễ
          đường
        </p>
        <p> Mà là giữ mãi nụ cười ấy theo năm tháng.</p>
      </div>
    </div>
  );
};

export default forwardRef(Introduce);
