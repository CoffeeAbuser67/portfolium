import { Helmet } from "react-helmet-async";
import { useSpring, useSpringValue, animated } from "react-spring";
import Tilt from "react-parallax-tilt";
import { NavLink } from "react-router-dom";

import OpenFragment from "../assets/icons/OpenFragment";
import CloseFragment from "../assets/icons/CloseFragment";

import AnimeTxt from "../components/homePage/MainRubberTxt";
import Logo from "../components/homePage/logo/Logo";

const Home = () => {
  const FadeSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
    config: { tension: 120, friction: 60 },
  });

  const bshadow = useSpringValue(0);
  // const opacity = useSpringValue(0.8)

  const handleMouseEnter = () => {
    bshadow.start(6);
    // opacity.start(1)
  };
  const handleMouseLeave = () => {
    bshadow.start(0);
    // opacity.start(0.8)
  };

  return (
    <>
      <Helmet title="Henry Melen Home Page" />

      <div id="home-page">
        <div className="article">
          <animated.span style={{ marginBottom: "20px", ...FadeSpring }}>
            <OpenFragment />
          </animated.span>

          <AnimeTxt />

          <animated.p className="homeInfoText" style={FadeSpring}>
            #Fullstack Developer <br />
            #Django & React Expert <br />
            #Data Scientist
          </animated.p>



          <NavLink to="/contactme">
            <animated.button
              className="contact_button"
              type="button"
              style={FadeSpring}
            >
              Contact me!
            </animated.button>
          </NavLink>



          <animated.span style={{ marginTop: "25px", ...FadeSpring }}>
            <CloseFragment />
          </animated.span>
        </div>

        <animated.div className="card-container">
          <Tilt
            style={{ display: "flex", width: "100%", height: "100%" }}
            onEnter={handleMouseEnter}
            onLeave={handleMouseLeave}
          >
            <animated.div
              className="canvas_card"
              style={{
                boxShadow: bshadow.to(
                  (value) => `2px 12px 24px ${value}px rgba(0, 0, 0, 0.5)`
                ),
              }}
            >
              <div className="logo_wrapper">
                <Logo />
              </div>
            </animated.div>
          </Tilt>
        </animated.div>
      </div>
    </>
  );
};

export default Home;
