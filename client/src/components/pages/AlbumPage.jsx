import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from '<templates>/PageTemplate'

const AlbumPage = ({ albumTitle = 'Album Title' }) => (
  <PageTemplate pageTitle={albumTitle}>
  Benny
  </PageTemplate>)

AlbumPage.propTypes = {
  albumTitle: PropTypes.string
}

export default AlbumPage
