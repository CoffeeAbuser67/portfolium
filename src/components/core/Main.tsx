import { ReactNode } from "react";

interface MainProps {
  children?: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
  <div id ="main">{children}</div>
);

export default Main;
