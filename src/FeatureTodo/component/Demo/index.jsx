import React from "react";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const LandingPage = ({ props }) => {
  const { pathname, hash, key } = useLocation();
  console.log("hihi", { pathname: pathname, hash: hash, key: key });
  useEffect(() => {
    const element = document.getElementById(hash);
    console.log(element);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [hash]);
  return (
    <>
      <nav>
        <Link smooth={true} to="#about">
          About
        </Link>

        <Link smooth to="#profile">
          Profile
        </Link>

        <Link smooth to="#services">
          Services
        </Link>
      </nav>

      <section id="#about">
        <h1> About</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
          Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
          ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
          est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
          quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
          consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
          Enim, nostrum illo.
        </p>
      </section>

      <section id="#profile" className=" h-[500px] ">
        <h1> Profile </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
          Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
          ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
          est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
          quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
          consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
          Enim, nostrum illo.
        </p>
      </section>

      <section id="#services">
        <h1> Services </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nam!
          Iure officia aut esse tempore accusantium explicabo? Corporis deleniti
          ipsa fuga quas aut neque dicta nostrum laboriosam, iusto ullam minima
          est porro, totam saepe. Facilis aliquid praesentium, voluptates rem
          quibusdam sequi numquam illo eius adipisci eaque, necessitatibus
          consectetur, labore vero et ipsum. Officiis, ea vero. Praesentium, et.
          Enim, nostrum illo.
        </p>
      </section>
    </>
  );
};

export default LandingPage;
