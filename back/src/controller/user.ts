import { User } from "../models/user";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const YOUR_SECRET_KEY = process.env.SECRET_KEY;

export const createToken = async function (req, res, next) {
  try {
    const user = await User.find(req.body);
    if (user.length) {
      const token = jwt.sign(
        {
          user_id: user[0].user_id,
        },
        YOUR_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("user", token);
      res.status(201).json({
        result: "ok",
        token,
      });
    } else {
      res.status(400).json({ error: "invalid user" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
export const createNewUser = async function (req, res, next) {
  let localEmail :string = req.body.email;
  let localPassword : string = req.body.password;

  let findConditionLocalUser = {
    email: localEmail,
    password: localPassword,
  };
//   User.findOne(findConditionLocalUser,function (req, res, err, user) {
//     if (err) {
//       res.json({
//         type: false,
//         data: "Error occured " + err,
//       });
//     } else if (!user) {
//       res.json({
//         type: false,
//         data: "Incorrect email/password",
//       });
//     } else if (user) {
//       res.json({
//         type: true,
//         data: user,
//         token: user.jsonWebToken,
//       });
//     }
//   })
//   User.findOne(findConditionLocalUser, ).exec(function (err, user) {
//     if (err) {
//       res.json({
//         type: false,
//         data: "Error occured " + err,
//       });
//     } else if (!user) {
//       res.json({
//         type: false,
//         data: "Incorrect email/password",
//       });
//     } else if (user) {
//       res.json({
//         type: true,
//         data: user,
//         token: user.jsonWebToken,
//       });
//     }
//   });
};
