import { lazy } from "@loadable/component";
import DefaultLayout from "./layouts/Default";


//Pages
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Canvas = lazy(() => import("./pages/Home"));
const Info = lazy(() => import("./pages/Info"));
const Services = lazy(() => import("./pages/Services"));
const Contactme = lazy(() => import("./pages/Contactme"));
const Projects = lazy(() => import("./pages/Projects"));

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Canvas />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contactme",
        element: <Contactme />,
      },
    ],
  },
];

export default routes;
