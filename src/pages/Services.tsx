import { Helmet } from "react-helmet-async";

import RubberTxt from "../components/core/RubberTxt";

import {
  ServiceOfferingFragment,
  QualitiesFragment,
  AI_Fragment,
  OtherServicesFragment,
} from "../components/servicesPage/ServicesFragments";



const Services = () => {
  return (
    <>
      <Helmet title="Henry Melen Services" />

      <div id="services-page">
        <div className="article">
          <RubberTxt txt = {[..."Services"]} />

          <div className="card1">
            <ServiceOfferingFragment />
          </div>

          <div className="card1">
            <QualitiesFragment />
          </div>

          <div className="card1">
            <AI_Fragment />
          </div>

          <div className="card1">
            <OtherServicesFragment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
