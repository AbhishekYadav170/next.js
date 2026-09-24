import React from 'react'

const Navbar = () => {
  return (
   <nav>
    <div className='logo font-bold'>Facebook</div>
    <ul>
        <a href='/'><li>Home</li></a>
        <a href='/about'><li>About</li></a>
        <a href='/contact'><li>Contcat</li></a>
    </ul>
   </nav>
  )
}

export default Navbar
