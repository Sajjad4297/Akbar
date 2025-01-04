import { useState } from 'react'
import './fonts/font.css'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Teachers from './Pages/Teachers'

function App() {


    return (
        <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teachers" element={<Teachers /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
