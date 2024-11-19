import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { useDispatch } from 'react-redux'
import { removeFromUsers } from "../../context/usersSlice"
function Users({ data }) {
  const dispatch = useDispatch()
  return (
    <div className='users__wrapper'>
      {
        data?.map((user) =>
          <div key={user.id} className="users__card">
            <img src={user.gander === "male" ? male : female} alt="user" />
            <h2>{user.name}</h2>
            <p>{user.profession}</p>
            <p>{user.age} years old</p>
            <div className='bottom_btn'>
              <button onClick={() => dispatch(removeFromUsers(user))}>Remove</button>
              <button>Edit</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users