import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/register/doctor" element={<Doctorregister />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;