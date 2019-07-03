import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()


class GlobalProvider extends Component{
    constructor() {
        super()
        this.state = {
          name: '',
          submittedName: '',
          weather: '',
          temp: '',
          humidity: '',
          wind: '',
          city: '',
          country: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://api.openweathermap.org/data/2.5/find?q=${this.state.city}&units=imperial&appid=f784823e87e753924cacdfb011d66c99`)
        .then(r => {
          this.setState({
            submittedName: r.data.list[0].name,
            weather: r.data.list[0].weather[0].main,
            temp: r.data.list[0].main.temp,
            humidity: r.data.list[0].main.humidity,
            wind: r.data.list[0].wind.speed,
            country: r.data.list[0].sys.country
          })
        })
    }
    
    handleChange = (e) => {
        //take e.target.value save to name in state.
        this.setState({
          [e.target.name]: e.target.value
        })
    }

  render(){
    // console.log('state', this.state)
    // const props = {
    //   handleSubmit: this.handleSubmit,
    //   handleChange: this.handleChange,
    //   ...this.state
    // }
    return (
    //return the theme Provider and it's children
      <Provider 
        value={{
          ...this.state,
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange
        }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default GlobalProvider

export const withTheme = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
)