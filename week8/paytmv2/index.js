const express = require("express");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const app = express();
app.use(express.json());

const mainRouter = require("./routes/ind");

app.use("/api/v1", mainRouter);

app.listen(3000);