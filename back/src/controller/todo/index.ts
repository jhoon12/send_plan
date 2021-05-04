import { Response, Request, NextFunction } from "express";
import { User } from "../../models/user";
import { ToDo } from "../../models/todo";

export const addToDo = async (req: Request, res: Response, next) => {
  const date: string = req["date"];
  const todo: string = req["todo"];
  await ToDo.create({ email: req["decoded"].email,  });
  const a = await User.findAll({
    where: { email: req["decoded"].email },
    include: [
      {
        model: ToDo,
      },
    ],
  });

  res.status(200).json(a);
};
