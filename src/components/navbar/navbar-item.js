import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar-item.scss'

const NavbarItem = ({ label, to, exact }) =>
  <div className='navbar-item'>
    <NavLink
      to={to}
      exact={exact}
    >
      {label}
    </NavLink>
  </div>

export default NavbarItem