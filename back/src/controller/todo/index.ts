import { Response, Request, NextFunction } from "express";
import { User } from "../../models/user";
import { ToDo } from "../../models/todo";
import { Op } from "sequelize";

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
  try {
    const userToDoData = await User.findAll({
      where: { email: req["decoded"].email },
      include: [
        {
          model: ToDo,
          where: {
            date: req.params["date"],
          },
        },
      ],
    });
    return res.status(200).json(userToDoData);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const addImage = async (req: Request, res: Response, next) => {
  try {
    console.log(req.file.filename);
    await ToDo.create({
      img: req.file.filename,
      email: req["decoded"].email,
      date: req.body["date"],
    });
    res.status(200).json({
      status: "Success",
      code: 200,
      message: "Add Image",
    });
  } catch (err) {
    console.log(err);
  }
};
export const readImage = async (req: Request, res: Response, next) => {
  try {
    const { start, end } = req.query;
    const userMonthImg = await ToDo.findAll({
      where: {
        email: req["decoded"].email,
        date: { [Op.between]: [String(start), String(end)] },
      },
    });
    res.status(200).json(userMonthImg);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
