import createHome from "./pages/home.js";
import createGenerator from "./pages/generator/generator.js";
import Router from "@zyrab/domo-router";

function initApp() {
  Router.routes(routes);
  Router.init();
  const app = document.getElementById("app");
  app.appendChild(Router.mount());
}

const routes = {
  "/": {
    component: createHome,
    meta: { title: "CV - Generator", description: "Generate your CV online" },
  },
  "/generator": {
    component: createGenerator,
    meta: { title: "CV - Generator", description: "Generate your CV online" },
  },
};

initApp();
