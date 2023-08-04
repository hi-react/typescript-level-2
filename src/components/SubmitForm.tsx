import { styled } from "styled-components";
import { useTodo } from "../hooks/useTodo";
import { ChangeEvent, FC, FormEvent } from "react";

interface TodoForm {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  addTodoItemHandler: (e: FormEvent) => void;
}

const SubmitForm: FC = () => {
  const { title, setTitle, content, setContent, addTodoItemHandler }: TodoForm =
    useTodo();

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  return (
    <StAddForm onSubmit={addTodoItemHandler}>
      <label>제목: </label>
      <StInputTitle
        value={title}
        placeholder="제목을 입력해주세요."
        onChange={onChangeTitle}
      />
      &nbsp;
      <label>내용: </label>
      <StInputContent
        value={content}
        placeholder="내용을 입력해주세요."
        onChange={onChangeContent}
      />
      <StButton>추가하기</StButton>
    </StAddForm>
  );
};

export default SubmitForm;

// styled-components
const StAddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 120px;

  padding: 0px 35px;

  background-color: #d8e5f7;

  border: 1px solid gray;
  border-radius: 10px;
`;

const StInputTitle = styled.input`
  height: 40px;
  width: 270px;

  padding: 0 12px;

  border: 1px solid rgb(182, 161, 161);
  border-radius: 4px;
`;

const StInputContent = styled.input`
  height: 40px;
  width: 600px;

  padding: 0 12px;

  border: 1px solid rgb(182, 161, 161);
  border-radius: 4px;
`;

const StButton = styled.button`
  height: 40px;
  width: 110px;

  margin-right: 10px;

  border: 1px solid gray;
  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  color: black;
  cursor: pointer;

  // hover는 어떻게 하징........
`;
