import React, { useState } from "react";

const MyArray = () => {
  const fruits = ['사과','딸기','포도','복숭아','귤'];
  const fruitsCount = fruits.map(f => ({[f]:0})); //[{사과:0},{딸기:0}...]
  const [bucket, setBucket] = useState([])
  console.log(fruitsCount);
  
  //읽기전용 bucket/
  // pop 뒤에껄 뺌

  return(
    <div>
      <h3>{bucket}</h3>
      <button onClick={() => {
       const rand = parseInt(Math.random() * fruits.length); //0 ~ 4
       bucket.push(fruits[rand]);
       console.log(bucket);
       setBucket([...bucket])
      }}>과일 추가 </button>
      <button onClick={() => {
       const rand = parseInt(Math.random() * fruits.length);
       bucket.splice(rand, 1);
       setBucket([...bucket]);
      }}>과일 제거 </button>
      <button onClick={() => {setBucket([])}}>바구니 비우기</button>
      <ul>
        {fruits.map((f,i) => <li key={i}>{f}0개</li>)}
      </ul>
    </div>
  );
}
export default MyArray