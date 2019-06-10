import React from 'react'
import './stylesfooter.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className= 'footer'>
            <Link to='/contactus' className='nav-item1'>Contact Us</Link>
        </div>
    )
}

export default Navbar