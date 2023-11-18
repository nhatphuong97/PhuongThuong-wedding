import React, { useEffect, useState, useCallback } from "react";
import logoHeader from "./../../../img/savethedate_wh.gif";
import CountDownTime from "../CountDownTime";
import { motion, AnimatePresence } from "framer-motion";

const listImage = [
  "https://i.imgur.com/JMn4EKH.jpg",
  "https://i.imgur.com/Q3xyZlF.jpg",
];
const variable = {
  inital: {
    opacity: 0,
    scale: 1,
  },
  animate: {
    opacity: [0, 1, 1, 1, 0],
    scale: 1.2,
  },
  //   exit: {
  //     // x: -400,
  //     x: 2000,
  //     opacity: 0,
  //   },
};

function HeaderSlide(props) {
  const [index, setIndex] = useState(0);

  const next1 = useCallback(() => {
    if (index === listImage.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);

    console.log(index);
  });

  const next2 = () => {
    console.log(index);
    if (index === listImage.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);

    console.log(index);
  };
  console.log({ rereder: "rerender" });

  //   const prev1 = () => {
  //     console.log({ truoc: index });

  //     if (index === 0) {
  //       setIndex(listImage.length - 1);
  //       return;
  //     }
  //     setIndex(index - 1);

  //     console.log(index);
  //   };

  useEffect(() => {
    const id = setInterval(next2, 4000);
    return () => clearInterval(id);
  }, [index]);
  return (
    // {props.className}
    <div
      className="flex w-full bg-black relative lg:h-[900px]  md:h-[800px] h-[600px]  bg-local md:bg-fixed bg-cover overflow-hidden
    bg-no-repeat bg-center] -z-10"
    >
      <div className="absolube w-full h-auto flex justify-between ">
        <motion.img
          className="w-full object-cover"
          variants={variable}
          initial="inital"
          animate="animate"
          loading="lazy"
          transition={{ duration: 4, ease: "linear" }}
          src={listImage[index]}
          alt=""
          key={listImage[index]}
        />
      </div>
      <div className="w-full absolute h-full bg-black bg-opacity-20  flex flex-col justify-center " />

      <div className="w-full absolute h-full flex flex-col justify-center overflow-hidden ">
        <div className="justify-center items-center flex flex-col">
          <div className="tw-name-main">Nhật Phương</div>
          <img loading="lazy" src={logoHeader} alt="" className={` h-[10%]`} />
          <div className="tw-name-main">Hoài Thương</div>
        </div>
      </div>
      <div className=" flex absolute items-center bottom-0 left-0 right-0 mb-5 justify-center">
        <CountDownTime listData={12}></CountDownTime>
      </div>
    </div>
  );
}

export default HeaderSlide;
