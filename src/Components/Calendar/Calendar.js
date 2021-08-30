import React from 'react';
import './Calendar.css';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
  } from "react-router-dom";

export default function Calendar () {
    return(
      <div className='calendar'>

            <p className='day'>Sunday</p>
            <p className='day'>Monday</p>
            <p className='day'>Tuesday</p>
            <p className='day'>Wednesday</p>
            <p className='day'>Thursday</p>
            <p className='day'>Friday</p>
            <p className='day'>Saturday</p>
            <button><Link to='/meals'>Add Food!</Link></button>
            <button><Link to='/meals'>Add Food!</Link></button>
            <button><Link to='/meals'>Add Food!</Link></button>
            <button><Link to='/meals'>Add Food!</Link></button>
            <button><Link to='/meals'>Add Food!</Link></button>
            <button><Link to='/meals'>Add Food!</Link></button>
            <button><Link to='/meals'>Add Food!</Link></button>

        <div className='foods'></div>
        
      </div>
    )
  
  }