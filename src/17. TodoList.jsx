import { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "html 연습" },
    { id: 2, text: "css 복습" },
    { id: 3, text: "자바스크립트 공부" },
    { id: 4, text: "리액트 공부" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  // 내용이 입력 될 때 변경을 감지
  const onChange = (e) => setInputText(e.target.value);

  // 버튼이 눌러졌을 때 새로운 todo list추가 → 여기서 반영 안함, 아래 setTodo에서 반영함
  const onClick = () => {
    const nextTodo = todo.concat({
      // concat: 원본 배열을 유지한 채 배열을 반환
      id: nextId,
      text: inputText,
    });
    setTodo(nextTodo); // 새로운 todo List를 반영하고 리렌더링함
    setNextId(nextId + 1);
    setInputText(""); // 입력창을 초기화 함
  };

  // 리스트 제거 기능
  const onRemove = (id) => {
    // todo의 id와 지금 받은 id와 같지 않으면 새로운 배열로 만들어냄(남김). 같으면 걸러냄(삭제).
    const removeTodo = todo.filter((e) => e.id !== id);
    setTodo(removeTodo);
  };

  // 더블클릭 됐을 때 onRemove발생 → id값을 넘겨줌 → 삭제
  const newTodoList = todo.map((e) => (
    <li key={e.id} onDoubleClick={() => onRemove(e.id)}>
      {e.text}
    </li>
  ));

  //const newTodoList = todo.map((e) => <li key={e.id}>{e.text}</li>);

  return (
    <>
      <p className="title-name">할 일 목록</p>
      <p className="delete-guide">삭제 : 더블클릭</p>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{newTodoList}</ul>
    </>
  );
};

export default TodoList;
