import React from 'react'
import PropTypes from 'prop-types'

import withPageTemplate from '../hoc/withPageTemplate'
import AlbumList from '<organisms>/AlbumList/AlbumList'
import { generateAlbumData } from '<helpers>/utils'

function AlbumPage (props) {
  return <AlbumList albums={props.data}
    username={props.username} onClick={handleClick} />

  function handleClick (id) {
    props.history.push(`/${id}/photos`)
  }
}

AlbumPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      albumTitle: PropTypes.string,
      imageUrl: PropTypes.string
    })),
  username: PropTypes.string,
  history: PropTypes.func
}

export default withPageTemplate(AlbumPage, 'albums', 'Album Page', generateAlbumData)
