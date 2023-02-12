import React from "react";
import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router";
import routes from "route/routes";

const App = () => {
  return (
    <>
      <Toaster position="top center" />
      {useRoutes(routes)}
    </>
  );
};

export default App;
