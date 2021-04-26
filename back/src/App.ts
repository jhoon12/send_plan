import express, { Application, Request, Response } from "express";
import { sequelize } from "./config/config";
import cors from "cors";
import router from "./routes";
import morgan from "morgan";

const app: Application = express();

app.use(morgan("dev"));
app.use(cors());
sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(process.env.DB_PORT || 8000, () => {
  console.log("Server listening on port 8000");
});
