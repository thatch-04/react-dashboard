import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {


  return (
  <div className="main">
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Widget</li>
        <li>Reviews</li>
        <li>Customers</li>
        <li>Online Analysis</li>
        <li>Settings</li>
      </ul>
    </div>

    <div className="card">
      <h6>Reviews</h6>
      <p>1,281</p>
    </div>
    <div className="card">
      <h6>Average Rating</h6>
      <p>4.6</p>
    </div>
    <div className="card">
      <h6>Sentiment Analysis</h6>
      <p>960</p>
      <p>122</p>
      <p>321</p>
    </div>

    <div className="app">
      <h6>Website Visitors</h6>
      <p>821</p>
    </div>
  </div>
    )
  }

export default App
