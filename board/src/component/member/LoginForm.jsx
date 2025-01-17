import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import {useAuth} from "../../hooks/AuthContext";


const LoginForm = () => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {data, loading, error, req} = useAxios('http://localhost:8080/api/');
  const {loading, error, req} = useAxios('http://localhost:8080/api/');
  // const navigate = useNavigate();
  
  
  
  const {login} = useAuth();



  const handleSubmit = async e => {
    e.preventDefault();
    // e.prevenDefalt;
    const member = {email, password};
    console.log(member);
    try {
      const resp =  await req('get', `login?email=${email}`);
      resp && login(email, resp);
      // console.log(data);
      // //1. email
      // //2. token
      // localStorage.setItem('email', email);
      // localStorage.setItem('token', resp);
      // resp && navigate('/dashboard');
      
    } catch (error) {
      console.error("로그인 실패", error);
      
    }
      
  }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>email :</label>
          <input type='text' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>password :</label>
          <input type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button disabled={loading}>{loading ? '로딩중...' : '로그인'}</button>
          {error && <p style={{color:'red'}}>에러 발생 <br /> {error.message} </p>}
        </div>
      </form>
    );
  }
  export default LoginForm;