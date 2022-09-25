import React from 'react'
import logo from '../assets/logo.png'

export default function NavBar() {
  return (
    <div className="nav-container">
        <div className="nav-left">
            <img src={logo} alt="logo" className="flash-logo" />
            <p className="flash-logo-text">FlashType</p>
        </div>

        <div className="nav-right">
            <a className="nav-link" href="https://www.linkedin.com/in/chhavigarg7/" target="_blank" rel="noreferrer">
                CG
            </a>
        </div>
    </div>
  )
}
