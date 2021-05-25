import React from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "../../../redux/store";

const useReadImageCase = () => {
  const { imageDateArr } = useSelector(
    (store: ReducerType) => store.ToDoDataState
  );
  const readImageDate = (date: string) => {
    imageDateArr.map(ele => {
      if (date === ele.date) {
        return ele.img;
      }
    });
  };
  return {
    readImageDate
  };
};
export default useReadImageCase;
