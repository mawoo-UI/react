import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
import Welcom from './chapter_05/Welcom';
import Comment from './chapter_05/Comment';
import CommentList from'./chapter_05_1/CommentList'
import Airbnb from './chapter_05_1/Airbnb';
import NotificationList from './chapter_06/NotificationList';
import Counter from './chapter_07/Counter';
import MyArray from './chapter_07/MyArray';
import MyEffect from './chapter_07/MyEffect';
import Toggle from './chapter_08/Toggle';
import MyEvent from './chapter_08/MyEvent';
import Toolbar from './chapter_09/Toolbar';
import LandingPage from './chapter_09/LandingPage';
import NumberList from './chapter_10/NumberList';
import AttendanceBook from './chapter_10/AttendanceBook';
import Header from './component/Header';

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
    {/* < MyEffect /> */}
    {/* <Toggle /> */}
    {/* <MyEvent /> */}
    {/* <LandingPage /> */}
    {/* <NumberList numbers={[1,2,3,4,5]} /> */}
    {/* <AttendanceBook /> */}
    <App />
   </>
  </React.StrictMode>
  );
// }, 1000)
>>>>>>> refs/remotes/origin/master

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<<<<<<< HEAD
=======
  
>>>>>>> refs/remotes/origin/master
