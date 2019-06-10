import React from 'react'
import { withTheme } from '../GlobalProvider'
import './stylesform.css'

class Form extends React.Component {
    render() {
        return (
            <form>
                <img className='logo' src="https://png2.kisspng.com/sh/c55bb7125f07b08d383762bf04f93f26/L0KzQYm3VMA4N5Rxj5H0aYP2gLBuTfNpaZx3eZ92YX7sgMb5gb1pcZ9pjdt8bT3ofrb5hCkudJD5jeU2Znzyh7b5TcVia2lmedcBOHPkcYG4TsUzPWk4S6g9MUW1Q4K3UMM6OGY8TqQ3cH7q/kisspng-chakra-manipura-hinduism-energy-lotus-flower-5ac8aae68caa01.5258336415231003905762.png"></img>
                <h3 className='inputlogo'>ActivityGuru</h3>
                <h3 className='inputheader'>Enter your City & Zipcode here!</h3>
                <input type="text" name="city" onChange={this.props.handleChange} placeholder="City"/>
                <br></br>
                <input type="text" name="country" placeholder="Country"/>
                <br></br>
                <button onClick={(e) => this.props.handleSubmit(e)}>Get Weather</button>
            </form>
        )
    }
}

export default withTheme(Form)