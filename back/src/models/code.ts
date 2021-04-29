import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";

export class Code extends Model {
  email?: string;
  code: string;
}

Code.init(
  {
    email: {
      primaryKey: true,
      type: Sequelize.STRING(30),
    },
    code: {
      type: Sequelize.STRING(10),
    },
  },
  {
    sequelize,
    modelName: "code",
  }
);
