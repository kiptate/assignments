import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            fName: '',
            lName: '',
            selectedSoda: [],
            people: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            fName: this.state.fName,
            lName: this.state.lName,
            selectedSoda: this.state.selectedSoda
        }

        this.setState((prevState)=>{
            return {
                people: [...prevState.people, newPerson]
            }
        })

    }

    render() {
        const mappedPeople = this.state.people.map((person)=> {
            return <div>
                        <h1>{person.fName} {person.lName}</h1>
                    </div>
        })
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                        placeholder="First Name"
                        name="fName"
                        value={this.state.fName}
                        onChange={this.handleChange}
                        />
                <input type="text"
                        placeholder="Last Name"
                        name="lName"
                        value={this.state.lName}
                        onChange={this.handleChange}
                        />
                <select name ="selectedSoda" value={this.state.selectedSoda} onChange={this.handleChange}>
                    <option value="CocaCola">Coca-Cola</option>
                    <option value="Bepis">Bepis</option>
                    <option value="DrPepper">DrPepper</option>
                    <option value="Surge">Surge</option>
                </select>
                <button>Submit</button>
            </form>
            {mappedPeople}
            </>
        )
    }
}

export default Form;