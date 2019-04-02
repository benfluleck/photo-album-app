import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '<styles>/variables/spacing'

const Image = ({ imageUrl, altTitle, width }) => <Image.Container src={imageUrl} alt={altTitle} width={width}/>

Image.Container = styled.img`
  width: ${props => props.theme.spacing[props.width] || '100%'};
  border-radius: 0.25rem 0.25rem 0 0;
  `

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altTitle: PropTypes.string,
  width: PropTypes.oneOf(Object.keys(spacing))
}

export default Image
