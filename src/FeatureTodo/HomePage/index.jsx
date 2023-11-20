import React, {
  useState,
  useRef,
  useEffect,
  lazy,
  Suspense,
  Profiler,
} from "react";

import song from "../constant/song";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
// import { HashLink as Link } from "react-router-hash-link";
import "./style.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
// import { playSong, pauseSong } from "../component/Redux/action/music_action";
import { songSelector } from "../component/Redux/selectors/stateSelector";
import { ReactComponent as mute } from "./../../icon/mute.svg";
import { ReactComponent as unMute } from "./../../icon/unmute.svg";

import HeaderSlide from "../component/HeaderSlide";
import { songsSlice } from "../component/Redux/reducer/music_reducer";
import { useParallax } from "react-scroll-parallax";

const Introduce = React.lazy(() => import("../component/Introduce"));
const Invitation = React.lazy(() => import("../component/invitation"));
const LoveSongMain = React.lazy(() => import("../component/LoveSong"));
const ParallaxDevide = React.lazy(() => import("../component/ParallaxDevide"));
const Moment = React.lazy(() => import("../component/Moment"));
const Album = React.lazy(() => import("../component/Album"));
const Events = React.lazy(() => import("../component/Events"));
HomePageWedding.propTypes = {};

function HomePageWedding(props) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const headerRef = useRef(null);
  const introduceRef = useRef(null);
  const events = useRef(null);
  const divElementRef = useRef(null);
  const refNav = useRef(null);

  // Redux here
  const dispatchRedux = useDispatch();
  const songState = useSelector(songSelector);
  console.log(songState);

  const handlePlayAndPauseSong = () => {
    if (songState.isPlaying) {
      // dispatchRedux(pauseSong());
      dispatchRedux(songsSlice.actions.pauseSong({ song: 12, status: "song" }));
    } else {
      // dispatchRedux(playSong());
      dispatchRedux(songsSlice.actions.playSong(12, "song"));
      // dispatchRedux(createSong());
    }
  };

  const [color, setColor] = useState("#FCA5A5");
  const [classCss, setClassCss] = useState("isNomarl");
  const [classCssSong, setClassCssSong] = useState("isNomarlSong");

  const { ref } = useParallax({
    speed: 40,
    translateY: ["-30", "40"],
    easing: "easeInOutQuad",
  });
  window.addEventListener("scroll", () => {
    // let elem = document.querySelector(".nav-show");
    let invitation = document
      .querySelector(".devide-invitation")
      .getBoundingClientRect();
    let introduce = document
      .querySelector(".devide-introduce")
      .getBoundingClientRect();
    let moments = document
      .querySelector(".devide-moments")
      .getBoundingClientRect();
    let love_song = document
      .querySelector(".devide-love-song")
      .getBoundingClientRect();
    let root = document.querySelector(".root").getBoundingClientRect();

    let invitationTop = invitation.top - root.top;
    let introduceTop = introduce.top - root.top;
    let momentsTop = moments.top - root.top;
    let loveSongTop = love_song.top - root.top;
    if (window.scrollY < 620) {
      setColor("#FCA5A5");
      document.title = "Wedding ❤️";

      setClassCss("isNomarl");
      setClassCssSong("isNomarlSong");
    } else if (
      invitationTop <= window.scrollY &&
      window.scrollY < introduceTop
    ) {
      setColor("#F87A75");
      document.title = "Invitation ❤️";
      setClassCss("isInvitation");
      setClassCssSong("isInvitationSong");
    } else if (introduceTop <= window.scrollY && window.scrollY < momentsTop) {
      setColor("#fff");
      document.title = "Introduce ❤️";
      setClassCss("isIntroduce");
      setClassCssSong("isIntroduceSong");
    } else if (momentsTop <= window.scrollY && window.scrollY < loveSongTop) {
      setColor("#fff");

      document.title = "Moment 🌲";
      setClassCss("isMoments");
      setClassCssSong("isMomentsSong");
    } else if (window.scrollY > momentsTop) {
      setColor("#fff");
      document.title = "Love Song ❤️";

      setClassCss("isLoveSong");
      setClassCssSong("isNomarlSong");
    } else if (loveSongTop <= window.scrollY) {
      setColor("#fff");
      document.title = "Love Song ❤️";

      setClassCss("isLoveSong");
      setClassCssSong("isNomarlSong");
    }
  });

  const displayResponsiveMenu = () => {
    setShowMenu(!showMenu);
  };
  // const { scrollYProgress } = useScroll({
  //   target: { divElementRef },
  //   offset: ["0 1", "1.33 1"],
  // });

  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  // const showHideVar = {
  //   visible: { opacity: 1 },
  //   hidden: { opacity: 0 },
  // };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setShowMenu(false);
    }
  };

  const handleScrollToHeader = () => scroll.scrollToTop();

  //Sự kiện handle khi vùng view mong muốn đang ở trên màn hình
  //   const observer = new IntersectionObserver(

  const onCallbackRenderProfiler = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions
  ) => {};
  return (
    <>
      <Profiler id="div-root" onRender={onCallbackRenderProfiler}>
        <div className="root relative" id="parrent">
          <HeaderSlide className=""></HeaderSlide>
          <nav
            ref={refNav}
            className={` ${classNames([
              classCss,
            ])}  p-[1em] pt-[calc(1em + 1px)] flex flex-row justify-between items-center transition-all duration-200 py-1 sticky z-50 -top-1`}
          >
            <motion.div
              className="logo font-bold basis-2/6 text-center text-xl invisible lg:text-2xl font-mono cursor-pointer font-dosis"
              onClick={handleScrollToHeader}
              style={{ color: color }}
            >
              WeddingPages.
            </motion.div>
            <ul
              ref={menuRef}
              className={`${showMenu ? "flex" : "hidden"} tw-menu-item-show 
                lg:flex lg:basis-3/6 font-cuprum font-bold lg:item-center transition-all duration-300
                 gap-4 uppercase text-sm lg:justify-cente animate-slide-down`}
            >
              <li className="tw-top-menu-item">
                <Link
                  smooth={true}
                  offset={-50}
                  duration={400}
                  // delay={1000}
                  isDynamic={true}
                  to={"tw-invitation"}
                >
                  Invitation
                </Link>
              </li>

              <li className="tw-top-menu-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={400}
                  // delay={1000}
                  isDynamic={true}
                  to={"tw-introduce"}
                >
                  Introduce
                </Link>
              </li>

              <li className="tw-top-menu-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={400}
                  // delay={1000}
                  isDynamic={true}
                  to={"tw-moments"}
                >
                  Moments
                </Link>
              </li>
              <li className="tw-top-menu-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={400}
                  isDynamic={true}
                  to={"tw-album"}
                >
                  Album
                </Link>
              </li>
              <li className="tw-top-menu-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={400}
                  isDynamic={true}
                  to={"tw-events"}
                >
                  Events
                </Link>
              </li>
              <li className="tw-top-menu-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  isDynamic={true}
                  to={"tw-love-song"}
                >
                  Love Song
                </Link>
              </li>
              <li className="tw-top-menu-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={400}
                  isDynamic={true}
                  to={"tw-send-love"}
                >
                  Send Love
                </Link>
              </li>
            </ul>

            <div className="lg:hidden relative  h-full w-full basis-1/6 flex item-center cursor-pointer transition-all">
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
          <motion.div
            // ref={divElementRef}
            // style={{
            //   // scale: scaleProgress,
            //   opacity: opacityProgress,
            // }}
            className="flex flex-col text-base relative"
          >
            {/* <motion.div
              initial={{ opacity: 0, tra: 20 }}
              whileInView={{ opacity: 1, position: 200 }}
              transition={{ duration: 0.4 }}
              className="slider flex-row relative flex h-[600px] bg-[url('/src/img/DSC_4827.webp')] items-center bg-cover bg-no-repeat bg-center bg-slate-600 animate-slide-down "
            >
              <div className="w-full h-full bg-black bg-opacity-30"></div>
            </motion.div> */}
            {/* <div className="test-motion">
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
            </div> */}
            <div className="devide h-[100px] bg-red-200  devide-invitation "></div>
            <div id="invitation" className=" w-full  tw-invitation mx-auto">
              <Suspense>
                <Invitation />
              </Suspense>
            </div>
            <div className=" h-[400px] devide-introduce "></div>
            <div id="introduce" className="tw-introduce mt-20 mx-auto">
              <Suspense>
                <Introduce ref={introduceRef} />
              </Suspense>
            </div>
            <div className="h-[200px]"></div>

            <div className="w-full h-[700px] overflow-hidden relative">
              <img
                loading="lazy"
                ref={ref}
                src={"https://i.imgur.com/hgRHOsV.jpg"}
                alt=""
                className="w-full h-[1200px] object-cover object-center "
              />
            </div>
            <div className=" devide-moments  h-[200px]"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="introduce-title relative flex flex-row justify-center items-center w-full "
            >
              {/* <div className="introduce-line"></div> */}
              {/* <div className="title  bg-heading-tile w-14 items-center bg-origin-border border-spacing-3 h-14 bg-contain bg-no-repeat"></div> */}

              <div className="mm-title text-5xl mx-5 font-playfair text-center text-vitange_green-20">
                Our Love Story
              </div>

              {/* <div className="introduce-line"></div> */}
            </motion.div>
            <div className="devide h-[100px]"></div>

            <div id="moments" className="tw-moments flex h-full">
              <Moment />
            </div>
            <div className="devide h-[200px]"></div>
            <div
              id="album"
              className="tw-album flex h-[1000px] text-white relative"
            >
              {/* <Album /> */}
              Album ở đây nè
            </div>
            <div className="devide h-[200px]"></div>
            <div id="events" className="tw-events  h-[1000px] relative">
              {/* <Events ref={events} /> */}
              Event ở đây nhé
            </div>
            <div className="devide-love-song h-[200px]"></div>

            <div id="love-song" className="tw-love-song flex h-[600px]">
              <LoveSongMain tracks={song} />
            </div>
            <div className="devide h-[200px]"></div>

            <ParallaxDevide className="bg-red-50" />

            <div id="send-love" className="tw-send-love flex h-[1000px]">
              Send love
            </div>
            <footer>footer</footer>
          </motion.div>
          <div
            className={`song-fixed h-auto w-max fixed bottom-6 left-6 z-[60] ${classNames(
              [classCssSong]
            )} p-1 rounded-full`}
            onClick={handlePlayAndPauseSong}
          >
            {songState.isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                />
              </svg>
            )}
          </div>
        </div>
      </Profiler>
    </>
  );
}

export default HomePageWedding;
