import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useTodo } from "../hooks/useTodo";
import { FC } from "react";

interface TodoListProps {
  isDone: boolean;
}

const TodoList: FC<TodoListProps> = ({ isDone }) => {
  const { todo, updateTodoItemHandler, deleteTodoItemHandler } = useTodo();

  return (
    <>
      <StTodoMenu>{isDone ? "완료한 일 🛠️" : "해야할 일 ✍🏻"}</StTodoMenu>
      <StTodoList>
        {todo
          .filter((todoItem) => todoItem.isDone === isDone)
          .map(({ id, title, content }) => {
            return (
              <StTodoItem key={id}>
                <Link
                  to={`/detail/${id}`}
                  style={{
                    textDecoration: "none",
                    color: "#1174ad",
                  }}
                >
                  상세보기
                </Link>
                <StTodoItemInfo>
                  <StTodoItemTitle>{title}</StTodoItemTitle> <br />
                  <StTodoItemContent>{content}</StTodoItemContent>
                </StTodoItemInfo>
                <StButtonSet>
                  <StStateChangeButton
                    onClick={() => {
                      updateTodoItemHandler(id);
                    }}
                  >
                    {isDone ? "취소" : "완료"}
                  </StStateChangeButton>
                  <StDeleteButton
                    onClick={() => {
                      deleteTodoItemHandler(id);
                    }}
                  >
                    삭제
                  </StDeleteButton>
                </StButtonSet>
              </StTodoItem>
            );
          })}
      </StTodoList>
    </>
  );
};

export default TodoList;

// styled-components
const StTodoMenu = styled.h1`
  margin: 25px 30px;
  font-size: 24px;
  font-weight: 600;
`;

const StTodoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StTodoItem = styled.div`
  /* height: 180px; */
  width: 280px;
  margin: 10px 10px 10px 10px;
  padding: 20px;
  background-color: #e5eefa;
  /* border: 3px solid #5b92dc; */
  border: 3px solid #a0a2a5;

  border-radius: 20px;
`;

const StTodoItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding-top: 40px;

  font-size: 16px;
  color: black;
`;

const StTodoItemTitle = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: 20px;
`;

// 내용이 길어지면 줄바꿈 되도록
const StTodoItemContent = styled.p`
  margin-top: 0px;
  word-break: break-word;
`;

const StButtonSet = styled.div`
  gap: 10px;

  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

const StStateChangeButton = styled.button`
  height: 30px;
  width: 40%;

  background-color: #f4f7fc;

  border: 2px solid #216acd;
  border-radius: 5px;
  cursor: pointer;

  // hover...............
`;

const StDeleteButton = styled.button`
  height: 30px;
  width: 40%;

  background-color: #f4f7fc;

  border: 2px solid red;
  border-radius: 5px;
  cursor: pointer;
`;
