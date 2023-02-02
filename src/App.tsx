import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import getUTM from './helpers/getUTM'
import ProgressPage from './pages/ProgressPage'
import CardPage from './pages/CardPage'

function App() {
  getUTM()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="progress/:id" element={<ProgressPage />} />
        <Route path="layouts/:id" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
