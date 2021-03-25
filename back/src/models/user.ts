import sequelize from "../config/config";
import Sequelize, { Model } from "sequelize";
export class User extends Model {
  email: string;
  password: string;
  id: string;
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
    nickname: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING(45),
      defaultValue: "user.jpg",
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);
