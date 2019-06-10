import React from 'react'
import { withTheme } from '../GlobalProvider'
import './stylesweather2.css'

class Weather2 extends React.Component {
    render() {
        return (
            <>
            <div className='results'>
                { this.props.submittedName && <p>Temperature: {this.props.temp} °F</p> }
            </div>
            <div className='results1'>
                { this.props.submittedName && <p>Humidity: {this.props.humidity}%</p> }
            </div>
            <div className='results2'>
                { this.props.submittedName && <p>Wind: {this.props.wind} MPH</p> }
            </div>
            <div className='results3'>
                { this.props.submittedName && <p>Weather Condition: {this.props.weather}</p> }
            </div>
            </>
        )
    }
}

export default withTheme(Weather2)