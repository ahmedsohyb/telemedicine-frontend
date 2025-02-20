import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import PatientRegistration from '../routes/PatientRegister'
import Login from '../routes/Login'
import App from '../routes/App'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/patient-register' element={<PatientRegistration />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/App' element={<App />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router