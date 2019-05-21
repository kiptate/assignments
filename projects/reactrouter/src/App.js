import React from 'react';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import ProductList from './ProductList'
import Product from './Product'

import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:_id" component={Product} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
