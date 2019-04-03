import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import AlbumList from '<organisms>/AlbumList/AlbumList'
import PageTemplate from '<templates>/PageTemplate'
import { UsersContext } from '<state>/GlobalContext'
import useAlbum from '<state>/Album/useAlbum'
import { getUsers, generateAlbumData } from '<helpers>/utils'

function AlbumPage ({ albumTitle = 'Album Title' }) {
  const allUsers = useContext(UsersContext)
  const users = getUsers(allUsers)
  const { albums } = useAlbum()

  const results = generateAlbumData(albums, users)
  return (
    <PageTemplate pageTitle={albumTitle}>
      <AlbumList
        albums={results.data}
        username={results.username}
      />
    </PageTemplate>)
}

AlbumPage.propTypes = {
  albumTitle: PropTypes.string
}

export default AlbumPage
