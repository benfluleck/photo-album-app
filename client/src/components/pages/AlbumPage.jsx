import React from 'react'
import PropTypes from 'prop-types'

import withPageTemplate from '../hoc/withPageTemplate'
import AlbumList from '<organisms>/AlbumList/AlbumList'
import { generateAlbumData } from '<helpers>/utils'

const AlbumPage = props => <AlbumList albums={props.data} username={props.username} />

AlbumPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      albumTitle: PropTypes.string,
      imageUrl: PropTypes.string
    })),
  username: PropTypes.string
}

export default withPageTemplate(AlbumPage, 'albums', 'Album Title', generateAlbumData)
