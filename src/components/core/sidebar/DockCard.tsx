import * as React from "react";
import {
  animated,
  useIsomorphicLayoutEffect,
  useSpringValue,
} from "react-spring";

import { useMousePosition } from "../../../hooks/useMousePosition";
import { useWindowResize } from "../../../hooks/useWindowResize";

import { useDock } from "./context/DockContext";

interface DockCardProps {
  children: React.ReactNode;
  backColor: string
}

const INITIAL_WIDTH = 48;

export const DockCard = ({ children, backColor }: DockCardProps ) => {
  const cardRef = React.useRef<HTMLDivElement>(null!);
  /**
   * This doesn't need to be real time, think of it as a static
   * value of where the card should go to at the end.
   */
  const [elCenterY, setElCenterY] = React.useState<number>(0);

  const size = useSpringValue(INITIAL_WIDTH, {
    config: {
      mass: 0.1,
      tension: 320,
    },
  });

  const rb = useSpringValue(0, {
    config: { duration: 1000 },
  });

  const dock = useDock();

  useMousePosition(
    {
      onChange: ({ value }) => {
        const mousey = value.y;

        if (dock.height > 0) {
          const transformedValue =
            INITIAL_WIDTH +
            36 *
              Math.cos((((mousey - elCenterY) / dock.height) * Math.PI) / 2) **
                8;
          // INITIAL_WIDTH + 36 * Math.cos((((mousey - elCenterY) / dock.height) * Math.PI) / 2) ** 12

          if (dock.hovered) {
            size.start(transformedValue);
          }
        }
      },
    },
    [elCenterY, dock]
  );

  useIsomorphicLayoutEffect(() => {
    if (!dock.hovered) {
      size.start(INITIAL_WIDTH);
    }
  }, [dock.hovered]);

  useWindowResize(() => {
    const { y } = cardRef.current.getBoundingClientRect();

    setElCenterY(y + INITIAL_WIDTH / 2);
  });

  const handleclick = () => {
    rb.start(1);
    rb.reset();
  };

  return (

      <animated.div
        ref={cardRef}
        className={"dock-card"}
        onClick={handleclick}
        style={{
          backgroundColor : backColor,
          width: size,
          height: size,
          transform: rb
            .to({
              range: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
              output: [0, 0.3, -0.3, 0.2, -0.1, 0.1, 0],
            })
            .to((value) => `scale3d(${1 + value}, ${1 - value}, 1)`),
        }}
      >
        {children}
      </animated.div>
  );
};
