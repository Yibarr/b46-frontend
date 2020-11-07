import React from 'react'
import {
  Home,
  Example,
  Signup,
  NotFound,
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
    <Route
      exact path='/signup'
      component={ Signup }
    />
    <Route
      component={ NotFound }
    />
  </Switch>
)
