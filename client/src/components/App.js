import React, { useState, useEffect } from "react"

import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const App = (props) => {
  const [user, setUser] = useState({
    beanieBabies: []
  })

  const getUser = async () => {
    const response = await fetch("/api/v1/users/1") // DONT HARD CODE!
    const responseBody = await response.json()
    // debugger
    setUser(responseBody.user)
  }

  useEffect(() => {
    getUser()
  }, [])

  console.log(user.beanieBabies);
  const userBeanieBabies = user.beanieBabies.map((baby) => {
    return (
      <li key={baby.id}>{baby.name}</li>
    )
  })

  return (
    <>
      <h1>{user.username}s Beanie Babies!</h1>
      <ul>{userBeanieBabies}</ul>
    </>
  )
}

export default hot(App)
