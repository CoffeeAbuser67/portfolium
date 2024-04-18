import { useState} from "react";
import { useSpring, animated } from "react-spring";

import {
  FrontCard,
  BackCard,
  Lil_tag,
} from "../../assets/icons/ProfileCards";

import {
  GitHubIcon,
  LinkedInIcon,
  PdfIcon,
} from "../../assets/icons/SocialIcons";

const ProfileCard = () => {

  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <>
      <animated.div
        id="Backside"
        className="cardShape"
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        <BackCard />

        <div className="back-header">
          <h2>Get to know me &nbsp;</h2>
          <Lil_tag />
        </div>

        <div className="back-txt">
          <p>
            In my leisure time, I enjoy immersing myself in fantasy books and
            video games, as well as outdoor activities like cycling and surfing.
            <br />
            <br />
            My favorite series so far is  ‘Realm of the Elderlings’ by Robin Hobb, and
            ‘One Piece’ by Eiichiro Oda.
            <br />
            <br />
            When it comes to gaming, I'm all about fast-paced action like
            Ultrakill and Doom Eternal.
          </p>
        </div>
      </animated.div>

      <animated.div
        id="Frontside"
        className="cardShape"
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <FrontCard />

        <div className="PhotoContainer" />

        <span className="HM"> Henry Melen </span>

        <div id="icoContainer" className="social_icos_container" >
          <a
            href={"https://github.com/CoffeeAbuser67"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex" }}
          >
            <GitHubIcon />
          </a>

          <a
            href={"https://www.linkedin.com/in/henry-melen"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex" }}
          >
            <LinkedInIcon />
          </a>

          <a
            href={"/media/cv_henry.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex" }}
          >
            <PdfIcon />
          </a>
        </div>

        <div
          id="onClick area"
          className="onClickArea"
          onClick={() => setFlipped((prev) => !prev)}
        />
      </animated.div>
    </>
  );
};

export default ProfileCard;
