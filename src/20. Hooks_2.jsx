/*
useEffect

: 생명주기 메소드를 대체하는 react Hook 중 하나
: 컴포넌트가 렌더링 될 때마다 특정 동작을 수행함

: useEffect는 컴포넌트가 렌더링 된 이후에 수행되며, 기본적으로 매 렌더링마다 수행 됨 
  → 좋은 건 아님 (과정동안 로그가 하나하나 계속 쌓임)

: 의존성 배열[]에 전달된 상태가 변경 될 때 마다 수행되게 함 
  → 굿 (변경이 완료 될 때만 로그가 쌓임)
*/

import { useState, useEffect } from "react";

const MemberInfo = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    console.log("렌더링 완료");
    console.log(name, nickName);
  }, []);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        placeholder="이름"
      />
      <input
        type="text"
        value={nickName}
        onChange={onChangeNickName}
        placeholder="닉네임"
      />

      <p>이름 : {name}</p>
      <p>닉네임 : {nickName}</p>
    </>
  );
};

export default MemberInfo;
