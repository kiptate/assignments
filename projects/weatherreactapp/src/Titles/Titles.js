import React from 'react'
import './titlestyles.css'

class Titles extends React.Component {
    render() {
        return (
            <div className='titlebackground'>
                <h1 className='thetitle'>ActivityGuru</h1><img className='lillogo' src="https://png2.kisspng.com/sh/c55bb7125f07b08d383762bf04f93f26/L0KzQYm3VMA4N5Rxj5H0aYP2gLBuTfNpaZx3eZ92YX7sgMb5gb1pcZ9pjdt8bT3ofrb5hCkudJD5jeU2Znzyh7b5TcVia2lmedcBOHPkcYG4TsUzPWk4S6g9MUW1Q4K3UMM6OGY8TqQ3cH7q/kisspng-chakra-manipura-hinduism-energy-lotus-flower-5ac8aae68caa01.5258336415231003905762.png"></img>
                <p className='titletext'>Find out temperature conditions & outdoor activities in your area!</p>
            </div>
        )
    }
}

export default Titles