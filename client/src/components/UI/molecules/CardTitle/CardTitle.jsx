import React from 'react'
import PropTypes from 'prop-types'

import Title from '<atoms>/Title/Title'

const CardTitle = ({ cardTitle, titleValue }) => (
  <Title fontSize="sm">
    {`${cardTitle}: ${titleValue}`}
  </Title>
)

CardTitle.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  titleValue: PropTypes.string.isRequired
}

export default CardTitle
