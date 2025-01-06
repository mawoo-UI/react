import React from "react";

const styles = {
<<<<<<< HEAD
    wrapper: {
      padding: 16,
      display: "flex",
      flexDirection: "row",
      borderBottom: "1px solid grey"
    },
    greeting: {
      marginRight: 8
    },
    toggle: {
      fontWeight: "bold",
      fontSize: 20,
      marginLeft: 8
    }
  };

const Toolbar = ({isLoggedIn, onClickLogin, onClickLogout, onClickLoginToggle}) => {
    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}
            {isLoggedIn ? <button onClick={onClickLogout}>로그아웃</button> :<button onClick={onClickLogin}>로그인</button> }
            {onClickLoginToggle ? <div style={styles.toggle}>로그인 상태</div> : <div style={styles.toggle}>로그아웃 상태</div> }
        </div>
    );
}

=======
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection:'row',
    borderBottom: '1px solid grey'
  },
  greeting: {
    marginRight: 8
  }
};

const Toolbar = ({ isLoggedIn, onClickLogin ,onClickLogout, onClickLoginToggle}) =>{
  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}
      {isLoggedIn ? ( <button onClick={onClickLogout}>로그아웃</button>) :( <button onClick={onClickLogin}>로그인</button>)}
      {/* {<button onClick={onClickLoginToggle}> {isLoggedIn? '로그아웃' : '로그인'}</button>} */}
    </div>
  );
}
>>>>>>> refs/remotes/origin/master
export default Toolbar;