import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Main from "../components/core/Main";
import Header from "../components/core/header/Header";
import Wrapper from "../components/core/Wrapper";
import Sidebar from "../components/core/sidebar";


interface DashboardProps {
  children?: ReactNode;
}

const Default: React.FC<DashboardProps> = ({ children }) => (
  <>
    <Wrapper>
      <Sidebar/>
      <Header/>
      <Main>
        {children}
        <Outlet/>
      </Main>
    </Wrapper>
  </>
);

export default Default;