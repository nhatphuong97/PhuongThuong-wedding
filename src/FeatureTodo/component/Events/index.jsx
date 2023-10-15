import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";
const events = (props, ref) => {
  //phần phía trên test ref
  const itemRef = ref;
  console.log("ref", itemRef);
  return (
    <div ref={itemRef} className="w-[100vw] flex">
      <div className="events-main flex flex-row container mx-auto justify-center my-auto relative">
        <div className="events-one basis-1/3 bg-love-20 "> </div>
        <div
          className=" flex basis-2/3 w-[1/2vw] h-[700px] bg-image-one bg-cover
  bg-no-repeat bg-center bg-slate-600"
        ></div>

        <div className="events-phuong absolute left-[30%] top-[10%] w-40 h-60  bg-white"></div>
        {/* <div className="events-thuong absolute left-1/4 top-[60%] w-40 h-40 rounded-full bg-white"></div> */}
      </div>
    </div>
  );
};

export default forwardRef(events);
