import React, { useState } from 'react'

// const FilleInput = () => {
// return <input type='file' id='file' multiple onChange={handleChange} key={fileKey}/>

// } 


const MyForm = () => {
  const [name , setName] = useState('');
  const [req , setReq] = useState('');
  const [fruit , setValue] = useState('요청사항을 입력하세요');
  const [file, setFile] = useState('');
  // let value = '';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //과일 미선택시 alert로 알림 메세지 표시
    !fruit && alert('과일선택');
    // console.log(document.getElementById("name").value);
    
  }
  // const reset = () => {
  //   //setFile([])
  //   setFilekey(prv => prv +1)
  // }
  
  const handleChange = e => {
    // 카드번호,전화번호입력할때 숫자만 할 수 있게 설정가능(정규식사용)
    //-------------------숫자만 기입시---------------------------------------
    //스위치사용
    switch (e.target.id) {
      case "name":
        setName(e.target.value.replace(/[^0-9]/g, ''))
        break;
        //영소문자 입력 (한글,숫자도 가능)
      case "req":
        setReq(e.target.value.toLowerCase());
        break;
        //반드시 과일을 선택하게 지정
        //과일 미선택시 alert로 알림 메세지 표시
      case "fruit":
        setValue(e.target.value);
        break;
      case "file":
          // console.log(setFile(Array.from(e.target.files, f=> f.name)));
          setFile(Array.from(e.target.files, f=> f.name));
          // setFile(e.target.value);
          //유사배열/프로포티,맵같은거에선 사용안됌
          default :
          break;
        }
            // setName(e.target.value.replace(/[^0-9]/g, ''))//숫자만 쓸 수 있는것.
            // new RegExp("[^0-9]","g").test("abcd")
            // new RegExp("[^0-9]","g").test("123") && setValue(e.target.value);
    // e.target.value.match(/[0-9]/g)
    // --------------------------대문자영문 사용시------------------------------------
    // setValue(e.target.value.toUpperCase()) //대문자영문사용시
    
    
    // document.getElementById("name").value = e.target.value.toUpperCase();
    // e.target.value = e.target.value.toUpperCase();
    // console.log(v);
    
  }
  // onFocus onBlur
  
  
  return(
    <form onSubmit={handleSubmit}>
        <label>이름<input type='text' name='name' onChange={handleChange} id='name' value={name}/></label>
        <label>
          <p>요청사항</p>
          <textarea onChange={handleChange} id='req' value={req}></textarea>
        </label>
        <label htmlFor="fruit">과일을 선택하세요</label>
        <select id='fruit' onChange={handleChange} >
          <option value={''}>과일을 선택하세요</option>
          <option value={'apple'}>사과</option>
          <option value={'banana'}>바나나</option>
          <option value={'grape'}>포도</option>
          <option value={'watermelen'}>수박</option>
        </select>
        <br />
        {/*파일 업로드 후 value 변경 불가>> 조건부 렌더링을 통해 컴포넌트 재 로드 {<FilleInput />} */}
        {/* <input type='file' id='file' multiple onChange={handleChange}/> */}
        <p>업로드 된 파일</p>
        {/* 파일제어 읽기전용이라서 value값이 안됨/ value를 null로하건 걍 날려버리면됨*/}
        <ul>
          {file.map(f => <li key={f}>{f}</li>)}
        </ul>
        <hr />
        <button>제출</button>
      </form>
    );
  }
  export default MyForm;