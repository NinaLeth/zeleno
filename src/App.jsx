//Nina
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './komponenter/Header'
import Footer from './komponenter/Footer'

import HomePage from './sider/HomePage'
import OmosPage from './sider/OmosPage'
import WebinarPage from './sider/WebinarPage'
import ErrorPage from './sider/ErrorPage'
import LoginPage from './sider/LoginPage'
import MedarbejderPage from './sider/MedarbejderPage'


function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/omos" element={<OmosPage />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/medarbejder" element={<MedarbejderPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  
  )
}

export default App


 



 
