import { ResDefault } from "../../payloads";
import { ReadToDoRes } from "../../payloads/ToDo";
import apiDefault from "../index";

interface SetImgFileInterface {
  lastModified: string;
  lastModifiedDate: object;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export const readToDo = async (date: string) => {
  return await apiDefault().get<ReadToDoRes>(`/todo/readToDo/${date}`);
};

export const addToDo = async (todo: string, date: string) => {
  return await apiDefault().post<ResDefault>("/todo/addToDo", {
    todo,
    date
  });
};

export const addToDoImg = async (imgFile: Blob, date: string) => {
  const formData: FormData = new FormData();
  formData.append("filename", imgFile);
  formData.append("date", date);
  return await apiDefault().post<ResDefault>(
    "/todo/addImage",
    formData
    // {headers:  "Content-Type" :  "multipart/form-data" }
  );
};
