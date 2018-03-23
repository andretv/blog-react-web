import React from 'react'

import './navbar.scss'

const Navbar = ({ children }) =>
  <nav className='navbar'>
    {children}
  </nav>

export default Navbar