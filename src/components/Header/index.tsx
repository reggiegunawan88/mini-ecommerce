import React from 'react'
import './Header.scss'
import { useUserContext } from '@/store/context/UserContext'

const Header = () => {
  const { user } = useUserContext()

  return (
    <div className="header-container">
      <span>My E-Commerce</span>
    </div>
  )
}

export default Header
