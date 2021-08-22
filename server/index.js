const express = require("express");
const cors = require("cors");

const useRoutes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
useRoutes(app);

app.listen(3001, (_) => console.log("listening on port 3001"));
