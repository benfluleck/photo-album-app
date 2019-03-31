import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fontWeight, fontSize } from '<styles>/variables/fonts'
import { textColors } from '<styles>/variables/colorPalette'
import { spacing } from '<styles>/variables/spacing'

/**
 * @description - Text Component
 *
 * Text Component for Text and Titles
 */
const Text = ({
  fontSize,
  textAlign,
  color,
  display,
  uppercase,
  fontWeight,
  children,
  padding
}) => (
  <Text.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    uppercase={uppercase}
    fontWeight={fontWeight}
    padding={padding}
  >
    {children}
  </Text.Container>
)

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSize)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  uppercase: PropTypes.bool,
  fontWeight: PropTypes.oneOf(Object.keys(fontWeight)),
  padding: PropTypes.oneOf(Object.keys(spacing))
}

Text.defaultProps = {
  display: 'inline',
  uppercase: false,
  fontWeight: 'normal'
}

Text.Container = styled.span`
  text-align: ${props => props.textAlign};
  font-size: ${props => props.theme.fontSize[props.fontSize]};
  display: ${props => props.display};
  padding: ${props => props.theme.spacing[props.padding] || '0'};
  font-weight: ${props => props.theme.fontWeight[props.fontWeight]};
  ${props => props.uppercase && 'text-transform: uppercase'};
`
export default Text
