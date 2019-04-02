import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Photo from '<molecules>/Photo/Photo'

function PhotoList ({ photos }) {
  return (
    <PhotoList.Container>
      {renderPhotos(photos)}
    </PhotoList.Container>
  )

  function renderPhotos (photos) {
    return photos.map((photo, index) =>
      (<Photo
        key={`${index}+${photo.id}`}
        imageUrl={photo.url}
        imageTitle={photo.title}
      />))
  }
}

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  )
}

PhotoList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  padding: 40px;
`

export default PhotoList
