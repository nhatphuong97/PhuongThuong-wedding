import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Calendar from "../Calendar";
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
          <div className="bg h-full w-2/4 my-32"></div>
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
              duration: 0.7,
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
