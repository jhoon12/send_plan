import express, { Application, Request, Response } from "express";
import sequelize from "./models/index";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";
// import path from "path";
// const app = new App().application;

const app: Application = express();

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
