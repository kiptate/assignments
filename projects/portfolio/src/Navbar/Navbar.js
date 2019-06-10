import React from 'react';

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= 'header'>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/about' className='nav-item'>About</Link>
        </div>
    )
}

export default Navbar