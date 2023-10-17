import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { color, motion, Variants } from "framer-motion";

const Introduce = (props, ref) => {
  //phần phía trên test ref
  const itemRef = ref;
  console.log("ref", itemRef);
  return (
    <div
      ref={itemRef}
      className="w-full h-full flex flex-col justify-center items-center "
    >
      {/* <div className="introduce-main mx-auto justify-center my-auto relative"> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="introduce-title flex flex-row items-center"
      >
        <div className="introduce-line"></div>
        <div className="title bg-heading-tile w-20 bg-origin-border border-spacing-3 h-20 flex bg-contain bg-no-repeat">
          {" "}
          {/* Đám cưới hả Bà Zà */}
        </div>
        <div className="introduce-line"></div>
      </motion.div>
      <div className=" grid md:grid-cols-2 grid-cols-1 grid-flow-row gap-2 transition-all duration-200">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="introduce-image flex overflow-hidden"
        >
          <div className="introduce-image-vochong bg-image-chong"></div>
        </motion.div>
        <div className="introduce-info">
          <div className="introduce-name">Groom Nhật Phương </div>
          <div className="introduce-description">
            {/* Nhật Phương */}
            {/* Chàng trai IT vui vẻ, hòa đồng. Luôn yêu thương gia đình và những
            người xung quanh. */}
          </div>
        </div>
        <div className="introduce-info order-last md:order-none">
          <div className="introduce-name">Bridge Hoài Thương</div>
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
          <div className="bg-image-vo introduce-image-vochong"></div>
        </motion.div>
      </div>

      {/* <div className="introduce-image flex overflow-hidden">
          <div className="bg-image-chong scale-110 bg-top mb-0 flex w-full h-full bg-contain"></div>
        </div>
        <div className=" h-[400px]  w-[400px] flex bg-love-20 flex-col justify-center  overflow-hidden">
          <div className="introduce-name">Nhật Phương</div>
          <div className="introduce-description">
            Chàng trai IT vui vẻ, hòa đồng. Luôn yêu thương gia đình và những
            người xung quanh.
          </div>
        </div>
        <div className="  h-[400px]  w-[400px] flex bg-love-20  flex-col justify-center  overflow-hidden">
          <div className="introduce-name">Hoài Thương</div>
          <div className="introduce-description">
            Một cô gái cá tính, mạnh mẽ và phóng khoáng. Luôn thích khám phá
            những điều mới mẻ, đi đến những nơi chưa từng đến và mang trong mình
            một tâm hồn tự do.
          </div>
        </div>
        <div className="introduce-image flex ">
          <div className="bg-image-vo scale-110 bg-top mb-0 flex w-full h-full bg-contain"></div>
        </div> */}
      {/* <div
          className="flex flex-col h-[800px] w-[400px]  
  bg-no-repeat bg-center relative"
        >
          
        </div> */}

      {/* <div className="introduce-phuong absolute left-[30%] top-[10%] w-40 h-60  bg-love-20"></div> */}
      {/* <div className="introduce-thuong absolute left-1/4 top-[60%] w-40 h-40 rounded-full bg-white"></div> */}
      {/* </div> */}
    </div>
  );
};

export default forwardRef(Introduce);
