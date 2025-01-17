import React from "react";
import logo from "../../assets/logo.png";
import retink from "../../assets/retink.png";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div
        className="
      container
      px-5
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
    "
      >
        <div
          className="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
        >
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
            >
              RETINK
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Career
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href="#"
            className="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-gray-900
        "
          >
            <img src={logo} alt="logo" className="mr-3" />
            <img src={retink} alt="retink" />
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Join other global enterprises driving sales by creating unlimited
            customized content for less price with Retink's AI.
          </p>
        </div>
      </div>
      <div className="bg-gray-300">
        <div
          className="
            container
            mx-auto
            py-4
            px-5
            flex flex-wrap flex-col
            sm:flex-row
          "
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © 2021
            <a href="#" className="text-gray-600 ml-1">
              Retink
            </a>
          </p>
          <span
            className="
              inline-flex
              sm:ml-auto sm:mt-0
              mt-2
              justify-center
              sm:justify-start
            "
          >
            <a href="#" className="text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
