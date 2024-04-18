import { Dock } from "./Dock";
import { DockCard } from "./DockCard";

import HomeI from "../../../assets/icons/Home";
import InfoI from "../../../assets/icons/Info";
import SkillsI from "../../../assets/icons/Skills";
import BlogI from "../../../assets/icons/Blog";
import ContactI from "../../../assets/icons/Contact";

import { NavLink } from "react-router-dom";

// TODO: Implement a object mapping here

export default function Sidebar() {
  return (
    <>
      <Dock>
        
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

      </Dock>
    </>
  );
}
