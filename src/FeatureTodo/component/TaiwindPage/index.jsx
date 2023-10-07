import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
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

  const handleOutsideClick = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      console.log("hahs", event.target !== buttonRef.current);
      console.log("hahs", event.target);
      console.log("hahs", buttonRef.current);
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  // const addClassName
  return (
    <>
      <div className="root">
        <div className="content-wrapper max-w-screen-2xl text-base mx-auto px-8 bg-slate-200relative">
          <header className="py-6 lg:mx-10">
            <nav className="flex flex-row justify-between items-center relative">
              <div className="logo font-bold basis-1/6 lg:2/6 text-center text-xl font-mono cursor-pointer">
                TailwindPages.
              </div>
              <ul
                ref={menuRef}
                className={`${showMenu ? "flex" : "hidden"} tw-menu-item-show 
                lg:flex lg:basis-3/6 font-sans lg:item-center transition-all duration-300
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
              <ul className="basis-4/6 lg:basis-1/6 flex flex-row justify-end  font-medium ml-5 relative text-gray-500 ">
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
                    <span className="tw-badge-item bg-red-400 mx-1">10</span>
                  </a>
                </li>
              </ul>
              <div className="lg:hidden basis-1/6 flex item-center cursor-pointer">
                <svg
                  ref={buttonRef}
                  onClick={() => displayResponsiveMenu()}
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
              </div>
            </nav>
          </header>
          <main>
            <div className="slider flex-row relative flex h-[600px] bg-[url('/src/img/DSC_4827.JPG')] bg-cover bg-no-repeat bg-center bg-slate-600 ">
              <div className="w-full h-full bg-black bg-opacity-30"></div>
            </div>
            <div className="story">story</div>
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
