import { Route, Routes } from "react-router-dom"

import "~style.css"

import About from "./about"
import Home from "./home"
import Layout from "./layout"
import Up from "./up"

export default () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="up" element={<Up />} />
    </Route>
  </Routes>
)
