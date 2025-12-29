import React, { useState } from 'react'

export interface Person{
  name: string;
  age: number;
  isMarried: boolean;
}

const Person = (props: Person) => {

  // const [isShowInfo, setIsShowInfo] = useState<boolean>(false);

  // const toggleInfo = ()=>{
  //   setIsShowInfo((prev)=> !prev);
  // }
  const [personBio, setPersonBio] = useState<string | null>(null);

  const handleChaneg=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setPersonBio(event.target.value);
  };

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
  }
  return (
    <div>
      {/* {isShowInfo && (
        <> */}
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This Person {props.isMarried ? "is married": "is single"}</p>  
        {/* </>
      )} */}
      {/* <button onClick={toggleInfo}>Toggle Info</button> */}
      <p>
        {""}
        {props.name} Bio:{!personBio ? "No bio available" : personBio}</p>
      <input onChange={handleChaneg} />
    </div>
  )
}

export default Person