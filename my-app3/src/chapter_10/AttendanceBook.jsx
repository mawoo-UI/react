import React from "react";

const students = [
  {name : "Inje" },
  {name : "steve" },
  {name : "bill" },
  {name : "jeff" }
];
function AttendanceBook(props) {
  return (
    <ul>
      {students.map((students) => {
        return <li>{students.name}</li>
        // {students.map (std)}
      })}
    </ul>
  );
}

export default AttendanceBook;