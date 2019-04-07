import React from 'react'
import PropTypes from 'prop-types'

import withPageTemplate from '../HOC/withPageTemplate'
import AlbumList from '<organisms>/AlbumList/AlbumList'
import { generateAlbumData } from '<helpers>/utils'

function AlbumPage (props) {
  const { username, data, history } = props
  return <AlbumList albums={data}
    username={username} onClick={handleClick} />

  function handleClick (id, title) {
    history.push(`/${id}/photos`, {
      username,
      title
    })
  }
}

AlbumPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      albumTitle: PropTypes.string,
      imageUrl: PropTypes.string
    })),
  username: PropTypes.string,
  history: PropTypes.object
}

export default withPageTemplate(AlbumPage, 'albums', 'Album Page', generateAlbumData)
