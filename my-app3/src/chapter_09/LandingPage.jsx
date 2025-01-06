import React, { useState } from "react";
<<<<<<< HEAD
import Toolbar from './Toolbar';

const LandingPage = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [onClickLoginToggle, setOnClickLoginToggle] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
        setOnClickLoginToggle(true);
    };

    const onClickLogout= () => {
        setIsLoggedIn(false);
        setOnClickLoginToggle(false);
    }
    console.log(isLoggedIn);
    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLoginToggle={onClickLoginToggle}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
                />
                <div style={{padding:16}}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
=======
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
      isLoggedIn={isLoggedIn}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      />
      {/* <Toolbar {...obj} onClickLoginToggle={() => setIsLoggedIn(isLoggedIn => !isLoggedIn)} /> */}
      <div style={{padding:16}}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
>>>>>>> refs/remotes/origin/master
}

export default LandingPage;