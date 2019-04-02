import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from '<molecules>/Card/Card'

function AlbumList ({ albums }) {
  return (
    <AlbumList.Container>
      {renderAlbums(albums)}
    </AlbumList.Container>
  )

  function renderAlbums (albums) {
    return albums.map((album, index) => (<Card
      key={`${index}+${album.id}`}
      imageUrl={album.imageUrl}
      imageTitle={album.title}
      cardTitle="Album Title"
      cardTitleValue={album.title}
      itemTitle="Username"
      itemValue={album.userId}
    />))
  }
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      userId: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.string
    })
  )
}

AlbumList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  padding: 40px;
`

export default AlbumList
