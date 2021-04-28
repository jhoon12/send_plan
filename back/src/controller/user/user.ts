import { User } from "../../models/user";

import { mkAccess, mkRefresh } from "./mktoken";
import { Response, Request } from "express";

export const SignUp = async (req: Request, res: Response, next) => {

  const { email, pw, id } = req.body;
  if (!(await User.findOne({ where: { id } }))) {
    console.log("요청");
    try {
      await User.create({
        id: id,
        email: email,
        pw: pw,
      });
      res.status(200).send("성공");
    } catch (err) {
      console.log(err.message);
    }
  } else {
    res.status(400).send("실패");
  }
};

export const Login = async function (req: Request, res: Response, next) {
  try {
    const user = await User.findOne({
      where: { id: req.body.id, pw: req.body.pw },
    });
    if (!user) res.status(404).send("없는 유저입니다.");
    else {
      const accessToken = await mkAccess(req, user);
      const refreshToken = await mkRefresh(req, user);
      res.status(201).json({
        result: "ok",
        accessToken,
        refreshToken,
      });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const refresh = async (req: Request, res: Response, next) => {
  console.log(req["decoded"]);
  const user = await User.findOne({ where: { id: req["decoded"].id } });
  const accessToken = await mkAccess(req, user);
  res.status(200).json({ accessToken });
};
