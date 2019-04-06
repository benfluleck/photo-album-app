import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from '<molecules>/Card/Card'

function AlbumList ({ albums, username, onClick }) {
  return (
    <AlbumList.Container>
      {renderAlbums(albums, onClick)}
    </AlbumList.Container>
  )

  function renderAlbums (albums, onClick) {
    return albums.map((album, index) => (<Card
      key={`${index}+${album.imageUrl}`}
      imageUrl={album.imageUrl}
      imageTitle={album.title}
      cardTitle="Album Title"
      cardTitleValue={album.title}
      itemTitle="Username"
      itemValue={username}
      onClick={() => onClick(album.id)}
    />))
  }
}

AlbumList.defaultProps = {
  onClick: () => {}
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      userId: PropTypes.string,
      imageUrl: PropTypes.string
    })
  ),
  username: PropTypes.string,
  onClick: PropTypes.func
}

AlbumList.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  padding: 40px;
`

export default AlbumList
