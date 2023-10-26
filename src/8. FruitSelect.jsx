import { useState } from "react";

const FruitSelect = () => {
  const [value, setValue] = useState("grape");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("선택한 과일 : " + value);
    e.preventDefault(); // 원래 이벤트(화면 초기화) 막음 → 사과 선택 후 사과 사라지고 기본 select 뜨는 것 방지
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요.
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};
export default FruitSelect;
