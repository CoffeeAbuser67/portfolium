import { Helmet } from "react-helmet-async";
import { useSpring, animated } from "react-spring";

import { useTranslation } from 'react-i18next';

import RubberTxt from "../components/core/RubberTxt";


import {
  LineComponent,
  JourneyTxt,
  VisionTxt,
} from "../components/infoPage/InfoTxt";

import ProfileCard from "../components/infoPage/ProfileCard";

const Info = () => {
  const FadeSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1500,
    config: { tension: 120, friction: 60 },
  });

    const { t } = useTranslation();

  return (
    <>
      <Helmet title="Henry Melen Info Page" />

      <div id="info-page">

        <div className = "info-header">
          <RubberTxt txt = {[..."About me"]} />
          <animated.span style={FadeSpring}>
            <LineComponent />
          </animated.span>
        </div>

        <animated.div className="article" style = {FadeSpring}>

          <div className = "content_container">
            
            <div className="main_container">
              <h1>{t("journey")}</h1>
              <JourneyTxt />
              <h1>{t("vision")}</h1>
              <VisionTxt />
            </div>

            <div className = "card_container">
              <ProfileCard />
            </div>

          </div>
        </animated.div>
      </div>
    </>
  );
};

export default Info;
