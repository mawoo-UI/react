import React, { useState } from "react";

const Toggle = () => {
<<<<<<< HEAD
    const [toggle, setToggle] = useState(false);
    return (
        <>
        <button onClick={(e) => {setToggle(toggle => !toggle);}} disabled={toggle}>클릭</button>
        <div>{toggle ? '켜짐' : '꺼짐'}</div>
        </>
    );
}

=======
  const [toggle, setToggle] = useState(false);
  return(
    <>
    <button onClick={(e) => {setToggle(toggle => !toggle);}} disabled={toggle}> 클릭</button>
    <div>{toggle ? '켜짐' : '꺼짐'}</div>
    </>
  );
}
>>>>>>> refs/remotes/origin/master
export default Toggle;