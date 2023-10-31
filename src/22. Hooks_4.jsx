// useMemo
// : 컴포넌트의 성능을 최적화하기 위해 사용함
// : 이전에 계산한 값을 재사용한다는 의미

// useCallback
// : 컴포넌트의 성능을 최적화하기 위해 사용함
// : 함수 재사용

import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  // 입력값이 없으면 계산이 이루어지지 않게 방어적인 코드를 추가함 => 불필요한 호출을 방지
  if (numbers.length === 0) return 0;
  console.log("평균 값 계산 타이밍");
  // 두개의 입력 값(a, b)을 받아 하나의 결과값(a = a + b)으로 만들고, 다음의 요소(새로운 b)와 연산.
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  // onChange → 입력값이 변경 될 때
  // callback함수 → 눌렀을때 불려지는(실행되는)함수
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = useCallback(() => {
    // concat을 이용해서 새로운 주소값을 받게 해서 렌더링 유도
    // 기본적으로 값을 입력받으면 String이기 때문에 parseInt로 정수로 변환 함
    console.log("리스트에 값을 추가");
    if (isNaN(parseInt(number))) return 0;
    const nextList = list.concat(parseInt(number));
    setList(nextList); // 값이 추가 될 때마다 새로운 list를 만들어줌
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  // 빈 배열 넣으면 렌더링 시, 최초 한번 실행
  // 빈 배열에 list를 넣으면, list가 갱신 될 때 최초 한번 실행.
  // 이 전 값을 avg가 가지고 있어야 함 → useMemo사용
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>

      {/* index값을 key로 쓰기위해 map 사용 */}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* 즉시 실행 함수, callback함수가 아님! */}
        <b>평균값 : </b> {avg}
      </div>
    </>
  );
};

export default Average;
