import React from 'react';
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
  )
}

export default App
