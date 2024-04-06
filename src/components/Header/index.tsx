import React from 'react'
import { IUser } from '@/types/user'
import './Header.scss'

interface Props {
  user: IUser
}

const Header = ({ user }: Props) => {
  return (
    <div className="header-container">
      <span className="header-title-label">My E-Commerce</span>
      <span className="user-label">Hello, {`${user.name.firstname} ${user.name.lastname}`}</span>
    </div>
  )
}

export default Header
