import React, { useEffect, useState } from "react";

const MyEffect = () => {
<<<<<<< HEAD
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`
    },[count])

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count +1)}>클릭</button>
        </div>
    )

}

=======
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `총 ${count} 번 클릭했습니다.`
  },[count]) // []을 사용하게된다면 타이틀쪽은 변하지않음/의존성변경/안에 값은 변경가능 

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count +1)}>클릭</button>
    </div>
  )
}
>>>>>>> refs/remotes/origin/master
export default MyEffect;