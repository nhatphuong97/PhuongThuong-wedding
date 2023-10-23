import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Calendar from "../Calendar";
import logo from "../../../img/flower.webp";

import { useScroll, useTransform, motion } from "framer-motion";
Invitation.propTypes = {};

function Invitation(props) {
  const divElementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: { divElementRef },
    offset: ["0 1", "1.33 1"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div>
      <div className="invitation-main">
        {/* <div className="invi-cake"></div> */}
        <div className="invi-content">
          <div className="bg h-full w-2/4 flex  flex-col items-center ps-20  ">
            <div className="text-white  flex flex-col justify-center items-center pt-20">
              <div className="font-vollkorn  text-3xl  tracking-[.35em] uppercase">
                the Wedding weekend
              </div>
              <div className="bg-flower max-w-full h-auto bg-no-repeat bg-contain bg-center">
                <img src={logo} alt="logo" />
              </div>
              <div className="text-lg text-red-400 font-cuprum">
                Saturday 6 Jan. 2024
              </div>
              <div className="bg-white w-[200px] h-[3px] rounded-md text-white font-vollkorn mt-5"></div>

              <div className="text-2xl tracking-[.35em] uppercase text-white font-vollkorn pt-5">
                For You Restaurant
              </div>
            </div>

            {/* <div className=" font-dancing text-red-400  text-xl pt-5  tracking-normal ">
              <p>
                Hạnh phúc nhất không phải giây phút được cùng nhau nắm tay bước
                đến lễ đường
              </p>
              <p> Mà là giữ mãi nụ cười ấy theo năm tháng.</p>
            </div> */}
            <div className=" font-dancing text-red-500   text-2xl pt-5  tracking-widest ">
              {/* <p>
                We are delighted to invite you to our wedding celebration. It
                will be intimate, cozy and full of love. Get ready for a day of
                joy and fun.
              </p> */}
            </div>
          </div>
          <div className=" h-full  py-32 flex-col w-1/4 flex  rounded-tr-full">
            <Calendar />
          </div>
          <motion.div
            animate={{
              y: [150, 0],
              // y: [0, 50, 0, 50, 0],
              opacity: 1,
            }}
            transition={{
              duration: 1,
              // delay: 0.3,
              // ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 1 }}
            // whileHover={{ scale: 1.2 }}
            className="bg-cake h-[500px] w-[400px] bg-cover bg-no-repeat absolute
           -bottom-[40%] ml-auto mr-auto left-[25%] right-0   rounded-t-full text-center font-medium text-2xl
            text-red-400 font-pacifico shadow-red-200 shadow-lg"
          >
            <div className="pt-10"> Invite You To Celebrate Our Wedding</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
