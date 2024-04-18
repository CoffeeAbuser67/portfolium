import { Helmet } from "react-helmet-async";

import Map from "../components/contactPage/MapComponent";
import RubberTxt from "../components/core/RubberTxt";

import beach from "../assets/img/beach.svg";

import { useTranslation } from "react-i18next";

const Contactme = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title="Contact Henry Melen" />

      <div id="contactme-page">
        <div className="article">
          <div className="main_container">
            <RubberTxt txt={[..."Contact me !"]} />

            <p>{t("contactmeTxt")}</p>

            <img src={beach} style={{ display: "flex", width: "100%" }} />
          </div>

          <Map />

          <div id="myinfo">
            Henry Melen <br />
            <br />
            From: <br />
            llhéus - Bahia - Brazil <br />
            <br />
            henry_melen@hotmail.com <br />
            +55 (73) 9-9980-1588
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
