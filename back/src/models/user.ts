import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";

export class User extends Model {
  email: string;
  password: string;
}
User.init(
  {
    email: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

