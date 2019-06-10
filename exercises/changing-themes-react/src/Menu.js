import React from 'react'
import { withToggler } from './Toggler'
import './menustyles.css'

const Menu = (props) => {

    return(
        <>
        <div className='empty'></div>
        <div className={props.light ? 'light' : 'dark'}>
            <button onClick={props.toggle}>{props.light ? 'Change to Dark Theme' : 'Change to Light Theme'}</button>
        </div>
        </>
    )
}

export default withToggler(Menu)