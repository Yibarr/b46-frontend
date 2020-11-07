import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Routes from './Routes.js'

const App = () => {
  return(
    <React.Fragment>
      <Router>
        <h1>Aquí va el navbar</h1>
        { Routes }
      </Router>
    </React.Fragment>
  )
}

export default  App