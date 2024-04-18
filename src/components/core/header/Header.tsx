import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import i18n from "i18next";

import Hlogo from "../../../assets/icons/Hlogo";
import Minidock from "./minidock";

const USAFlag = () => (
  <svg width={25} height={25} viewBox="0 0 512 512">
    <circle
      cx={256}
      cy={256}
      r={256}
      style={{
        fill: "#f0f0f0",
      }}
    />
    <path
      d="M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256zM244.87 122.435h229.556a257.35 257.35 0 0 0-59.07-66.783H244.87v66.783zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0 0 28.755-66.783H8.819a254.474 254.474 0 0 0 28.755 66.783z"
      style={{
        fill: "#d80027",
      }}
    />
    <path
      d="M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 0 0-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 0 0-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 0 0-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 0 0 0 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm0-74.574 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765z"
      style={{
        fill: "#0052b4",
      }}
    />
  </svg>
);

const BRFlag = () => (
  <svg width={25} height={25} viewBox="0 0 512 512">
    <circle
      cx={256}
      cy={256}
      r={256}
      style={{
        fill: "#00c85f",
      }}
    />
    <path
      d="M246.207 103.892 28.673 248.915c-5.241 3.495-5.241 11.196 0 14.69l217.534 145.022a17.653 17.653 0 0 0 19.586 0l217.534-145.022c5.241-3.495 5.241-11.196 0-14.69L265.793 103.892a17.653 17.653 0 0 0-19.586 0z"
      style={{
        fill: "#fff046",
      }}
    />
    <circle
      cx={256}
      cy={256}
      r={105.931}
      style={{
        fill: "#4b82e1",
      }}
    />
    <path
      d="M165.515 201.127a105.399 105.399 0 0 0-8.758 18.111c49.205-3.345 128.166 5.419 197.503 76.211a105.005 105.005 0 0 0 5.692-19.229c-67.857-65.077-143.214-76.763-194.437-75.093z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [br, setBr] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: br ? 1 : 0,
    transform: br ? 1 : 0,
  });

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const menuAppear = useSpring({
    transform: isOpen ? "translateY(17)" : "translateY(-50%)",
    opacity: isOpen ? 1 : 0,
  });

  const closeMenu = (event: MouseEvent) => {
    if (
      isOpen &&
      !menuRef.current?.contains(event.target as Node) &&
      !buttonRef.current?.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleLanguageChange = () => {
    const currentLanguage = i18n.language; // Get current language
    const newLanguage = currentLanguage === "en" ? "pt-BR" : "en"; // Toggle language
    i18n.changeLanguage(newLanguage); // Change language
    setBr(!br);
  };

  useEffect(() => {
    document.addEventListener("mouseup", closeMenu);
    return () => {
      document.removeEventListener("mouseup", closeMenu);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }


  return (
    <>
      <div className="header">
        <div className="left-col">
          <Hlogo
            height="46.5px"
            width="40px"
            outer_fill="#400000"
            inner_fill="black"
          />
        </div>

        {/* ------------------------------------------------------ */}
        <div className="mid-col">
          <animated.div ref={menuRef} style={menuAppear}>
            <Minidock />
          </animated.div>
        </div>
        {/* ------------------------------------------------------ */}

        <div className="right-col">
          <button
            className="flagButton"
            onClick={handleLanguageChange}
          >
            <animated.div
              className="flagContainer"
              style={{
                opacity: opacity.to((value) => 1 - value),
                transform: transform.to((value) => `scale(${1 - value}`),

              }}
            >
              <USAFlag />
            </animated.div>

            <animated.div
              className="flagContainer"
              style={{
                opacity,
                transform: transform.to((value) => `scale(${value}`),
              }}
            >
              <BRFlag />
            </animated.div>

          </button>

          <div className="hamburger_card">
            <div
              ref={buttonRef}
              className={`hamburger ${isOpen ? "clicked" : ""}`}
              onClick={handleClick}
            >
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
