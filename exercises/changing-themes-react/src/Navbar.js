import React from 'react';
import {withToggler} from './Toggler'
import './navbarstyles.css'


function Navbar (props) {
    return (
        <div className='navbar'>
            <div className='about'>About</div>
            <div className='serv'>Services</div>
            <div className='port'>Portfolio</div>
        </div>
    )
}

export default withToggler(Navbar)