import React, { useState } from "react";

const useCounter =(initValue) => {
  const [count, setCount ] = useState(initValue);

  const increaseCount = () => setCount(prev => prev +1)
  const decreaseCount = () => setCount(prev => Math.max (prev -1 ,0))
  return [count, increaseCount, decreaseCount] 
   
}
export default useCounter;