import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";



const Modify = () => {
  const param = useParams();
  console.log(param.num);
  const num = param.num;
  
  const [board, setBoard] = useState({title: '', content :'', writer: ''});
  const {req} = useAxios();
  // const nav = Navigator;
  

 

  // effect >> api 호출
  useEffect(() => {
    (async() => {
      const resp = await req('get', `notes/${num}`);
      console.log(resp);
      setBoard(resp);
    })();
   }, [req,num]);

  const handeleChange = e => {
    const {name, value} = e.target;
    setBoard({...board,[name] : value })
  }

  const handeleSubmit = e => {
    e.preventDefault();
    console.log(board);
    req('put', `notes/${num}`, board);
  }
 

   return(
  <div>
    <h1>Modify</h1>
    <form>
      <input name="title" value={board.title} onChange={handeleChange}/>
      <input name="content" value={board.content} onChange={handeleChange}/>
      <input name="memberEmail" value={board.writer} onChange={handeleChange} readOnly/>
      <button>글수정</button>
    </form>
  </div>
)
}
export default Modify;