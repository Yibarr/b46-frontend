import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  Navbar
} from './components/index.js'
import Routes from './Routes.js'

const App = () => {
  return(
    <React.Fragment>
      <Router>
        <Navbar />
        <div className="container-md">
          { Routes }
        </div>
      </Router>
    </React.Fragment>
  )
}

export default  App