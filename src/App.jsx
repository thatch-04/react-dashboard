import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Visitors from './components/visitors'
import Analysis from './components/analysis'
import Average_rating from './components/Average_Rating'
import Reviews from './components/reviews'
import Sidebar from './components/sidebar'

function App() {


  return (
  <div className="main">
    <Sidebar />
    <Reviews />
    <Average_rating />
    <Analysis />
    <Visitors />
  </div>
    )
  }

export default App
