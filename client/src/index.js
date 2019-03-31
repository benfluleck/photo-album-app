import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeWrapper from '<styles>/ThemeWrapper/ThemeWrapper'
import GlobalStyle from '<styles>/global'
import BaseRoutes from '<pages>/index.jsx'

const App = () => (
  <ThemeWrapper>
    <Fragment>
      <GlobalStyle />
      <Router>
        <BaseRoutes />
      </Router>
    </Fragment>
  </ThemeWrapper>
)

export default App

render(<App />, document.getElementById('app'))
