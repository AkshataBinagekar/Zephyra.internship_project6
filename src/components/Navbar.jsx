import React from 'react'
import './Navbar.css'
import logo from '../Images/WhatsApp_Image_2024-12-12_at_12.19.19_AM__1_-removebg-preview.png'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <input type='search' className='search'/>
      <i class="fa-solid fa-globe"  style={{color: "#ffffff",}}></i>
      <i class="fa-solid fa-user" style={{color: "#ffffff",}}></i>
      <i class="fa-regular fa-heart" style={{color: "#ffffff",}}></i>
      <i class="fa-solid fa-bag-shopping" style={{color: "#ffffff",}}></i>
     
    </div>
  )
}

export default Navbar
