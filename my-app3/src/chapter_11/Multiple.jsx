import React, { useState } from "react";


const TopingList = (props) => {
  // const [cnt, setCnt] = useState(0);
  // const [checkedItems, setCheckedItems] = useState([]);
  const [mySet, setMySet] = useState(new Set());
  const {topings, onSetMyTopings} = props;
  
  
  const handleChange = e => {
    const c = e.target.checked;
    if (c && mySet.size >= 3) {
      alert('최대 3개의 토핑')
      return;
    }
    const newSet = new Set(mySet);
    c ? newSet.add(e.target.value) : newSet.delete(e.target.value);
    setMySet(newSet);
    //부모 컴포넌트에 자식 state 전달
    onSetMyTopings(newSet);

    // c ? setMySet(items => new Set(items.add(e.target.value))) : setMySet(items => {items.delete(e.target.value); return new Set(items);});
    
    // if (c && checkedItems.length >= 3) {
    //   alert('최대 3개의 토핑')
    //   return;
    // }
    // console.log(...checkedItems, e.target.value);
    // c ? setCheckedItems([...checkedItems,e.target.value]) : checkedItems.filter(ci => ci !== e.target.value);
    
    // setCheckedItems([...checkedItems, e.target.value].filter(ci => ci !== e.target.value));
    // console.log(checkedItems);
    // console.log(e.target.checked);
    // // e.preventDefault();
    // const c = e.target.checked;
    // console.log(cnt);
    // if (c && cnt >= 3) {
    //   alert("최대 3개 체크");
    //   e.target.checked = false;
    //   return;
    // }
    // setCnt((cnt + (c ? 1 : -1))/1);
  };
  
  // const {topings, myTopings} = props;

  // props.setMyTopings = Array.from(mySet);

  return topings.langth === 0 ? <h1>토핑이 없습니다.</h1> : (
    <>
    <h3>최대 선택 가능 토핑은 3개입니다.</h3>
    <ul>
      {topings.map((t,i) => <li key={i}><label><input type="checkbox" name="toping" value={t} onClick={handleChange} checked={mySet.has(t)} />{t}</label></li>)}
    </ul>
    </>
  )
}



const Multiple = () => {
  const [myTopings, setMyTopings] = useState(new Set());
  const topings = ["고구마","불고기","치즈","파인애플","불닭소스","감자","베이컨","새우"];
  return (
    <form onSubmit={e => {
      e.preventDefault();
      
      if (myTopings.size === 0) {
        alert("최소 1개의 토핑을 선택하세요");
        return;
      }
      alert(`선택한 토핑은 ${Array.from(setMyTopings).join(",")}`);
    }}>
      <TopingList topings={topings} myTopings={myTopings} onSetMyTopings={setMyTopings} />
      <button>주문</button>
    </form>

  );
}
export default Multiple;