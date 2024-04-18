import { Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useRoutes } from "react-router-dom";

import "./i18next"

import routes from "./routes";
import Loading from "./components/core/Loading";

import { AuthProvider } from "./contexts/AuthContext";
// import AnimationProvider from "./contexts/AnimationProvider";


function App() {
  const content = useRoutes(routes);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | H.M - Portfolio"
        defaultTitle=" H.M - Django & React Dev "
      />

      <Suspense fallback={<Loading />}>
        <AuthProvider>
          {content}
        </AuthProvider>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
