import React from "react";

const students = [
<<<<<<< HEAD
    {id:1, name:"Inje"},
    {id:2, name:"Steve"},
    {id:3, name:"Bill"},
    {id:4, name:"Jeff"},
];

const AttendanceBook = (props) => {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}
=======
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

>>>>>>> refs/remotes/origin/master
export default AttendanceBook;