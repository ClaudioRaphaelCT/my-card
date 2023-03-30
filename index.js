const express = require("express");
const bd = require("./db/conn");
const app = express();
const router = require("./routers/router");

app.listen("3000", () => {
  console.log("Logado em http://localhost:3000");
});

app.use("/", router);
