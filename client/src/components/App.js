import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const App = (props) => {
  return <h1>Hello From the App!</h1>
}

export default hot(App)
