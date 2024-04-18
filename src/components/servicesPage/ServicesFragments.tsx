import { useTranslation } from "react-i18next";

import Deck from "./Deck";

import aws from "../../assets/img/aws.svg";
import django from "../../assets/img/django2.svg";
import ts from "../../assets/img/typescript2.svg";
import react from "../../assets/img/react.svg";
import python from "../../assets/img/python.svg";
import git from "../../assets/img/git2.svg";
import ubuntu from "../../assets/img/ubuntu.svg";
import docker from "../../assets/img/docker.svg";
import openai from "../../assets/img/Openai.svg";
import langchain from "../../assets/img/Langchain.svg";
import otherServices from "../../assets/img/otherServices.svg";

const toolCards = [react, ts, django, python];
const devOpsCards = [git, docker, ubuntu, aws];
const openaiCard = [openai];
const langchainCard = [langchain];

export const ServiceOfferingFragment = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("introh")}</h2>

      <p>{t("intro1")}</p>

      <p>{t("intro2")}</p>
    </>
  );
};

export const QualitiesFragment = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("qualityh")}</h2>

      {/* ------------------------------------------------------------------------------------------ */}

      <div className="TextCardWrapper">
        <div className="textContainer">
          <h3>{t("tools")}</h3>
          <p>{t("tools1")}</p>
          <p>{t("tools2")}</p>
          <p>{t("tools3")}</p>
        </div>

        <div className="deckContainer">
          <Deck cards={toolCards} color={"#4b4b4b"} />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}

      <div className="TextCardWrapper">
        <div className="textContainer">
          <h3>{t("devops")}</h3>
          <p>{t("devops1")}</p>
        </div>

        <div className="deckContainer">
          <Deck cards={devOpsCards} color={"#4b4b4b"} />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}

      <h3>{t("testing")}</h3>

      <div style={{ width: "100%" }}>
        <p>{t("testing1")}</p>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}
    </>
  );
};

export const AI_Fragment = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("AIheader")}</h2>

      {/* ------------------------------------------------------------------------------------------ */}

      <h3>{t("aiIntro")}</h3>

      <div style={{ width: "100%" }}>
        <p>{t("aiIntro1")}</p>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}

      <div className="TextCardWrapper">
        <div className="textContainer">
          <h3>{t("how")}</h3>
          <p>{t("how1")}</p>
          <p>{t("how2")}</p>
        </div>

        <div className="deckContainer">
          <Deck cards={openaiCard} color={"white"} />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}

      <div style={{ width: "100%" }}>
        <h3> {t("method")}</h3>
        <p>{t("method1")}</p>
      </div>
      <div className="TextCardWrapper">
        <div className="textContainer">
          <p>{t("method2")}</p>

          <p>{t("method3")}</p>
        </div>

        <div className="deckContainer">
          <Deck cards={langchainCard} color={"white"} />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}
    </>
  );
};

export const OtherServicesFragment = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="TextCardWrapper">
        <div className="textContainer">
          <h2>{t("otherServices")}</h2>
          <h3>{t("electronicIOT")}</h3>
          <p>{t("electronicIOTxt")}</p>
        </div>

        <div className="imgContainer">
          <img src={otherServices} />
        </div>
      </div>

      <h3>{t("technicalDiligence")}</h3>
      <p>{t("technicalDiligenceTxt")}</p>

      <h3> {t("support")}</h3>
      <p>{t("supportTxt")}</p>
    </>
  );
};

