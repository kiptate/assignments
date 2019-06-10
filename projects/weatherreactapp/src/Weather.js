import React from 'react'
import { withTheme } from './GlobalProvider'
import './theweather.css'

class Weather extends React.Component {
    render() {
        return (
            <>
            <div className='city'>
                { this.props.submittedName && <h1 className='thecity'>{this.props.submittedName}</h1> }
            </div>
            <div className='country'>
                { this.props.submittedName && <p>Country: {this.props.country}</p> }
            </div>
            </>
        )
    }
}

export default withTheme(Weather)

// this.props.weather === 'Thunderstorm' ? {background-image: url} :
// this.props.weather === 'Drizzle' ?  {background-image: url} :



//NOTES: this.props.weather if condition is Thunderstorm, Drizzle, Rain, Snow, Clear, & Clouds change background depending on which condition.