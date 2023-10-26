// 비효율적이지만 코드 그대로 찍는 1번 방법을 그나마 살려보기 (여전히 비추)
// 컴포넌트를 만들고 props로 전달하는 방법

const User = (props) => {
  return (
    // 화면 구현부
    <div>
      <b>{props.user.userName}</b> <span>{props.user.email}</span>
    </div>
  );
};

const UserList_2 = () => {
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
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </>
  );
};

export default UserList_2;
