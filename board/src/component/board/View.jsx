import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const View = () => {
  const param = useParams();
  console.log(param.num);
  const num = param.num;
  const {data, loading, error, req} = useAxios();
  const nav = Navigator;
  
  // effect >> api 호출
  useEffect(() => {
    (async() => {
      const resp = await req('get', `notes/${num}`);
      console.log(resp);
     
    })();
  }, [num, req]);
  
  if(error) {
    return <div><h1>에러가 발생했습니다</h1></div>;
  }

  if(loading) {
    return <div><h1>로딩 중 . . . </h1></div>
  }
  //삭제처리

  const handleeDelete = e => {
    e.prevetDafault();
    console.log('삭제 동작');
    if(!window.confirm("삭제 하시겠습니까?")){
      return;
    } 
    req('get', `notes/${num}`);
    nav('/notes');
  };

  return data && (
    <div>
        <h1>View</h1>
        <p>{param.num}번 게시글</p>
        <p>{data.title}</p>
        <p>{data.content}</p>
        <p>{data.regdate}</p>
        <p>{data.writer}</p>
        <Link to={`/modify/${data.num}`}><button>수저</button> </Link>
        <button onClick={handleeDelete}>삭제 </button>
    </div>
  );
}
export default View;