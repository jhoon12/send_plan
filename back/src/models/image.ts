import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";

export class Image extends Model {
  img: string;
  date: string;
}
Image.init(
  {
    img: {
      type: Sequelize.STRING(100),
    },
    date: {
      type: Sequelize.STRING(15),
    },
    email: {
        type: Sequelize.STRING(30),
      },
  },
  {
    sequelize,
    modelName: "Image",
  }
);
