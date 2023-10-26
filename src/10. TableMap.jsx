import { useState, useEffect } from "react";

const TableMap = () => {
  const data = [
    { id: 100, name: "카즈하", age: 21 },
    { id: 200, name: "홍은채", age: 17 },
    { id: 300, name: "허윤진", age: 22 },
    { id: 400, name: "김채원", age: 23 },
  ];

  const [mapData, setMapData] = useState("");

  // useEffect는 렌더링이 이루어 진 후에 돌아감 !!!!!!!!!
  useEffect(() => {
    //구현부
    setMapData(data);
  }, []);

  const tableClickEvent = (item) => {
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
        {mapData && // 조건부 렌더링 : map data가 있으면 그려줘라 - 데이터가 있을때 돌리기 // 무조건 있어야함 !!!
          mapData.map((item) => (
            <tr key={item.id} onClick={() => tableClickEvent(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableMap;
