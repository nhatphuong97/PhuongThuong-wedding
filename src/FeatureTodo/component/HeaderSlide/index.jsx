import React, { useEffect, useState, useCallback } from "react";
import logoHeader from "./../../../img/savethedate_wh.gif";
import CountDownTime from "../CountDownTime";
import { motion, AnimatePresence } from "framer-motion";

const listImage = [
  "https://i.imgur.com/JvhcUsv.jpg",
  "https://i.imgur.com/E2Flqah.jpg",
  "https://i.imgur.com/ymoNuJS.jpg",
  "https://i.imgur.com/xVzvYGs.jpg",
];
const variable = {
  inital: {
    opacity: 0.7,
    scale: 1,
  },
  animate: {
    opacity: 1,
    scale: 1.2,
  },
  exit: {
    // x: -400,
    scale: 1,
    opacity: 0,
  },
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

  //   useEffect(() => {
  //     setTimeout(function () {
  //       next1();
  //     }, 3000);
  //   });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log({ rereder: "hjahaah" });
      next2();
    }, 3000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    // {props.className}
    <div
      className="flex w-full  lg:h-[900px]  md:h-[800px] h-[600px]  bg-local md:bg-fixed bg-cover overflow-hidden
    bg-no-repeat bg-center] -z-10"
    >
      <div className="absolube w-full h-auto flex justify-between ">
        {/* <div
          className=" absolute left-0 text-white text-2xl font-medium bg-red-400  cursor-pointer"
          onClick={prev1}
        >
          prev
        </div> */}

        <motion.img
          className="w-full object-cover"
          variants={variable}
          initial="inital"
          animate="animate"
          loading="lazy"
          transition={{ duration: 2 }}
          src={listImage[index]}
          alt=""
          key={listImage[index]}
        />
        <div
          className=" absolute right-0 text-white text-2xl font-medium bg-red-400 cursor-pointer"
          onClick={next1}
        >
          next
        </div>
      </div>
      {/* <div className="w-full relative h-full bg-black bg-opacity-20  flex flex-col justify-center ">
        <div className="justify-center items-center flex ">
          <div className="tw-name-main">Nhật Phương</div>
          <img
            loading="lazy"
            src={logoHeader}
            alt=""
            className={` lg:h-[150px] h-[20%]`}
          />
          <div className="tw-name-main">Hoài Thương</div>
        </div>
      </div>
      <div className=" flex absolute items-center bottom-0 left-0 right-0 mb-5 justify-center">
        <CountDownTime listData={12}></CountDownTime>
      </div> */}
    </div>
  );
}

export default HeaderSlide;
