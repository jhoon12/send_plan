import React, { useCallback, useState } from "react";
import * as S from "./style";
interface Props {
  index: number;
  addToDoData: (todo: string, date: string) => void;
  todo: string;
  date: string;
}

const ModalInput: React.FC<Props> = ({ index, addToDoData, todo, date }) => {
  const [input, setInput] = useState<string>("");
  const inputChangeHandler = useCallback(
    e => {
      setInput(e.target.value);
    },
    [input]
  );

  return (
    <S.ToDoContainer key={index}>
      {todo.length > 0 ? (
        <S.ToDo placeholder="ToDo" onChange={inputChangeHandler}>
          {todo}
        </S.ToDo>
      ) : (
        <S.ToDoInput value={input} onChange={inputChangeHandler}></S.ToDoInput>
      )}
      <S.Success onClick={() => addToDoData(input, date)}>
        {todo.length > 0 ? "" : "확인"}
      </S.Success>
    </S.ToDoContainer>
  );
};

export default ModalInput;
