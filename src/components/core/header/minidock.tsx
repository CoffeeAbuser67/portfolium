import { NavLink } from "react-router-dom";

import { DockCard } from "../sidebar/DockCard";

import HomeI from "../../../assets/icons/Home";
import InfoI from "../../../assets/icons/Info";
import SkillsI from "../../../assets/icons/Skills";
import BlogI from "../../../assets/icons/Blog";
import ContactI from "../../../assets/icons/Contact";

// TODO: Ajeitar isso aqui, depois

export default function Minidock() {
  return (
    <>
      <div className="mini_dock">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive ? { fill: "#500000" } : {};
          }}
        >
          {({ isActive }) => (
            <DockCard backColor={isActive ? "black" : "#500000"}>
              <HomeI />
            </DockCard>
          )}
        </NavLink>

        <NavLink
          to="/info"
          style={({ isActive }) => {
            return isActive ? { fill: "#500000" } : {};
          }}
        >
          {({ isActive }) => (
            <DockCard backColor={isActive ? "black" : "#500000"}>
              <InfoI />
            </DockCard>
          )}
        </NavLink>

        <NavLink
          to="/services"
          style={({ isActive }) => {
            return isActive ? { fill: "#500000" } : {};
          }}
        >
          {({ isActive }) => (
            <DockCard backColor={isActive ? "black" : "#500000"}>
              <SkillsI />
            </DockCard>
          )}
        </NavLink>

        <NavLink
          to="/projects"
          style={({ isActive }) => {
            return isActive ? { fill: "#500000" } : {};
          }}
        >
          {({ isActive }) => (
            <DockCard backColor={isActive ? "black" : "#500000"}>
              <BlogI />
            </DockCard>
          )}
        </NavLink>

        <NavLink
          to="/contactme"
          style={({ isActive }) => {
            return isActive ? { fill: "#500000" } : {};
          }}
        >
          {({ isActive }) => (
            <DockCard backColor={isActive ? "black" : "#500000"}>
              <ContactI />
            </DockCard>
          )}
        </NavLink>
      </div>
    </>
  );
}
