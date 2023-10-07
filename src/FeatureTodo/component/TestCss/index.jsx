import React from "react";
import PropTypes from "prop-types";

TestCss.propTypes = {};

function TestCss(props) {
  return (
    <>
      <div
        className=" grid grid-cols-2 gap-4 m-5"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <span className="animate-waving-hand">👋🏻</span>
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="max-w-xs "
            alt="Louvre"
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-slate-500 opacity-0 hover:opacity-100 transition duration-300"></div>
          </a>
        </div>
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="max-w-xs hover:scale-125  duration-300"
            alt="Louvre"
          />
          {/* <a href="#!">
            <div class="absolute bottom-0 left-0  right-0 top-0 h-full w-full bg-slate-500 opacity-0 hover:opacity-100 transition duration-300"></div>
          </a> */}
        </div>
        {/* Clas hoàng dũng hiệu ứng chạy từ dứi chạy lên */}

        <svg
          data-te-animation-init
          data-te-animation-reset="true"
          data-te-animation="animate-trans-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-11 w-11 animate-trans-right"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>

        <img
          className="animate-trans-right"
          src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/5/3/e/c53e20e9ecf03b0bb4315deb90fe9063.jpg"
          alt="Louvre"
        />
      </div>

      <div className=" h-sceen justify-center items-center group h-100  w-full bg-slate-500">
        <div className=" max-w-xs bg-red-400  w-full h-full z-4 -left-96 hover:left-0">
          hiệu ứng
        </div>
        <img
          className="max-w-xs z-2 animate-trans-right transition"
          src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/5/3/e/c53e20e9ecf03b0bb4315deb90fe9063.jpg"
          alt="Louvre"
        />

        <h1 className="flex font-semibold text-purple-600">
          Hello <span className="animate-waving-hand">👋🏻</span>, LogRocket Blog
        </h1>
      </div>
    </>
  );
}

export default TestCss;
