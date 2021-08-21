const express = require("express");

const useRoutes = require("./routes/routes");

const app = express();

useRoutes(app);

app.listen(3001, (_) => console.log("listening on port 3001"));
