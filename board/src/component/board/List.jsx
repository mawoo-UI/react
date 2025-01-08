import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const List = () => {
  const {data, loading, error, req} = useAxios();
  
  const navigate = useNavigate();
  // effect
  useEffect(() => {
    req('get', 'board/list');
    req('get', 'board/list');
  }, [req]);

  if(error) {
    return <div><h1>에러가 발생했습니다</h1></div>;
  }

  if(loading) {
    return <div><h1>로딩 중 . . . </h1></div>
  }

  return (
    <div>
      <button onClick={()=>navigate('/Write')}>글쓰기</button>
      <ul>
        {data.dtoList.map(b => <li key={b.bno}>{b.title}</li>)}
      </ul>
    </div>
  );
}

export default List;