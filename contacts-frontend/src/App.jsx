import React from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CONTACTS, CREATE_CONTACT, HOME, LOGIN } from './ConstantLinks'
import Home from './Pages/Home';
import UserLayout from './Layouts/UserLayout';
import ProtectedLayout from './Layouts/ProtectedLayout';
import NoPageFound from './Pages/NoPageFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContactsPage from './Pages/ContactsPage';
import NewContact from './Pages/NewContact';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<UserLayout />}>
      <Route path={LOGIN} element={<Login />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path={HOME} element={<Home />} />
        <Route path={CONTACTS} element={<ContactsPage />} />
        <Route path={CREATE_CONTACT} element={<NewContact />} />
      </Route>
      <Route path='*' element={<div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
      <NoPageFound />
      </main>
    <Footer />
    </div>
      } />
    </Routes>
    </BrowserRouter>
  )
}

export default App