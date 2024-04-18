import { useSpring, useSprings, animated, useSpringRef } from "react-spring";

import { useLogo } from "./context/LogoContext";

const colors = ["#F47841", "#DD3E35", "#B43243"];
const offset = ["0", "0.433", "1"];

const shape1 =
  "m338.95 304.27-.01.01a5.846 5.846 0 0 0-1.32 6.68c1.39 3.08-.11 6.7-3.27 7.89a5.857 5.857 0 0 0-3.79 5.66v.01a5.843 5.843 0 0 1-6.03 6.03h-.01a5.843 5.843 0 0 0-5.66 3.79c-1.19 3.17-4.81 4.66-7.89 3.27a5.862 5.862 0 0 0-6.68 1.32l-.01.01a5.852 5.852 0 0 1-8.53 0l-.01-.01a5.846 5.846 0 0 0-6.68-1.32c-3.08 1.39-6.7-.11-7.89-3.27a5.857 5.857 0 0 0-5.66-3.79h-.01a5.843 5.843 0 0 1-6.03-6.03v-.01c.08-2.5-1.44-4.78-3.79-5.66-3.17-1.19-4.66-4.81-3.27-7.89 1.03-2.28.5-4.97-1.32-6.68l-.01-.01a5.852 5.852 0 0 1 0-8.53l.01-.01a5.846 5.846 0 0 0 1.32-6.68c-1.39-3.08.11-6.7 3.27-7.89a5.857 5.857 0 0 0 3.79-5.66v-.01a5.843 5.843 0 0 1 6.03-6.03h.01c2.5.08 4.78-1.44 5.66-3.79 1.19-3.17 4.81-4.66 7.89-3.27 2.28 1.03 4.97.5 6.68-1.32l.01-.01a5.852 5.852 0 0 1 8.53 0l.01.01a5.846 5.846 0 0 0 6.68 1.32c3.08-1.39 6.7.11 7.89 3.27a5.857 5.857 0 0 0 5.66 3.79h.01a5.843 5.843 0 0 1 6.03 6.03v.01a5.843 5.843 0 0 0 3.79 5.66c3.17 1.19 4.66 4.81 3.27 7.89a5.862 5.862 0 0 0 1.32 6.68l.01.01a5.836 5.836 0 0 1 0 8.53z";

const shape2 =
  "M333.6 300c0 2.07-5.49 3.57-5.87 5.52-.4 2.01 4.09 5.49 3.32 7.34-.78 1.88-6.42 1.17-7.54 2.84-1.13 1.69 1.68 6.63.25 8.06-1.43 1.43-6.37-1.38-8.06-.25-1.67 1.12-.96 6.76-2.84 7.54-1.85.77-5.33-3.72-7.34-3.32-1.95.39-3.45 5.87-5.52 5.87s-3.57-5.49-5.52-5.87c-2.01-.4-5.49 4.09-7.34 3.32-1.88-.78-1.17-6.42-2.84-7.54-1.69-1.13-6.63 1.68-8.06.25-1.43-1.43 1.38-6.37.25-8.06-1.12-1.67-6.76-.96-7.54-2.84-.77-1.85 3.72-5.33 3.32-7.34-.39-1.95-5.87-3.45-5.87-5.52s5.49-3.57 5.87-5.52c.4-2.01-4.09-5.49-3.32-7.34.78-1.88 6.42-1.17 7.54-2.84 1.13-1.69-1.68-6.63-.25-8.06 1.43-1.43 6.37 1.38 8.06.25 1.67-1.12.96-6.76 2.84-7.54 1.85-.77 5.33 3.72 7.34 3.32 1.95-.39 3.45-5.87 5.52-5.87s3.57 5.49 5.52 5.87c2.01.4 5.49-4.09 7.34-3.32 1.88.78 1.17 6.42 2.84 7.54 1.69 1.13 6.63-1.68 8.06-.25 1.43 1.43-1.38 6.37-.25 8.06 1.12 1.67 6.76.96 7.54 2.84.77 1.85-3.72 5.33-3.32 7.34.38 1.95 5.87 3.45 5.87 5.52z";

const shape3 =
  "M300 198.57c0 101.43 0 101.43 19.41 54.58C300 300 300 300 371.72 228.28 300 300 300 300 346.85 280.59 300 300 300 300 401.43 300 300 300 300 300 346.85 319.41 300 300 300 300 371.72 371.72 300 300 300 300 319.41 346.85 300 300 300 300 300 401.43c0-101.43 0-101.43-19.41-54.58C300 300 300 300 228.28 371.72 300 300 300 300 253.15 319.41 300 300 300 300 198.57 300c101.43 0 101.43 0 54.58-19.41C300 300 300 300 228.28 228.28 300 300 300 300 280.59 253.15 300 300 300 300 300 198.57z";

const shape4 =
  "M300 148.16c0 202.45-9.68 175.22 29.05 81.7-38.74 93.52-64.84 105.93 78.31-37.23-143.16 143.16-130.75 117.05-37.23 78.31C276.62 309.68 249.39 300 451.84 300c-202.45 0-175.22-9.68-81.7 29.05-93.52-38.74-105.93-64.84 37.23 78.31-143.16-143.16-117.05-130.75-78.31-37.23C290.32 276.62 300 249.39 300 451.84c0-202.45 9.68-175.22-29.05-81.7 38.74-93.52 64.84-105.93-78.31 37.23 143.16-143.16 130.75-117.05 37.23-78.31 93.52-38.74 120.75-29.05-81.7-29.05 202.45 0 175.22 9.68 81.7-29.05 93.52 38.74 105.93 64.84-37.23-78.31 143.16 143.16 117.05 130.75 78.31 37.23 38.73 93.5 29.05 120.73 29.05-81.72z";

const Sun = () => {
  const { setReady, coloring } = useLogo();

  const colorApi = useSpringRef();



  //Assino o callback aqui pra ter mais fluidez (via teste)
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 100 },
    config: { duration: 7000 },
    onRest: () => setReady(true),
  });

  const { cx } = useSpring({
    from: { cx: 300 },
    to: { cx: 310 },
    config: { duration: 1000 },
    delay: 6500,
  });

  const { cy } = useSpring({
    from: { cy: 300 },
    to: { cy: 285 },
    config: { duration: 1000 },
    delay: 6500,
  });

  const { r } = useSpring({
    from: { r: 0 },
    to: { r: 76 },
    config: { duration: 1000 },
    delay: 6500,
    
  });

  const { shake } = useSpring({
    from: { shake: 0 },
    to: { shake: 1 },
    config: { duration: 1000 },
    delay: 7100,
  });

  const [colorSpring] = useSprings(colors.length, (i) => ({
    ref: colorApi,
    from: {
      c: "black",
      o: "0",
    },
    to: {
      c: colors[i],
      o: offset[i],
    },
    delay: 2000,
    config: {
      friction: 120,
      tension: 30,
    },
  }));

  if (coloring) {
    colorApi.start();
  }

  return (
    <>
      <linearGradient
        id="colored_sun"
        x1={299.273}
        x2={300.662}
        y1={350.811}
        y2={250.602}
        gradientUnits="userSpaceOnUse"
      >
        {colorSpring.map(({ c, o }, i) => (
          <animated.stop offset={o} stopColor={c} key={`csun_${i}`} />
        ))}
      </linearGradient>

      <animated.g
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
          transform: shake
            .to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .to((value) => `scale(${value}`),
        }}
      >
        <animated.circle
          id="sun"
          cx={cx}
          cy={cy}
          r={r}
          fill={"url(#colored_sun)"}
        />
      </animated.g>

      <animated.path
        id="shape4"
        d={shape4}
        style={{
          // fill: "purple",
          transformOrigin: "center",
          transformBox: "fill-box",
          transform: scale
            .to({
              range: [0, 80, 100],
              output: [0, 1, 0],
            })
            .to((value) => `scale(${value}`),
        }}
      />

      <animated.path
        id="shape3"
        d={shape3}
        style={{
          // fill: "blue",
          transformOrigin: "center",
          transformBox: "fill-box",
          transform: scale
            .to({
              range: [0, 60, 100],
              output: [0, 1, 0],
            })
            .to((value) => `scale(${value}`),
        }}
      />

      <animated.path
        id="shape2"
        d={shape2}
        style={{
          // fill: "green",
          transformOrigin: "center",
          transformBox: "fill-box",
          transform: scale
            .to({
              range: [0, 40, 100],
              output: [1, 1, 0],
            })
            .to((value) => `scale(${value}`),
        }}
      />

      <animated.path
        id="shape1"
        d={shape1}
        style={{
          // fill: "red",
          transformOrigin: "center",
          transformBox: "fill-box",
          transform: scale
            .to({
              range: [0, 20, 100],
              output: [1, 1, 0],
            })
            .to((value) => `scale(${value}`),
        }}
      />

      <animated.circle
        id="shape0"
        cx="300"
        cy="300"
        r="48"
        style={{
          transformOrigin: "center",
          transformBox: "fill-box",
          transform: scale
            .to({
              range: [0, 100],
              output: [1, 0],
            })
            .to((value) => `scale(${value}`),
        }}
      />
    </>
  );
};

export default Sun;
