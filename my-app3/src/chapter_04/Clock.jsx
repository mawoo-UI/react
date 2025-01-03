import React from "react";

const comp = <div>
  <h1>안녕, 리엑트!</h1>
  <h2>현재시간 :{new Date().toLocaleTimeString()}</h2>
</div>

const Clock = (props) => {
  return comp;
}