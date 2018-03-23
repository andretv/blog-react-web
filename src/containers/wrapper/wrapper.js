import React from 'react'

import './wrapper.scss'

// components
import Navbar, { NavbarItem } from 'components/navbar'

const Wrapper = ({ children }) =>
  <div>
    <Navbar>
      <NavbarItem exact label='feed' to='/' />
      <NavbarItem label='my posts' to='/my-posts' />
    </Navbar>
    <main className='main-content'>
      {children}
    </main>
  </div>
export default Wrapper