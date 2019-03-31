import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '<core>/routing'

const BaseRoutes = () => (
  <Fragment>
    <Switch>
      {routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </Fragment>)

export default BaseRoutes
