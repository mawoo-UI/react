import React from 'react'
// import Airbnb from './chapter_05_1/Airbnb'

const BnbItem = ({src, title, distance, color}) => {
  return (
  <li>
    <img src='https://placehold.co/200x100' alt='bg-img'/>
    <div >
      <p>{title}</p>
      <p>{distance}2Km 거리</p>
    </div>
  </li>
  );
}
//style={}
export default BnbItem