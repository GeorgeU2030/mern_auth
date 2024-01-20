import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import DashBoard from './pages/DashBoard'

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
      </Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
