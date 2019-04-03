import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '<core>/routing'

import GlobalContext from '<state>/GlobalContext'

const BaseRoutes = () => (
  <GlobalContext>
    <Switch>
      {routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </GlobalContext>)

export default BaseRoutes
