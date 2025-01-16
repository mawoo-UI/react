import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/AuthContext";

const Write = () => {
  const {email} = useAuth();
  const [board, setBoard] = useState({title:'',content:'',writer:'', attachDtos:[]}); //memberEmail:'a@b.c'
  const [uploaded, setUploaded] = useState([]);
  const navigate = useNavigate();
  const {req} =useAxios();

  useEffect(()=> {
    setBoard(prev => ({...prev, writer:email}))
  }, [email]);

  const handeleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value})
  }

  const handeleSubmit = e => {
    e.preventDefault();
    console.log(board);

    req('post','notes', {...board, attachDtos : uploaded});

    alert('글쓰기 성공');
    // navigate("/notes");
  }

    const handleFileUpload = async e => {
      const files = e.target.files;
    if (!files)  return;
    console.log(files);
    const formData = new FormData();
    
    // const arr = [];
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    
    try {
      const result = await req('post','file/upload', formData, {'Content-Type': 'multipart/form-data'});
      // Response.json();
      console.log(result);
      setUploaded(result);
    

    } catch (error) {
      console.error("Error during upload:", error);
      // return;
    }
  };
    return (
      <div >
      <h1>Write</h1>
      <form onSubmit={handeleSubmit}>

        <input name="title" value={board.title} onChange={handeleChange}/>
        <input name="content" value={board.content} onChange={handeleChange}/>
        <input name="memberEmail" value={board.writer} onChange={handeleChange}/>
        <input type="file"onClick={handleFileUpload} name="file" multiple />
        <button>글쓰기</button>
      </form>
      <ul>
        {uploaded.map(u => <li key={u.s3Key}>{u.s3Key}</li>)}
      </ul>
    </div>
    )
}
export default Write;