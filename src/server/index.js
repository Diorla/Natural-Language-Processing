const express = require("express");
const cors = require("cors");
const app = express();
require("colors");
const port = 1960;
const path = require("path");

app.use(express.json());

app.use(cors());

app.use(express.static("src/client/static"));

app.get("/", (_req, res) => {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.listen(port, () => {
  console.log(
    `Server listening at ${("http://localhost:" + port).blue.underline}`
  );
});
