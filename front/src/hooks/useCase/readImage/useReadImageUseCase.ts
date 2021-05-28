import { useSelector } from "react-redux";
import { ReducerType } from "../../../redux/store";

const useReadImageCase = () => {
  const { imageDateArr } = useSelector(
    (store: ReducerType) => store.ToDoDataState
  );
  const readImageDate = (date: string): string | void => {
 
    for (let i = 0; i < imageDateArr.length; i++) {
      if (date === imageDateArr[i].date) {
        return imageDateArr[i].img;
      }
    }
  };
  return {
    readImageDate
  };
};
export default useReadImageCase;
