import React from 'react'
import UserManagement from './pages/UserManagement'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
const App = () => {
  return (
    // <div>
    //   <Login></Login>
    //   {/* <UserManagement></UserManagement> */}
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/tasks' element={<UserManagement/>}></Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
