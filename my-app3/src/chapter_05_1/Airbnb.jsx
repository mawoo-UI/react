import React from 'react'
import './Airbnb.css'
import BnbItem from './BnbItem';

const Airbnb = () => {
  const items = [
    {
      color : '#CC2D4A',
      title : '서울',
      distance : 2
    },
    {
      color : '#CC2D4A',
      title : '인천',
      distance : 29
    },
    {
      color : '#CC2D4A',
      title : '대전',
      distance : 134
    },
    {
      color : '#BC1A6E  ',
      title : '대구',
      distance : 140
    }

  ];
  const url = {src :'https://placehold.co/200x100'}
  const copiedUrl = {src:url.src}
  const src = url.src;
  const copiedUrl2 = {...url}
  const copiedUrl3 = {src}

  return (
    <div className='wrapper'>
      <h3>설레는 다음 여행을 위한 아이디어</h3>
      <ul className='gallery-list'>
        {/* {items.map(items => <BnbItem src={items.src} color={items.color} title={items.title} distance={items.distance} />)} */}
        {items.map((items, idx) => <BnbItem key={idx} {...items} {...url}/>)}
      </ul>
    </div>
  )
}

export default Airbnb;