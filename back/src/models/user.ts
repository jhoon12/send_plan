import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";

export class User extends Model {
  email!: string;
  password: string;
}
User.init(
  {
    email: {
      type: Sequelize.STRING(30),
    },
    pw: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    id: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);
