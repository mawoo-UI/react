import React, { useState } from "react";

const MyArray = () => {
  const fruits = ['사과','딸기','포도','복숭아','귤'];
  //초기값
  const fruitsCount = fruits.map(f => ({name: f, count:0})); //[{사과:0},{딸기:0}...]  [{name:'사과', count:0}...]  //값의 이름을 한국어로 쓰면 위험함
  console.log(fruitsCount);
  const [bucket, setBucket] = useState([...fruitsCount])
  
  //읽기전용 bucket/
  // pop 뒤에껄 뺌

  return(
    <div>
      <button onClick={() => {
       const rand = parseInt(Math.random() * bucket.length); //0 ~ 4
       bucket[rand].count++;

       console.log(bucket);
       setBucket([...bucket]);
      }}>과일 추가 </button>
      <button onClick={() => {setBucket([...fruitsCount])}}>바구니 비우기</button>
      <ul>
        {bucket.map((f,i) => <li key={i}>{f.name} :: {f.count}개</li>)}
      </ul>
    </div>
  );
}
export default MyArray