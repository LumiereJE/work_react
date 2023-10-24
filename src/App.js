import { Fragment } from "react";
import "./App.css";
import WelcomeProp from "./WelcomeProps";
import Section from "./Section";
import MyComponent from "./MyComponent";
import Say from "./Say";

// const member = {
//   name: "곰돌이 사육사",
//   job: "개발자",
//   addr: "경기도 수원시",
//   gender: "남성"
// };

// const getGreeting = (user) => {
//   return user ? <h1>환영합니다. {member.name}</h1> : <h1>환영합니다. 방문자님.</h1>
// }

// function App() {

//   // 스타일 이름은 모두 카멜표기법으로
//   const test = {
//     backgroundColor: "#222",
//     color: "royalBlue",
//     fontSize: "2em",
//   };

function App() {
  return (
    // <>
    //   <div style={{color: "pink"}}>안녕하세요. 제 이름은 {member.name}이고, 나이는 {member.age}살이며, 주소는 {member.addr}입니다.</div>
    //   <p>두 개 이상 태그를 사용하면, Fragment or 빈태그 or div로 감싸줘야 함 → 주로 빈 태그 사용</p>

    //   {/* 조건부 렌더링 : 3항 연산자 */}
    //   {member.name === "리액트" ? <h1>제 이름은 리액트 입니다.</h1> : <h2>리액트 아님</h2>}

    //   <br></br>

    //   {/* 조건부 렌더링 : AND 연산자 사용 */}
    //   {member && <h1 style={test}>곰돌이 사육사님이 로그인 하셨습니다.</h1>}
    //   <br/>
    //   <div className="App">
    //     <p className="title_name">안녕하세요. 저는 {member.name}입니다.</p>
    //     <p className="title_name">직업 : {member.job}</p>
    //     <p className="title_name">주소 : {member.addr}</p>
    //     <p className="title_name">성별 : {member.gender}</p>
    //     <div>{getGreeting(true)}</div>
    //   </div>
    // </>

    // <>
    //   <WelcomeProp name="곰돌이사육사" addr="경기도 수원시" age = {22}/>
    //   <WelcomeProp name="안유진" addr="서울시 강남구" age = {21}/>
    //   <WelcomeProp name="장원영" addr="서울시 청담동" age = {20}/>
    // </>

    // <>
    //   <Section title="Section 1번" content="This is the content for section 1." url="https://yozm.wishket.com/media/news/1420/image001.png"/>
    //   <Section title="Section 2번" content="This is the content for section 2."/>
    // </>

    // <>
    //   <MyComponent name="곰돌이사육사" age={30}>
    //     안녕하세요
    //   </MyComponent>
    // </>

    <>
      <Say />
    </>
  );
}

// 다른데서 사용하고 싶으면 export 해줘야함
export default App;
