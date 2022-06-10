import express from "express";
import { mapOrder } from "./utilities/sorts.js";

const app = express();

const hostname = "localhost";
const port = 8088;

app.get("/", (req, res) => {
  res.end("<h1>Hello word !</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Hello haipham, I'm running at ${hostname}:${port}/`);
});
