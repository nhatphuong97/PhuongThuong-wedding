import React from "react";
import PropTypes from "prop-types";
import meet from "./../../../img/meet.webp";
import meet from "./../../../img/cadong1.webp";

Moment.propTypes = {};

function Moment(props) {
  return (
    <div className="flex flex-col w-full bg-white h-auto">
      <div className="grid grid-cols-2 ">
        <div className="mm-meet  flex flex-col gap-3 py-10  items-center">
          <div className="font-playfair text-red-300 text-3xl ">
            Our Love Story
          </div>
          <img src={meet} alt="" className=" w-96 h-auto" />

          <div className="font-playfair text-red-300 text-xl  w-96">
            <p> We met on a rainy day at a local flea market.</p>
            <p>
              As we talked and wandered, we found that we didn't want to go our
              separate ways.
            </p>
            <p>Before we knew it, the whole day had passed.</p>
            <p></p>
          </div>
          <div></div>
        </div>
        <div className={`m-title bg-red-200 bg-[url(${required})]`}> </div>
      </div>
    </div>
  );
}

export default Moment;
