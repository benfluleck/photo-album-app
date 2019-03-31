import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import mainTheme from '../variables/mainTheme'

class ThemeWrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={mainTheme}>{this.props.children}</ThemeProvider>
    )
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeWrapper
