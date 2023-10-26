import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "장원영", age: 20 },
    { id: 2, name: "이서", age: 18 },
    { id: 3, name: "가을", age: 22 },
    { id: 4, name: "리즈", age: 21 },
  ];
  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          // map에서 key값 안넣어주면 다 뒤져야해서 성능 떨어짐 → 유일한 식별자가 있어야 함 id를 key값으로 사용하는 등
          // 해당하는 라인 클릭했을 때 콘솔에 정보 보여주기
          <tr key={item.id} onClick={() => handleTableRowClick(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
