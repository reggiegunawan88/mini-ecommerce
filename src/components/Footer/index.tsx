import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <span>Copyright © Reggie Gunawan - {new Date().getFullYear()}</span>
    </div>
  )
}

export default Footer
