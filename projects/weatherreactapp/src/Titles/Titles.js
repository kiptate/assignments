import React from 'react'
import './titlestyles.css'

class Titles extends React.Component {
    render() {
        return (
            <div className='titlebackground'>
                <h1 className='thetitle'>ActivityGuru</h1><img className='lillogo' src="https://banner2.kisspng.com/20180407/jqw/kisspng-chakra-manipura-hinduism-energy-lotus-flower-5ac8aae6415119.2180812715231003902676.jpg"></img>
                <p className='titletext'>Find out temperature conditions & outdoor activities in your area!</p>
            </div>
        )
    }
}

export default Titles