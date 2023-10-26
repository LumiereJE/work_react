// 객체 배열에서 map()을 사용하는 방법 (컴포넌트 렌더링 포함)
// 리액트에서 key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용

import "./App.css";

const UserList_5 = () => {
  const users = [
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gmail.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];

  const seasons = ["새로운 봄", "활기찬 여름", "풍성한 가을", "새하얀 겨울"];
  const newSeasons = seasons.map((e, index) => <li key={index}>{e}</li>);

  return (
    <>
      <h1>천원짜리 변호사 직원 리스트</h1>{" "}
      {users &&
        users.map((user) => (
          <div key={user.email}>
            <b>{user.userName}</b> <span>{user.email}</span>
          </div>
        ))}
      <h1>계절 표시</h1>
      <ul>{newSeasons}</ul>
    </>
  );
};

export default UserList_5;
