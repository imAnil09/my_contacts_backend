import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HOME, LOGIN } from './ConstantLinks'
import Home from './Pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route element={<PublicLayout />}> */}
      <Route path={LOGIN} element={<Login />} />
      {/* </Route> */}
      {/* <Route element={<ProtectedLayout />}> */}
        <Route path={HOME} element={<Home />} />
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App