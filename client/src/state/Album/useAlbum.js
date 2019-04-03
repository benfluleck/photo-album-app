import { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

import api from '<api>/api'

const useAlbum = () => {
  const [albums, getAlbums] = useState([])
  useEffect(
    () => {
      api
        .getAllAlbums()
        .then(response => getAlbums(response.data))
        .catch(err => console.log(err))
    },
    [albums.length]
  )

  return {
    albums,
    getAlbums
  }
}

export default useAlbum
