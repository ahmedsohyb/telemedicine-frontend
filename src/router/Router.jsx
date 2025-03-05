import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import PatientRegistration from '../routes/PatientRegister'
import Login from '../routes/Login'
import Home from '../routes/Home'
import DoctorRegister from '../routes/Docterregister'
import AdminDashboard from '../routes/AdminDashboard'
import ApproveDoctors from '../routes/ApproveDoctors'
import ApproveAppointments from '../routes/ApproveAppointments'
import RequestAppointment from '../routes/RequestAppointment'
import DoctorProfile from '../routes/DoctorProfile'
import PatientProfile from '../routes/PatientProfile'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/register/patient' element={<PatientRegistration />} /> 
            <Route path='/Login' element={<Login />} />
            <Route path='/request-appointment' element={<RequestAppointment />} />
            <Route path='/' element={<Home />} />
            <Route path='/register/doctor' element={<DoctorRegister />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/admin/approve-doctors' element={<ApproveDoctors />} />
            <Route path='/admin/approve-appointments' element={<ApproveAppointments />}/>
            <Route path='/doctor/profile' element={<DoctorProfile />} />
            <Route path='/patient/profile' element={<PatientProfile />} />

        </Routes>
    </BrowserRouter>
  )
}

export default Router;