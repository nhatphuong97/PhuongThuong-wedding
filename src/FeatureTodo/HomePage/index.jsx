import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { color, motion, Variants } from "framer-motion";
import logoHeader from "./../../img/savethedate_wh.gif";
import airplane from "./../../img/airplane.png";
import CountDownTime from "../component/CountDownTime";
HomePageWedding.propTypes = {};

function HomePageWedding(props) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log("show", showMenu);
  }, [showMenu]);
  const displayResponsiveMenu = () => {
    setShowMenu(!showMenu);
  };

  const showHideVar = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    console.log({ "1 chạy": "1" });
    scroll();
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      console.log({ "2 chạy": "2" });
    };
  }, []);

  let lastScrollY = 0;
  // let ticking = false;
  window.addEventListener("scroll", function (e) {
    // lastScrollY = window.scrollY;
    // console.log(lastScrollY);
    // scroll();
  });

  const handleOutsideClick = (event) => {
    // console.log("hahs", event.target !== buttonRef.current);
    // console.log({
    //   event: event.target,
    //   buttonRef: buttonRef.current,
    //   menuRef: menuRef.current,
    //   showMenu: showMenu,
    // });
    // console.log({
    //   1: menuRef.current,
    //   2: menuRef.current.contains(event.target),
    //   3: showMenu,
    // });

    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setShowMenu(false);
    }
  };

  //Event Scroll menu
  // document.addEventListener("DOMContentLoaded", function () {

  // });

  const scroll = () => {
    const elementToScroll = document.querySelector(".nav-show");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        // console.log("entries.intersectionRatio", entries.intersectionRatio);

        // console.log({ 1: entries.intersectionRatio });

        entries.forEach((entry) => {
          console.log("nav", entry);
          console.log("nav", entries.intersectionRatio);
          entry.target.classList.toggle(
            "isSticky",
            entry.intersectionRatio < 1
          );

          if (entry.intersectionRatio === 1) {
            entry.target.classList.remove("bg-blue-600");
            entry.target.classList.add("bg-gray-200");
          } else {
            entry.target.classList.add("bg-blue-600");
            entry.target.classList.remove("bg-gray-200");
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(elementToScroll);
  };

  // scroll();
  // const addClassName
  return (
    <>
      {/* ref={scrollRef} style={{ overflow: "scroll" }} */}
      <div className="root static">
        {/* <header className="py-6 fixed z-50 w-full"></header> */}
        <div
          className="slider flex w-full relative lg:h-[700px]  md:h-[600px] h-[500px]  bg-[url('/src/img/DSC_4827.JPG')] bg-local md:bg-fixed bg-cover
               bg-no-repeat bg-center bg-slate-600 ] -z-10"
        >
          <div className="w-full h-full bg-black bg-opacity-30  flex flex-col justify-center ">
            <div className="justify-center items-center flex ">
              <div className="tw-name-main">Nhật Phương</div>
              <motion.img
                src={logoHeader}
                alt=""
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={` lg:h-[150px] h-[20%]`}
              />
              <div className="tw-name-main">Hoài Thương</div>
            </div>
          </div>
          <div className=" flex absolute items-center bottom-0 left-0 right-0 mb-5 justify-center">
            <CountDownTime listData={12}>
              12 ngày 3 giờ 15 phút 8 giây
            </CountDownTime>
          </div>
          {/* DIV Máy bay ( đang ẩn) <div className=" absolute w-16 lg:w-20 flex bottom-0 left-1/3 ">
            <motion.img
              initial={{ opacity: 1, x: 0, y: 0 }}
              whileInView={{ opacity: 1, x: 50, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 1 }}
              src={airplane}
              alt=""
              className=""
            />
          </div> */}
        </div>

        {/* END background */}
        <nav className="nav-show p-[1em] pt-[calc(1em + 1px)] flex flex-row justify-between items-center transition-all duration-300 py-3 sticky z-50 -top-1">
          <motion.div
            whileHover={{ color: "#4ddf87", scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            // animate={{ fontSize: 50 }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={showHideVar}
            className="logo font-bold basis-2/6 text-black text-center text-xl lg:text-2xl font-mono cursor-pointer font-dosis"
          >
            WeddingPages.
          </motion.div>
          <ul
            ref={menuRef}
            className={`${showMenu ? "flex" : "hidden"} tw-menu-item-show 
                lg:flex lg:basis-3/6 font-cuprum font-bold lg:item-center transition-all duration-300
                 gap-4 uppercase text-sm text-gray-500 lg:justify-cente animate-slide-down`}
          >
            <li className="tw-top-menu-item">
              <NavLink to={""}>Introduce</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Moments</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Album</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Events</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Send Love</NavLink>
            </li>
          </ul>
          {/* DIV Giỏ Hàng <ul className="basis-3/6 lg:basis-1/6 flex flex-row justify-end  font-medium ml-5 relative text-gray-500 ">
            <li className="tw-top-menu-item">
              <a href="/" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" inline-block w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span>Cart</span>
                <span className="tw-badge-item bg-red-400">10</span>
              </a>
            </li>
          </ul> */}
          <div className="lg:hidden relative  h-full w-full basis-1/6 flex item-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="tw-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <div
              ref={buttonRef}
              className="absolute h-[1.5rem]  w-[1.5rem] "
              onClick={displayResponsiveMenu}
            />
          </div>
        </nav>
        <div className="content-wrapper max-w-screen-2xl mx-auto px-8  text-base bg-slate-200 relative">
          <main>
            {/* <motion.div
              initial={{ opacity: 0, tra: 20 }}
              whileInView={{ opacity: 1, position: 200 }}
              transition={{ duration: 0.4 }}
              className="slider flex-row relative flex h-[600px] bg-[url('/src/img/DSC_4827.JPG')] items-center bg-cover bg-no-repeat bg-center bg-slate-600 animate-slide-down "
            >
              <div className="w-full h-full bg-black bg-opacity-30"></div>
            </motion.div> */}
            <div className="test-motion">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                animate={{}}
                className="font-dosis item-center flex justify-center font-bold my-20"
              >
                Events & Parties
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                animate={{ delay: 1 }}
                className="font-dosis item-center flex justify-center font-bold my-20"
              >
                Events & Parties
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                animate={{ delay: 1 }}
                className="font-dosis item-center flex justify-center font-bold my-20"
              >
                Events & Parties
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                animate={{ delay: 1 }}
                className="font-dosis item-center flex justify-center font-bold my-20"
              >
                Events & Parties
              </motion.div>
            </div>
            <div className="story flex h-[1000px]">story</div>
            <div className="featured-mugs">featured-mugs</div>
            <div className="more-product">more-product</div>
            <div className="coffe-magazines">coffe-magazines</div>
            <div className="livestyle-stories">livestyle-stories</div>
            <div className="subscribes">subscribes</div>
          </main>
          <footer>footer</footer>
        </div>
      </div>
    </>
  );
}

export default HomePageWedding;
