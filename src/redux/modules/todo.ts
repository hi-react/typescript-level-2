import { v4 as uuid } from "uuid";

// type 지정
export interface TodoItem {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export interface TodoState {
  todo: TodoItem[];
}

interface Action {
  type: string;
  payload: any;
}

// action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const STATE_CHANGE_TODO = "STATE_CHANGE_TODO";

// action creator
export const addTodo = (todoItem: Omit<TodoItem, "isDone">): Action => {
  return {
    type: ADD_TODO,
    payload: {
      ...todoItem,
      isDone: false,
    },
  };
};

export const deleteTodo = (id: string): Action => {
  return { type: DELETE_TODO, payload: { id } };
};

export const stateChangeTodo = (id: string): Action => {
  return {
    type: STATE_CHANGE_TODO,
    payload: { id },
  };
};

const initialState: TodoState = {
  todo: [
    {
      id: uuid(),
      title: "리액트 강의보기",
      content: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: uuid(),
      title: "점심 먹기",
      content: "점심 뭐먹지..?",
      isDone: false,
    },
  ],
};

// reducer -> action 객체 안에 type과 payload!
const todo = (state: TodoState = initialState, action: Action): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(
          (todoItem) => todoItem.id !== action.payload.id
        ),
      };
    case STATE_CHANGE_TODO:
      return {
        ...state,
        todo: state.todo.map((todoItem) => {
          return todoItem.id === action.payload.id
            ? { ...todoItem, isDone: !todoItem.isDone }
            : todoItem;
        }),
      };
    default:
      return state;
  }
};

export default todo;
