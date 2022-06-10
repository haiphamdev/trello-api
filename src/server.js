import express from "express";
import { env } from "./config/environtment.js";
import { connectDB } from "./config/mongodb.js";

const app = express();

connectDB().catch(console.log);

app.get("/", (req, res) => {
  res.end("<h1>Hello word !</h1>");
});

app.listen(env.PORT, env.HOST, () => {
  console.log(`Hello haipham, I'm running at ${env.HOST}:${env.PORT}/`);
});
