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
  fontWeight,
  children,
  padding
}) => (
  <Text.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    fontWeight={fontWeight}
    padding={padding}
  >
    {children}
  </Text.Container>
)

Text.Container = styled.span`
    ${({ padding,
    fontSize: userFontSize,
    fontWeight: userFontWeight,
    display,
    textAlign,
    color,
    theme: { fontSize, fontWeight, textColors } }) => `
    text-align: ${textAlign};
    color: ${textColors[color]};
    display: ${display};
    padding: ${padding || '0'};
    font-size: ${fontSize[userFontSize]};
    font-weight: ${fontWeight[userFontWeight]};
`}`

Text.defaultProps = {
  display: 'inline',
  fontWeight: 'normal',
  textAlign: 'left'
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSize)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeight)),
  padding: PropTypes.string,
}

export default Text
