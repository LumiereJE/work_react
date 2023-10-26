// useState()를 사용해서 시간 업데이트 하기
import { useEffect, useState } from "react"; // react라이브러리에서 useState를 꺼내서 쓰겠다

// 컴포넌트 부분 : 화면의 동작과 화면을 그려주는 요소가 모두 포함 됨, 구성된 화면이 반환 됨.
const Clock = () => {
  // 컴포넌트 생성

  // date    → 실제 화면에 나타나는 값
  // setDate → 값을 변경시켜주는 함수, 값이 변경되면 자동 렌더링 됨
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // 화면이 그려질때 실행
    const tick = () => {
      // 화살표 함수로 만들어진 익명의 함수
      setDate(new Date());
    };

    const intervalID = setInterval(tick, 1000); // setInterval은 한번만 만들어도 n초마다 렌더링 되기 때문에 오래켜두면 데이터가 누적되어 딜레이됨

    // 컴포넌트가 언마운트 되는 시점 : 화면이 사라질 때, interval 끝내기
    return () => {
      clearInterval(intervalID);
    };
  }, []); // []:의존성 배열 ( 빈배열 : 화면이 최초로 한번 그려질때(마운트되는 시점)만 실행 )

  return (
    <>
      <h1>현재 시간을 표시 합니다.</h1>
      <h2>현재 시간 : {date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
