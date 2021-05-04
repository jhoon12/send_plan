import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";
export class ToDo extends Model {
  ToDo: string;
  email: string;
  date: string;
  todoID: number;
}
ToDo.init(
  {
    ToDo: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING(30),
    },
    date: {
      type: Sequelize.STRING(15),
    },
    todoID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "todo",
  }
);
