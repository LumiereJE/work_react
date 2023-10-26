// onChange 이벤트 핸들링
import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("안녕하세요");
  const changeMsg = (e) => {
    setMessage(e.target.value); // 이벤트가 일어난 타겟을 찾게 함. input창에 들어온 값을 읽어낼 수 있음
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="이름을 입력 하세요"
        onChange={changeMsg}
      />
      <h2>입력받은 메세지 : {message}</h2>
    </>
  );
};

export default EventPractice;
