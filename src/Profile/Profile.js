import React from 'react'
import '../App.css'

const Profile = (props) => {
  const Handlename = (fullname) =>alert(`My name is ${props.fullname}`); 
  return (
    <div>
      <h1 className='opening'>This is me in few lignes</h1>
      <h1 style={{color:'orange', fontStyle:'italic'}}>{props.fullname}</h1>
        {props.children}
      <h1>{props.Bio}</h1>
      <h1>{props.profession}</h1>
      <h1>{props.age}</h1>
      <button className='button-85' onClick={Handlename}>click me!</button>
    </div>
  )
}

export default Profile
