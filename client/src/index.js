import React, { Fragment } from 'react'
import { render } from 'react-dom'

import './index.css'

const App = () => (
  <Fragment>
    <h1 className="hello__message">Hello World </h1>
  </Fragment>

)

export default App

render(<App />, document.getElementById('app'))
