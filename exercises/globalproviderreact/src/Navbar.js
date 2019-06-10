import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className='navbar'>
            <Link to='/'>Friends</Link>
            <Link to='/Team'>Team</Link>
        </div>
    )
}
