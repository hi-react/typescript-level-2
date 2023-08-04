import { createStore, combineReducers, Store } from "redux";
import todo, { TodoState } from "../modules/todo"; // modules에서 todo 데이터 import

// type 지정
export interface RootState {
  todo: TodoState;
}

// Store (중앙 데이터 관리소) 만들기 -> 객체 형태로 modules의 reducer 데이터 관리
const rootReducer = combineReducers<RootState>({
  todo,
});
const store: Store<RootState> = createStore(rootReducer);

export default store;
