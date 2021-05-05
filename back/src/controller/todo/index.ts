import { Response, Request, NextFunction } from "express";
import { User } from "../../models/user";
import { ToDo } from "../../models/todo";

export const addToDo = async (req: Request, res: Response, next) => {
  const date: string = req.body["date"];
  const todo: string = req.body["todo"];
  try {
    if (todo.length > 0 && date.length > 0) {
      await ToDo.create({
        email: req["decoded"].email,
        ToDo: todo,
        date: date,
      });
      res.status(200).json({
        status: "Success",
        code: 200,
        message: "Add ToDo",
      });
    }
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const readToDo = async (req: Request, res: Response, next) => {
  const userToDoData = await User.findAll({
    where: { email: req["decoded"].email },
    include: [
      {
        model: ToDo,
      },
    ],
  });
  res.status(200).json(userToDoData[0]["todos"]);
};

export const addImage = async (req: Request, res: Response, next) => {
  console.log(req);
  console.log(req.file.filename);
  res.status(200).json(req.file);
};
