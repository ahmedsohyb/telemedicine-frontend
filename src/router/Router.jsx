import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../routes/Home'
import DoctorRegister from '../routes/Docterregister'
import AdminDashboard from '../routes/AdminDashboard'
import ApproveDoctors from '../routes/ApproveDoctors'
import ApproveAppointments from '../routes/ApproveAppointments'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register/doctor' element={<DoctorRegister />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/admin/approve-doctors' element={<ApproveDoctors />} />
            <Route path='/admin/approve-appointments' element={<ApproveAppointments />}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Router;