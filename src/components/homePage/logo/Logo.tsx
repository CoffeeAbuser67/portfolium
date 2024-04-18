import { useState } from "react";
import { LogoContext } from "./context/LogoContext";
import AnimatedCircle from "./Circle";
import Birds from "./Birds";
import Coqueiros from "./Coqueiros";
import Chao from "./Chao";
import Eye from "./Eye";
import Parrot from "./Parrot";
import Sea from "./Sea";
import Sky from "./Sky";
import Sun from "./Sun3";

const Logo: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [coloring, setColoring] = useState(false);

  return (
    <>
      <LogoContext.Provider value={{ ready, setReady, coloring, setColoring }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 600 600"
          overflow="visible"
          width="100%"
          height="100%"
        >
          <clipPath id="clip">
            <circle cx={300} cy={300} r={268} />
          </clipPath>

          <g clipPath="url(#clip)">
            <Sky />
          </g>
          <Sun />

          <g clipPath="url(#clip)">
            <Sea />
            <Coqueiros />
            <Chao />
            <Parrot />
            <Eye />
            <Birds />
          </g>
          <AnimatedCircle />
        </svg>
      </LogoContext.Provider>
    </>
  );
};
export default Logo;
