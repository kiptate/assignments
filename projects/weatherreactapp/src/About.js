import React from 'react'
import './stylesabout.css'
import Weather from './Weather'
import Weather2 from './Weather2/Weather2'
import { withTheme } from './GlobalProvider';
import Form from './Form/Form'

const About = (props) => {
    return (
        <>
        <div className='abmain'>
            <div className='abmain2'>
                <div className='abmain3'>
                    <div className='abmain3-city'>
                        <div className='abacttitle'>
                            <p>About Us</p>
                        </div>
                        <div className='aboutus'>
                            <div className='section1'>
                                <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ducimus saepe quisquam hic officiis labore. Culpa, quam? Maxime officia nulla repellat molestias nostrum a quis. Dicta, animi aliquid. Recusandae, illum.</p>
                            </div>
                            <div className='realdude'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About