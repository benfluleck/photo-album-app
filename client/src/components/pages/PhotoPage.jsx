import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import withPageTemplate from '../hoc/withPageTemplate'
import PhotoList from '<organisms>/PhotoList/PhotoList'
import { generatePhotosData } from '<helpers>/utils'
import SectionHeader from '<molecules>/SectionHeader/SectionHeader'

const PhotoPage = props => {
  const { location: { state: { username, title } } } = props

  return (
    <Fragment>
      <SectionHeader header={username} title={title} />
      <PhotoList photos={props.photoResults} />
    </Fragment>

  )
}

PhotoPage.propTypes = {
  photoResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  ),
  location: PropTypes.object
}

export default withPageTemplate(PhotoPage, 'photos', 'Photo Page', generatePhotosData)
