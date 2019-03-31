import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fontSize } from '<styles>/variables/fonts'

const Title = ({
  fontSize,
  children
}) => (
  <Title.Container
    fontSize={fontSize}>
    {children}
  </Title.Container>
)

Title.Container = styled.span`
  ${({ fontSize: userFontSize, theme: { fontSize } }) => `
  text-align: left;
  font-size: ${fontSize[userFontSize]};
  font-weight: bold;
  display: inline;
`}`

Title.defaultProps = {
  fontSize: 'xsMd'
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(Object.keys(fontSize))
}

export default Title
