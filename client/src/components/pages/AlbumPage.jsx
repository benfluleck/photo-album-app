import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import PageTemplate from '<templates>/PageTemplate'
import { UsersContext } from '<state>/GlobalContext'
import { getUsers } from '<helpers>/utils'

const AlbumPage = ({ albumTitle = 'Album Title' }) => {
  const users = useContext(UsersContext)
  const strippedUsers = getUsers(users)
  
  return (
    <PageTemplate pageTitle={albumTitle}>
      {JSON.stringify(strippedUsers, 4)}
    </PageTemplate>)
}

AlbumPage.propTypes = {
  albumTitle: PropTypes.string
}

export default AlbumPage
