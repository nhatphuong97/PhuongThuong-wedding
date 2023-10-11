import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { color, motion, Variants } from "framer-motion";
import logoHeader from "./../../../../src/img/savethedate_wh.gif";
import airplane from "./../../../../src/img/airplane.png";
Tailwin.propTypes = {};

function Tailwin(props) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);
  const displayResponsiveMenu = () => {
    setShowMenu(!showMenu);
  };
  const scrollRef = useRef(null);

  const showHideVar = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    console.log({ "1 chạy": "1" });
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      console.log({ "2 chạy": "2" });
    };
  }, []);

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

  // const addClassName
  return (
    <>
      {/* ref={scrollRef} style={{ overflow: "scroll" }} */}
      <div className="root static">
        {/* <header className="py-6 fixed z-50 w-full"></header> */}
        <div
          className="slider flex relative h-[600px] bg-[url('/src/img/DSC_4827.JPG')] bg-fixed bg-cover
               bg-no-repeat bg-center bg-slate-600 ]"
        >
          <div className="w-full h-full bg-black bg-opacity-30  flex justify-center ">
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
          <div className=" absolute w-16 lg:w-20 flex bottom-0 left-1/3 ">
            <motion.img
              initial={{ opacity: 1, x: 0, y: 0 }}
              whileInView={{ opacity: 1, x: 50, y: 0 }}
              viewport={{ root: scrollRef }}
              transition={{ duration: 1 }}
              src={airplane}
              alt=""
              className=""
            />
          </div>
        </div>
        <nav className="flex flex-row justify-between items-center sticky z-50 top-0">
          <motion.div
            whileHover={{ color: "#fca5a5", scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            // animate={{ fontSize: 50 }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2 }}
            variants={showHideVar}
            className="logo font-bold basis-2/6 text-center text-xl font-mono cursor-pointer font-dosis"
          >
            WeddingPages.
          </motion.div>
          <ul
            ref={menuRef}
            className={`${showMenu ? "flex" : "hidden"} tw-menu-item-show 
                lg:flex lg:basis-3/6 font-roboto lg:item-center transition-all duration-300
                 gap-4 uppercase text-sm text-gray-500 font-medium lg:justify-cente animate-slide-down`}
          >
            <li className="tw-top-menu-item">
              <NavLink to={""}>Home</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Our Products </NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>About</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Contact</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Style Guide</NavLink>
            </li>
            <li className="tw-top-menu-item">
              <NavLink to={""}>Nhật Phương 4697</NavLink>
            </li>
          </ul>
          <ul className="basis-3/6 lg:basis-1/6 flex flex-row justify-end  font-medium ml-5 relative text-gray-500 ">
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
          </ul>
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

export default Tailwin;
