import React, { memo } from "react";
import PropTypes from "prop-types";
import image from "./../../../img/bg-rung.webp";
Album.propTypes = {};
const listImage = [
  "https://i.imgur.com/W8bbUkA.jpg",
  "https://i.imgur.com/W8bbUkA.jpg",
  "https://i.imgur.com/W8bbUkA.jpg",
];
const listImage2 = [
  "https://i.imgur.com/W8bbUkA.jpg",
  "https://i.imgur.com/W8bbUkA.jpg",
  "https://i.imgur.com/W8bbUkA.jpg",
  "https://i.imgur.com/W8bbUkA.jpg",
  "https://i.imgur.com/W8bbUkA.jpg",
  "https://i.imgur.com/W8bbUkA.jpg",
];

function Album(props) {
  return (
    <div class="grid grid-cols-3 items-center gap-4">
      {/* {listImage.map((image, i) => (
        <div className="">
          <img
            loading="lazy"
            src={image}
            alt=""
            className={`object-cover flex-1  }`}
          />
        </div>
      ))} */}
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>
      <div className="col-span-2 bg-red-100 h-full w-auto ">
        <img loading="lazy" src={image} alt="" className={`object-cover   }`} />
      </div>
      <div className="row-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-contain flex-1 h-[100%] w-full`}
        />
      </div>
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>
      <div className="col-span-2">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>{" "}
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>{" "}
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>{" "}
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>{" "}
      <div className="col-span-1">
        <img
          loading="lazy"
          src={image}
          alt=""
          className={`object-cover flex-1  }`}
        />
      </div>
    </div>
  );
}

export default memo(Album);
