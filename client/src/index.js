import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import mainTheme from '<styles>/variables/mainTheme'
import GlobalStyle from '<styles>/global'
import BaseRoute from '<pages>/index.jsx'

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Fragment>
      <GlobalStyle />
      <Router>
        <BaseRoute />
      </Router>
    </Fragment>
  </ThemeProvider>
)

export default App

render(<App />, document.getElementById('app'))
