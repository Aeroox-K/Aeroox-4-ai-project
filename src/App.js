import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar} from './components'

import './App.css';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';

const App = () => {
  return (
    <Router>
      <div className='App'>
        
        <Switch>
        
        <Route exact path = "/">
        <div className='gradient__bg'>
          <Navbar /> </div>
        <div className='gradient__bg'> <Header /></div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </Route>

        <Route  path="/signin">
            <Signin />
        </Route>

        <Route  path="/signup">
            <Signup />
        </Route>

        </Switch>
    </div>
    </Router>
  )
}

export default App