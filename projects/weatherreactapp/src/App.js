import React, {Component} from 'react';
import { withTheme } from './GlobalProvider';
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About'
import Titles from './Titles/Titles'
import Form from './Form/Form'
import Weather from './Weather'
import Footer from './Footer/Footer'
import axios from 'axios'
import Contactus from './Contactus'

import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
      console.log(this.state)
      return (
        <>
          <Navbar />
          <Titles />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contactus' component={Contactus} />
          </Switch>
          <Footer />
        </>
      )
    }
}

export default withTheme(App);
