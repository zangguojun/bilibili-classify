import React from "react"
import { HashRouter } from "react-router-dom"

import Routing from "~routes"
import "~style.css"

export default () => {
  return (
    <HashRouter>
      <Routing />
    </HashRouter>
  )
}
