import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcom from './chapter_05/Welcom';
import Comment from './chapter_05/Comment';
import CommentList from'./chapter_05_1/CommentList'
import Airbnb from './chapter_05_1/Airbnb';
import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import MyArray from './chapter_07/MyArray';
import MyEffect from './chapter_07/MyEffect';
import MyEvent from './chapter_08/MyEvent';
import Toggle from './chapter_08/Toggle';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import NumberList from './chapter_10/NumberList';
import MyForm from './chapter_11/MyForm';


const root = ReactDOM.createRoot(document.getElementById('root'));


// setInterval(()=> {
  root.render(
    <React.StrictMode>
    {/* <App />   */}
   {/* <Welcom name="oneweeks"/>   */}
   <>
   {/* <Comment author={{name:'oneweeks', avatarUrl:'https://placehold.co/60x40'}} text={"샘플 텍스트"} date={new Date()} /> */}
   {/* <CommentList /> */}
   {/* <Airbnb /> */}

   {/* <NotificationList />
    */}
    {/* <Counter /> */}
    {/* <MyArray /> */}
    {/* <MyEffect /> */}
    {/* <MyEvent /> */}
    {/* <Toggle /> */}
    {/* <LandingPage /> */}
    {/* <AttendanceBook /> */}
    {/* <NumberList /> */}
      <MyForm />
   </>
  </React.StrictMode>
  );
// }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  
