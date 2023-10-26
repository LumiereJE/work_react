import { useState } from "react";

/*
> const NameCard = (props) => {return()} - 입력받은 정보를 보여주는 틀을 props로 전달  

> Info_form 
const [member, setMember] = useState() - 각 정보마다 빈칸으로 초기화해둠
const [submit, setSubmit] = useState() - 값을 전달할 버튼을 false로 초기화 함
const onClick = () => {setSubmit(true);}; - 클릭 발생시, 버튼 true


*/

// const NameCard = (props) => 로 하면 {props.member.name}으로 들어가야 함
const NameCard = (props) => {
  return (
    <>
      <h3>명함 정보 출력</h3>
      <p>이름 : {props.member.name}</p>
      <p>직책 : {props.member.position}</p>
      <p>회사 : {props.member.company_name}</p>
      <p>주소 : {props.member.company_addr}</p>
      <p>메일 : {props.member.email}</p>
      <p>전화 : {props.member.phone}</p>
    </>
  );
};

const Info_form = () => {
  const [member, setMember] = useState({
    name: "",
    position: "",
    company_name: "",
    company_addr: "",
    email: "",
    phone: "",
  });

  // 방법1 : 아래 return에    onChange={onChangeName} 으로 변경 하면 됨
  //   const onChangeName = (e) => setMember({ ...member, name: e.target.value });
  //   const onChangePosition = (e) =>
  //     setMember({ ...member, position: e.target.value });
  //   const onChangeCompanyName = (e) =>
  //     setMember({ ...member, company_name: e.target.value });
  //   const onChangeCompanyAddr = (e) =>
  //     setMember({ ...member, company_addr: e.target.value });
  //   const onChangeEmail = (e) => setMember({ ...member, email: e.target.value });
  //   const onChangePhone = (e) => setMember({ ...member, phone: e.target.value });

  const onChange = (key, value) => {
    // 방법 2 : 계산된 속성명은 ES6에서 추가 되었으며 []안에 표현식을 넣으면 됨
    // ... : 전개연산자(값을 펼쳐서 넣을 수 있음)
    // key값이 name이면 해당하는 value를 업데이트 해라
    setMember({ ...member, [key]: value });
  };

  const [submit, setSubmit] = useState(false);

  const onClick = () => {
    setSubmit(true);
  };

  return (
    <>
      <h1>회원 정보</h1>
      <input
        type="text"
        placeholder="이름"
        value={member.name}
        // 입력한 값을 value에 담아서 메인 필드에 key값으로 넘김
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="직책"
        value={member.position}
        onChange={(e) => onChange("position", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="회사명"
        value={member.company_name}
        onChange={(e) => onChange("company_name", e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="회사주소"
        value={member.company_addr}
        onChange={(e) => onChange("company_addr", e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="이메일"
        value={member.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <br />
      <input
        type="tel"
        placeholder="전화번호"
        value={member.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <br />

      <button onClick={onClick}>입력</button>
      {/* 제출 버튼 누르면 발생할 이벤트 */}
      {submit && <NameCard member={member} />}
    </>
  );
};

export default Info_form;
