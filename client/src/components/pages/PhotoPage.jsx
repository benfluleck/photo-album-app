import React from 'react'
import PropTypes from 'prop-types'

import withPageTemplate from '../hoc/withPageTemplate'
import PhotoList from '<organisms>/PhotoList/PhotoList'
import { generatePhotosData } from '<helpers>/utils'

const PhotoPage = props => {
  console.log(props, '>>>>>>>> props')
  return (
    <PhotoList photos={props.photoResults} />

  )
}

PhotoPage.propTypes = {
  photoResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  )
}

export default withPageTemplate(PhotoPage, 'photos', 'Photo Page', generatePhotosData)
