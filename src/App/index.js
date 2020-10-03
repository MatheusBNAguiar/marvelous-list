import React from 'react'
import { Base } from './Base'
import { Router } from './Router'
import { routes } from './Routes'

export const App = (
  <Base>
    <Router routes={routes} />
  </Base>
)
