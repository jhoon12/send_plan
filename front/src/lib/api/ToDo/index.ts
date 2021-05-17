import apiDefault from "../index";

export const readToDo = async (date: string) => {
  const res = await apiDefault().get("/todo/readToDo", {
    headers: {
      date
    }
  });
  return res.data;
};
