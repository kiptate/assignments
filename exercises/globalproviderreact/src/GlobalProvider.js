import React, {Component} from 'react'
const StarWarsContext = React.createContext()

class GlobalProvider extends Component {
    constructor(){
        super()
        this.state = {
            starWarFriends: ['Lea', 'Luke', 'Bob', 'Tom', 'Jeff'],
            team: []
        }
    }
    
    // componentDidMount(){
    //     axios.get('https://swapi.co/api/people').then(response => {
    //         this.setState(prevState => {
    //             return {
    //                 starWarFriends = [...prevState.starWarFriends, response.data]
    //             }
    //         })
    //     })
    // }

    addToTeam = person => {
        this.setState(prevState => {
            return {
                team: [...prevState.team, person]
            }
        })
    }

    render(){
        return (
            <StarWarsContext.Provider
                value={{
                    ...this.state,
                    addToTeam: this.addToTeam
                }}>
                { this.props.children }
            </StarWarsContext.Provider>
        )
    }
}

export default GlobalProvider

export const withProvider = C => props => (
    <StarWarsContext.Consumer>
        {value => <C {...value} {...props} /> }
    </StarWarsContext.Consumer>
)