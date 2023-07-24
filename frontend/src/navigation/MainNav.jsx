import React from 'react'
import Home from '../pages/home/Home'
import { Routes, Route } from 'react-router-dom'

function UserNav() {
  return (
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/home"  element={<Home />} />
    </Routes>
  )
}

export default UserNav