import { lazy } from "@loadable/component";

import DefaultLayout from "./layouts/Default";
import ProtectedRoute from "./services/ProtectedRoute";

//Pages
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Canvas = lazy(() => import("./pages/Home"));
const Info = lazy(() => import("./pages/Info"));
const Services = lazy(() => import("./pages/Services"));
const Contactme = lazy(() => import("./pages/Contactme"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default routes;
