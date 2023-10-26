// 컴포넌트 합성 
// : 여러개의 컴포넌트를 조합하여 하나의 컴포넌트를 만드는 것
// : 관례상 이름은 대문자로 시작 (함수와 구분하기 위함)


import personImg from "../src/images/오잉.jpg";

function Heading(props) {
    return <h1>{props.text}</h1>
}
function Paragraph(props) {
    return <p>{props.text}</p>
}
function ImgUrl(props) {
    return <img style={{height: "300px"}} src={personImg} alt="이미지 테스트"/>
}

const Section = (props) => {
    return (
        <>
            <Heading text={props.title}/>
            <Paragraph text={props.content}/>
            <ImgUrl url={props.url}/>
        </>
    );
}

export default Section;