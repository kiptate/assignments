import React, { Component, createContext } from 'react';
const {Consumer, Provider} = createContext()

class Toggler extends Component {
    constructor(){
        super()

        this.state = {
            light: true,
            navbar: true
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                light: !prevState.light
            }
        })
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                toggle: this.toggle
            }} >
                {this.props.children}
            </Provider>
        )
    }
}

export default Toggler

export function withToggler (Comp) {
    return props => <Consumer>
                        {value=> <Comp {...value}{...props} />}
                    </Consumer>
}