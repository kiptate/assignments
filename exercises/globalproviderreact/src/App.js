import React from 'react'
import Navbar from './Navbar'
import './styles.css'
import Team from './Team'
import StarWarsContainer from './StarWarsContainer'
import { Switch, Route } from 'react-router-dom'


const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={StarWarsContainer}/>
                <Route path='/team' component={Team}/>
            </Switch>
        </>
    )
}

export default App