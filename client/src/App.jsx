import { useState } from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
//pages
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import ErrorPage from './pages/Error'
import LogOutPage from './pages/Logout'
import ServicePage from './pages/Service'
import AdminLayout from './layouts/Admin-Layout'
import AdminUsers from './pages/Admin-Users'
import AdminContacts from './pages/Admin-Contacts'
//components
import MyNav from './components/Navbar'

import './App.css'
import AdminUpdate from './pages/Admin-Update'

function App() {

  return (
    <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogOutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/admin' element={<AdminLayout />} >
             <Route path='/users' element={<AdminUsers />} />
             <Route path='/users/:id' element={<AdminUpdate />} />
             <Route path='contacts' element={<AdminContacts />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
