import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/AuthContext";

const Write = () => {
  const {email} = useAuth();
  const [board, setBoard] = useState({title:'',content:'',writer:''}); //memberEmail:'a@b.c'
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
    
    req('post','board', board);

    alert('글쓰기 성공');
    navigate("/list");

    const handleFileUpload = async e => {
      const file = e.target.files[0];
      if (!file) {
        alert("파일을 선택해주세요");
        return;
      }
      const formData = new FormData();
      formData.append("file", file);
    
      try {
          const headers ={
            'Authorization':`Bearer ${file}`
          } 
            
        const response = await fetch("http://localhost:8080/api/v1/file/upload", {
          method: "POST",
          body: formData,
        });
    
        const result = await response.json();
        if (result.status === "success") {
          console.log("File uploaded successfully:", result.data);
        } else {
          console.error("Upload failed:", result.message);
        }
      } catch (error) {
        console.error("Error during upload:", error);
      }
    };

    <div >
      <h1>Write</h1>
      <form onSubmit={handeleSubmit}>

        <input name="title" value={board.title} onChange={handeleChange}/>
        <input name="content" value={board.content} onChange={handeleChange}/>
        <input name="memberEmail" value={board.writer} onChange={handeleChange}/>
        <input type="file"onClick={handleFileUpload} />
        <button>글쓰기</button>
      </form>
    </div>
  }
}
export default Write;