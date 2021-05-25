import { useSelector } from "react-redux";
import { ReducerType } from "../../../redux/store";

const useReadImageCase = () => {
  const { imageDateArr } = useSelector(
    (store: ReducerType) => store.ToDoDataState
  );
  const readImageDate = (date: string): string[] => {
    //   console.log(date)
    return imageDateArr.map((ele, index) => {
      if (date === ele.date) {
        console.log(`${index}번 호출${date}, ${ele.date}`);
        return ele.img;
      }
    });
  };
  return {
    readImageDate
  };
};
export default useReadImageCase;
