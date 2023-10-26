// 비효율적이지만 배열 그대로 코드를 작성하는 방법
// 배열을 쓰는데 map을 안쓰면 이렇게 밖에 못함

// 추천하지 않음. 안써야 하는 방법임.

const UserList_1 = () => {
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

  return (
    <>
      <div>
        <b>{users[0].userName}</b> <span>{users[0].email}</span>
      </div>
      <div>
        <b>{users[1].userName}</b> <span>{users[1].email}</span>
      </div>
      <div>
        <b>{users[2].userName}</b> <span>{users[2].email}</span>
      </div>
    </>
  );
};

export default UserList_1;
