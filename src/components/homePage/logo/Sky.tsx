import { useSpring, animated, useSpringRef } from "react-spring";

import { useLogo } from "./context/LogoContext";

const Sky = () => {
  const { coloring } = useLogo();

  const skySpringRef = useSpringRef();
  const skySpring = useSpring({
    ref: skySpringRef,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 2000,
    config: {
      mass: 80,
      friction: 100,
      tension: 60,
      clamp: true,
    },
  });

  if (coloring) {
    skySpringRef.start();
  }

  return (
    <>
      <animated.path
        style={skySpring}
        d="M37.63 292.82h524.79l-12.18-72.32-26.93-58.54-52.52-63.51-59.83-41.67-63.66-15.87-42.99-4.76-46.54 4.08-45.96 9.2-71.71 42.38-58.01 61.78-33.15 64.45-11.44 59.92z"
        fill="url(#sunset_c_)"
      />

      <linearGradient
        id="sunset_c_"
        x1={299.671}
        x2={303.478}
        y1={306.147}
        y2={31.448}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.0306} style={{ stopColor: "#f1671f" }} />
        <stop offset={0.125} style={{ stopColor: "#c81b26" }} />
        <stop offset={0.298} style={{ stopColor: "#9b0f5f" }} />
        <stop offset={0.624} style={{ stopColor: "#600479" }} />
        <stop offset={0.6826} style={{ stopColor: "#580574" }} />
        <stop offset={0.7731} style={{ stopColor: "#420665" }} />
        <stop offset={0.9087} style={{ stopColor: "#280A47" }} />
      </linearGradient>
    </>
  );
};

export default Sky;
