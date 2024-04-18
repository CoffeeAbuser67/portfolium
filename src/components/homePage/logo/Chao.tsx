import { useSpring, useSprings, useSpringRef, animated } from "react-spring";

import { useLogo } from "./context/LogoContext";

const rockData = {
  offset: ["0", "0.265", "0.522", "0.774", "0.899", "1"],
  colors: ["#3e1c00", "#492201", "#562b00", "#633200", "#743b00", "#7c3f00"],
};

const sandData = {
  offset: ["0", "0.626", "0.789", "1"],
  colors: ["#89510c", "#c18e22", "#cf9d2f", "#e7b744"],
};

const dockData = {
  offset: ["0", "0.265", "0.522", "0.774", "0.899", "1"],
  colors: ["#3e1c00", "#492201", "#562b00", "#633200", "#743b00", "#7c3f00"],
};

const Chao = () => {
  const { ready, coloring } = useLogo();
  const moveUpAPI = useSpringRef();

  const moveUp = useSpring({
    ref: moveUpAPI,

    from: {
      transform: "translatey(70%)",
      opacity: 0.9,
    },
    to: {
      transform: "translatey(0)",
      opacity: 1,
    },
    delay: 2000,
    config: {
      mass: 80,
      friction: 110,
      tension: 60,
      clamp: true,
    },
  });

  const coloringAPI = useSpringRef();
  const [rockColors] = useSprings(6, (i) => ({
    ref: coloringAPI,
    delay: 2000,
    from: {
      c: "black",
      o: "0",
    },

    to: {
      c: rockData["colors"][i],
      o: rockData["offset"][i],
    },

    config: {
      mass: 80,
      friction: 100,
      tension: 40,
    },
  }));

  const [sandColors] = useSprings(4, (i) => ({
    ref: coloringAPI,
    delay: 2000,
    from: {
      c: "black",
      o: "0",
    },

    to: {
      c: sandData["colors"][i],
      o: sandData["offset"][i],
    },

    config: {
      mass: 80,
      friction: 100,
      tension: 40,
    },
  }));

  const [dockColors] = useSprings(6, (i) => ({
    ref: coloringAPI,
    delay: 2000,
    from: {
      c: "black",
      o: "0",
    },
    to: {
      c: dockData["colors"][i],
      o: dockData["offset"][i],
    },
    config: {
      mass: 80,
      friction: 100,
      tension: 40,
    },
  }));

  const floorColor = useSpring({
    ref: coloringAPI,
    from: { fill: "black" },
    to: { fill: "#5E4600" },
    delay: 3500,
    config: {
      mass: 80,
      friction: 50,
      tension: 40,
      clamp: true,
    },
  });

  if (ready) {
    moveUpAPI.start();
  }

  if (coloring) {
    coloringAPI.start();
  }

  return (
    <>
      <linearGradient
        id="sand_c_"
        x1={389.893}
        x2={217.864}
        y1={420.865}
        y2={545.203}
        gradientUnits="userSpaceOnUse"
      >
        {sandColors.map(({ c, o }, i) => (
          <animated.stop offset={o} stopColor={c} key={`sand_${i}`} />
        ))}
      </linearGradient>

      <linearGradient
        id="rock_c_"
        x1={63.72}
        x2={172.141}
        y1={398.524}
        y2={446.885}
        gradientUnits="userSpaceOnUse"
      >
        {rockColors.map(({ c, o }, i) => (
          <animated.stop offset={o} stopColor={c} key={`rock_${i}`} />
        ))}
      </linearGradient>

      <linearGradient
        id="dock_c_"
        x1={377.324}
        x2={527.491}
        y1={405.401}
        y2={405.401}
        gradientUnits="userSpaceOnUse"
      >
        {dockColors.map(({ c, o }, i) => (
          <animated.stop offset={o} stopColor={c} key={`dock_${i}`} />
        ))}
      </linearGradient>

      <animated.g style={moveUp}>
        <path
          id="sand"
          d="m492.35 453.61-.65-.17c-33.29.32-53.65 14.6-53.65 14.6-14.64 7.31-30.08 12.12-42.99 11.44 6.48 21.33-106.44 11.19-114.89-11.74-6.89-18.7-59.85-26.63-90.58-35.15-.04 27.56-44.71 43.16-77.32 50.87C159.93 532.22 226.43 562.5 300 562.5c88.56 0 166.87-43.86 214.41-111.04-9.88-3.77-22.06 2.15-22.06 2.15z"
          style={{
            fill: "url(#sand_c_)",
          }}
        />

        <path
          id="rock"
          d="M189.59 432.58c-.49-.13-.97-.27-1.44-.4-4.56-5.53-5.93-12.96-10.51-18.76l-6.13-5.52c2.34-35.54-20.9-36.36-47.16-26.52-1.07-.74-2.18-1.42-3.36-2.01a25.02 25.02 0 0 0-3.42-1.39c-.41-.14-1.47-.49-2.86-.84-2.77-.62-5.19-.71-5.19-.71-2.99-.25-6-.24-8.92-.2-3.37.04-7.42.56-7.95 3.44-.09.47-.06.94.05 1.42-4.4-.95-8.95-1.45-13.61-1.45-8.94 0-17.46 1.84-25.27 5.14a260.07 260.07 0 0 0 17.29 43.78 263.78 263.78 0 0 0 41.17 54.9c32.6-7.72 77.27-23.31 77.31-50.88z"
          style={{
            fill: "url(#rock_c_)",
          }}
        />

        <g id="pier">
          <path
            id="dock"
            d="M510.6 453.49c-9.85-1.21-20.88-4.38-32.6-8.7 13.69-5.91 29.25-10.88 45.85-15.34 1.54-3.63 2.8-7.16 3.64-10.44l-46.15-12.9v-74.57c0-4.86-18.34-9.75-18.34-4.89v75.42l-17.39-4.64-34.99 10.46c-1.54-2.57-6.31-3.89-14.53-3.87v7.65l-18.77 6.29v13.46l18.77 5.32-.8 44.43 18.77 5.01v-45.11l48.99 13.06.16 7.01 20.15 5.37v-5.8l19.81 5.28c2.22-3.28 5.11-7.7 8.15-12.7l-.72.2zm-114.51-30.54c-1.64-.47-5.47-1.43-11.45-3.05l11.45-2.64v5.69zm17.97 4.8V412.4c6.57-4.15 18.7-7.2 31.65-10.08 13.64 2.84 25.51 5.88 35.63 9.5l-57.57 18.52-9.71-2.59zm19.41 5.17c25.25-9.92 44.49-16.22 57.26-18.61 12.69 3.51 23.76 6.16 34.51 9.2l-55.19 19.16c-10.14-1.28-22.66-4.85-36.58-9.75z"
            style={{
              fill: "url(#dock_c_)",
            }}
          />

          <animated.g fill={floorColor.fill}>
            <path
              id="p3"
              d="M445.71 402.31c-12.95 2.88-25.08 5.93-31.65 10.08v15.35l9.7 2.59 57.57-18.52c-10.11-3.62-21.98-6.65-35.62-9.5z"
            />
            <path
              id="p2"
              d="M490.72 414.31c-12.76 2.38-32.01 8.68-57.26 18.61 13.92 4.9 26.44 8.47 36.58 9.76l55.19-19.16c-10.75-3.05-21.82-5.7-34.51-9.21z"
            />
            <path
              id="p1"
              d="m510.6 453.49.7-.23c4.42-7.28 9.14-15.77 12.54-23.8-16.61 4.45-32.16 9.43-45.85 15.34 11.74 4.31 22.77 7.48 32.61 8.69z"
            />
            <path
              id="pp"
              d="M396.09 422.95v-5.7l-11.45 2.64c5.98 1.63 9.81 2.6 11.45 3.06z"
            />
          </animated.g>
        </g>
      </animated.g>
    </>
  );
};

export default Chao;
