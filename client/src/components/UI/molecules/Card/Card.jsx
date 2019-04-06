import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CardItem from '<molecules>/CardItem/CardItem'
import CardTitle from '<molecules>/CardTitle/CardTitle'
import Image from '<atoms>/Image/Image'

function Card ({
  imageUrl,
  imageTitle,
  cardTitle,
  cardTitleValue,
  itemTitle,
  itemValue,
  onClick
}) {
  return (<Card.Container onClick={onClick}>
    <Image imageUrl={imageUrl} altText={imageTitle}></Image>
    <Card.Content>
      <CardTitle cardTitle={cardTitle} titleValue={cardTitleValue} />
      {itemTitle && renderCardItems(itemTitle, itemValue)}
    </Card.Content>
  </Card.Container>)

  function renderCardItems (item, value) {
    return (<CardItem cardItem={item} itemValue={value} />
    )
  }
}

Card.Container = styled.div`
  max-width: ${props => props.theme.spacing.cards};
  box-shadow: 0px 2px 18px -4px rgba(0, 0, 0, 0.75);
  display: flex;
  border-radius: 0.25rem;
  flex-flow: column wrap;
  transition: box-shadow 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`

Card.Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem;
`

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTitle: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardTitleValue: PropTypes.string,
  itemTitle: PropTypes.string,
  itemValue: PropTypes.string,
  onClick: PropTypes.func
}

export default Card
