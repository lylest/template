import React from 'react'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import { Routes, Route } from 'react-router-dom'

function UserNav({ screen }) {
  return (
    <Routes>
        <Route path="/"  element={<Login /> } />
        <Route path="/login"  element={<Login />} />
        <Route path="/signup"  element={<Signup />} />
    </Routes>
  )
}

export default UserNav