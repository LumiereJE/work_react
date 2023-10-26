import { useReducer } from "react";

// 기본 형태
// const [state, dispatch] = useReducer(reducer, initialState, init);

// : reducer는 이전 상태와 Action을 합쳐, 새로운 state를 만드는 조작
// : useState를 대체할 수 있는 함수
// : 컴포넌트 상태관리를 위함 → 기본적 : state, 복잡한 작업 : reducer (콜백대신 dispatch를 전달할 수 있기 때문)

// : useState와 마찬가지로 상태 관리를 위해서 사용, 복잡한 로직을 가진 상태를 관리하는데 유용함(세밀한 제어 가능)
// : 전역상태를 관리하기 위함도 있음, 함수 상태 관리 -> 함수를 밖으로 빼도 가능

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>현재 카운터 값은 {state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
    </>
  );
};

export default Counter2;
