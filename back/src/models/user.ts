import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";
import { Code } from "./code";
export class User extends Model {
  email!: string;
  pw: string;
  id: string;
}
User.init(
  {
    email: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    pw: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    id: {
      type: Sequelize.STRING(30),
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);
