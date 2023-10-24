// props 기본값 설정 : defaultProps
const MyComponent = (props) => {
  // 비구조화할당(구조 분해)
  // : props 객체의 속성과 값을 변수에 대입함
  // : 배열이나 객체의 속성 혹은 값을 해체하여
  //   그 값을 변수에 각각 담아 사용하는 자바스크립트 표현식

  const { name, age, children } = props;

  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다. 나이는 {age}세 입니다, 인사말 :
      {children}
    </div>
  );
};
MyComponent.defaultProps = {
  name: "기본이름",
  age: 20,
};

export default MyComponent;
