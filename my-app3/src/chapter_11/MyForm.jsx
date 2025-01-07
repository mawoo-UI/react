import React, { useState } from 'react'

const MyForm = () => {
  const [value, setValue] = useState('');
  // let value = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(value);
    // console.log(document.getElementById("name").value);
    
  }
  
  const handleChange = e => {
    // 카드번호,전화번호입력할때 숫자만 할 수 있게 설정가능(정규식사용)
    //-------------------숫자만 기입시---------------------------------------
    setValue(e.target.value.replace(/[^0-9]/g, ''))
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
        <label>이름<input type='text' name='name' onChange={handleChange} id='name' value={value}/></label>
        <button>제출</button>
      </form>
    );
  }
  export default MyForm;