import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const Write = () => {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [memberEmail, setMemberEmail] = useState('');
  const [board, setBoard] = useState({title:'',content:'',memberEmail:'a@b.c'});
  const navigate = useNavigate();
  const {req} =useAxios();

  const handeleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value})
  }

  const handeleSubmit = e => {
    e.preventDefault();
    console.log(board);
    
    req('post','board', board);

    alert('글쓰기 성공');
    navigate("/");
    <div >
      <h1>Write</h1>
      <form onSubmit={handeleSubmit}>

        <input name="title" value={board.title} onChange={handeleChange}/>
        {/* <input name="title" value={title} onChange={(e) =>{setTitle(e.target.value)}}/> */}
        <input name="content" value={board.content} onChange={handeleChange}/>
        <input name="memberEmail" value={board.memberEmail} onChange={handeleChange}/>
        <button>글쓰기</button>
      </form>
    </div>
  }
}
export default Write;