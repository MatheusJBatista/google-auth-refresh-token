const todoRoutes = require("./todo-routes");
const tokenRoutes = require("./token-routes");

const useRoutes = (app) => {
  app.use("/to-do", todoRoutes);
  app.use("/token", tokenRoutes);
};

module.exports = useRoutes;
