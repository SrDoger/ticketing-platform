import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import './navbar.css' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <div className='dropdown'>
            <button>Ticket</button>
            <div className="content">
              <a className= "top" href="editticket">Edit Ticket</a>
              <a className= "middle" href="formticket">New Ticket</a>
              <a className='bottom' href="viewticket">View Ticket</a>
            </div>
          </div>
        </li>
      </ul>
      <ul className='right'>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <FaRegCircleUser className='icon-user' />
      </ul>
    </div>
  )
}

export default Navbar