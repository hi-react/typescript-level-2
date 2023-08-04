import { useDispatch, useSelector } from "react-redux";
import { useInput } from "./useInput";
import {
  TodoState,
  addTodo,
  deleteTodo,
  stateChangeTodo,
} from "../redux/modules/todo";
import { v4 as uuid } from "uuid";
import { FormEvent } from "react";

interface RootState {
  todo: TodoState;
}

export const useTodo = () => {
  const [title, setTitle] = useInput();
  const [content, setContent] = useInput();

  const { todo } = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();

  // Add 버튼
  const addTodoItemHandler = (event: FormEvent) => {
    // [검증] return을 해주지 않으면, 모두 입력해달라는 알람이 뜨고도 빈 카드를 그대로 붙여넣음!
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      setTitle("");
      setContent("");
      return;
    }
    event.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        title,
        content,
      })
    );
    setTitle("");
    setContent("");
  };

  const updateTodoItemHandler = (id: string) => {
    dispatch(stateChangeTodo(id));
  };

  const deleteTodoItemHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    todo,
    addTodoItemHandler,
    updateTodoItemHandler,
    deleteTodoItemHandler,
  };
};
