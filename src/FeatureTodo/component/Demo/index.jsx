import React from "react";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const LandingPage = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(location);
    console.log(element);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [location]);
  return (
    <>
      <nav>
        <Link smooth={true} to="#services">
          About
        </Link>

        <Link smooth to="/#services">
          Profile
        </Link>

        <Link smooth to="/#testimonial">
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

      <section id="services">
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
