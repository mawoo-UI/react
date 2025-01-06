<<<<<<< HEAD
import React from 'react';

const NumberList = (props) => {
  const {numbers} = props;
  const listItems = numbers.map((number) => <li>{number}</li>);

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumberList;
=======
import React from "react";

const NumberList = (props) => {
  const {numbers} = props;
  const listItem = numbers.map(number => <li>{number}</li>)
  return (
    <ul>
      <li>{1}</li>
      <li>{2}</li>
      <li>{3}</li>
      <li>{4}</li>
      <li>{5}</li>
    </ul>
  )
}
export default NumberList
>>>>>>> refs/remotes/origin/master
