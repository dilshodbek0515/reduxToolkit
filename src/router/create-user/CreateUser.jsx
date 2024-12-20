import React, { useState } from "react"
import "./CreateUser.css"
import { useDispatch } from "react-redux"
import { addToUsers } from "../../context/usersSlice"

function CreateUser() {
  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [age, setAge] = useState("")
  const [gander, setGander] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      gander
    }
    dispatch(addToUsers(newUser))
    setName("")
    setGander("")
    setAge("")
    setProfession("")
  }
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder='name'
          required
        />
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          type="text"
          placeholder='profession'
          required
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder='age'
          required
        />

        <select
          name="" id=""
          value={gander}
          onChange={(e) => setGander(e.target.value)}
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser