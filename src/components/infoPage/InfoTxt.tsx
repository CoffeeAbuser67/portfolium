
import { useTranslation } from 'react-i18next';



export const JourneyTxt = () => {
  const { t } = useTranslation();
  return(
    <div className="txt-container">
    <p>
      {t("journey1")}
    </p>

    <p>
      {t("journey2")}
    </p>
  </div>
  );

};

export const VisionTxt = () => {
  const { t } = useTranslation();
  return(
    <div className="txt-container">
    <p>
      {t("vision1")}
    </p>
  </div>
  )

};




export const LineComponent = () => (
  <svg
    viewBox="0 0 1180 40"
    fill="#400000"
    width="60vw"
    className="rubberBand"
    style={{ cursor: "pointer" }}
  >
    <path d="M1145.58 19.78c29.68-.39 10.99-16.6-2.04-16.57 8.64.17-1118.93 15.78-1138.91 15.9 2.89.44 31.99 16.47 29.23 16.92 2.51.01 1142.23-16.61 1111.72-16.25z" />
  </svg>
);