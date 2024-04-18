import { animated, useSpringValue } from "react-spring";

import { useLogo } from "./context/LogoContext";

const AnimatedCircle = () => {
  const { ready } = useLogo();

  const cx = useSpringValue(310, {
    config: {
      mass: 12,
      friction: 40,
      tension: 28,
      clamp: true,
    },
  });

  const cy = useSpringValue(285, {
    config: {
      mass: 12,
      friction: 40,
      tension: 28,
      clamp: true,
    },
  });

  const r = useSpringValue(0, {
    config: {
      mass: 12,
      friction: 20,
      tension: 40,
      clamp: true,
    },
  });

  if (ready) {
    r.start(262.5);
    cx.start(300);
    cy.start(300);
  }

  return (
    <animated.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke="#000"
      strokeWidth="12"
      strokeMiterlimit="10"
    />
  );
};

export default AnimatedCircle;
