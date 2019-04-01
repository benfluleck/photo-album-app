import React from 'react'
import PropTypes from 'prop-types'

import Text from '<atoms>/Text/Text'

const CardItem = ({ cardItem, itemValue }) => (
  <Text fontSize="sm" color="grey" padding="0.4rem 0">
    {`${cardItem}: ${itemValue}`}
  </Text>
)

CardItem.propTypes = {
  cardItem: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired
}

export default CardItem
