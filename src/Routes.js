import React from 'react'
import {
  Home,
  Example,
} from './pages/index.js'

import {
  Switch,
  Route,
} from 'react-router-dom'

export default (
  <Switch>
    <Route
      exact path='/'
      component={ Home }
    />
    <Route
      exact path='/example'
      component={ Example }
    />
  </Switch>
)
