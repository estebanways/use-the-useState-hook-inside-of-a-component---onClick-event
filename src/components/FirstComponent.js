import React from 'react';
import { useState } from 'react';

export const FirstComponent = () => {

  //let name = "Esteban";
  const [name, setName] = useState("Esteban");

  let courses = [
    "CSS",
    "HTML",
    "Sass",
    "JavaSCript",
    "React",
  ];

  const changeName = (newName) => {
    //setName("Charles")
    setName(newName);
  }

  return (
    <div>
      <h1>My First Component</h1>
      <p>My name is {name}</p>

      <button onClick={ e => changeName('ESTEBAN')} >CHANGE NAME</button>
    </div>
  )
}
