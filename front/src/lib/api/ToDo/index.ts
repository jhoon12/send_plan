import apiDefault from "../index";
import axios from "axios";

export const readToDo = async (date: string) => {
  const res = await apiDefault().get(`/todo/readToDo/${date}`);
  return res.data;
};
