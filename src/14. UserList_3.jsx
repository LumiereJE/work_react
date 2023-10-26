// 객체 배열에서 map()을 사용하는 방법 (컴포넌트 렌더링 포함)
// 고유값 key 이용

const UserList_3 = () => {
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

  const newUsers = users.map((user) => (
    <div key={user.email}>
      <b>{user.userName}</b> <span>{user.email}</span>
    </div>
  ));

  return (
    <>
      <h1>천원짜리 변호사 직원 리스트</h1>
      {newUsers}
    </>
  );
};

export default UserList_3;
