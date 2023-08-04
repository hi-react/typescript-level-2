import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { TodoState } from "../redux/modules/todo";

interface RootState {
  todo: TodoState;
}

function DetailPage() {
  // store에서 todo 데이터 가져오기
  const { todo } = useSelector((state: RootState) => state.todo);

  // Router에서 URL parameter인 id값 가져오기 -> TodoList 컴포넌트의 <Link>에서 id 값을 담아 보내줌
  // params 콘솔 찍으면, {id: 10392813} 이런 형태
  const params = useParams();

  // todo 돌면서 params로 가져온 id값에 해당하는 todo 찾기(find 메서드)
  const foundTodo = todo.find((todoItem) => {
    return todoItem.id === params.id;
  });

  // foundTodo는 undefined일 수 있기 때문에 적절한 처리가 필요
  if (!foundTodo) {
    return <p>Todo not found!</p>;
  }

  return (
    <StLayout>
      <StTodoItem key={foundTodo.id}>
        <StNav>
          <div>id: {foundTodo.id}</div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#5b92dc",
            }}
          >
            이전으로
          </Link>
        </StNav>
        <StTodoItemInfo>
          <StTodoItemTitle>{foundTodo.title}</StTodoItemTitle> <br />
          <StTodoItemContent>{foundTodo.content}</StTodoItemContent>
        </StTodoItemInfo>
      </StTodoItem>
    </StLayout>
  );
}

export default DetailPage;

// styled-components
const StLayout = styled.section`
  max-width: 1200px;
  min-width: 800px;

  margin: auto;
`;

const StTodoItem = styled.div`
  width: 700px;
  margin: 100px auto;
  padding: 50px;

  background-color: #e5eefa;
  border: 3px solid #5b92dc;

  border-radius: 20px;
`;

const StNav = styled.nav`
  display: flex;
  justify-content: space-between;
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

const StTodoItemContent = styled.p`
  margin-top: 0px;
`;
