import { useSpringRef, useSpring, animated } from "react-spring";

import { useLogo } from "./context/LogoContext";

const crossEyePath =
  "m448 257.75.42 13.42 13.41.41-13.41.42-.42 13.41-.41-13.41-13.42-.42 13.42-.41z";
const hexagonEyePath = [
  "M452.52 260.71c-5.41 13.06-3.61 13.06-9.02 0 5.41 13.06 6.69 11.79-6.38 6.38 13.06 5.41 13.06 3.61 0 9.02 13.06-5.41 11.79-6.69 6.38 6.38 5.41-13.06 3.61-13.06 9.02 0-5.41-13.06-6.69-11.79 6.38-6.38-13.06-5.41-13.06-3.61 0-9.02-13.06 5.41-11.79 6.69-6.38-6.38z",
  "M448.01 263.35c0 9.9 1.17 9.41-5.83 2.42 7 7 7.48 5.83-2.42 5.83 9.9 0 9.41-1.17 2.42 5.83 7-7 5.83-7.48 5.83 2.42 0-9.9-1.17-9.41 5.83-2.42-7-7-7.48-5.83 2.42-5.83-9.9 0-9.41 1.17-2.42-5.83-6.99 7-5.83 7.48-5.83-2.42z",
];

const Eye = () => {
  const { coloring } = useLogo();

  const eyeAPI = useSpringRef();
  const glowSpring = useSpring({
    ref: eyeAPI,
    from: {
      opacity: 0,
      transformOrigin: "center",
      transform: "scale(0) rotate(0deg)",
    },
    to: [
      { opacity: 1, transform: "scale(1.1) rotate(-160deg)" },
      { opacity: 0, transform: "scale(0) rotate(160deg)" },
    ],
    config: {
      mass: 30,
      friction: 25,
      tension: 50,
    },
  });

  const eyeSpring = useSpring({
    ref: eyeAPI,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      friction: 2,
      tension: 50,
      clamp: true,
    },
  });

  if (coloring) {
    eyeAPI.start();
  }

  return (
    <>
      <radialGradient
        id="glow_c_"
        cx={448.0042}
        cy={330.4189}
        r={2.17}
        gradientTransform="matrix(1 0 0 -1 0 602)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.304} style={{ stopColor: "#e6e5e5" }} />
        <stop offset={0.38} style={{ stopColor: "#e0c7c9" }} />
        <stop offset={0.69} style={{ stopColor: "#ca5c66" }} />
        <stop offset={1} style={{ stopColor: "#be1e2d" }} />
      </radialGradient>

      <animated.circle
        style={eyeSpring}
        cx={448}
        cy={271.58}
        r={1}
        fill="black"
      />

      <animated.g id="Ball" style={{ ...glowSpring, transformBox: "fill-box" }}>
        <path d={hexagonEyePath[0]} fill=" #ed1c24" />
        <path d={hexagonEyePath[1]} fill=" #ed1c24" />
        <path d={crossEyePath} fill="#be1e2d" />
        <circle cx={448} cy={271.58} r={2.17} fill="url(#glow_c_)" />
      </animated.g>
    </>
  );
};

export default Eye;
