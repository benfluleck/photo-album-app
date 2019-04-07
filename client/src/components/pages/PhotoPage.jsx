import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import withPageTemplate from '../hoc/withPageTemplate'
import PhotoList from '<organisms>/PhotoList/PhotoList'
import { generatePhotosData } from '<helpers>/utils'
import SectionHeader from '<molecules>/SectionHeader/SectionHeader'

import useModal from '<state>/hooks/useModal'
import PhotoDetailModal from './modals/PhotoDetailModal'

const PhotoPage = props => {
  const { location: { state: { username, title } } } = props

  const photoModal = useModal(false)

  const [ image, setImage ] = useState()

  const handleClick = (url) => {
    setImage(url)
    photoModal.setIsOpen(true)
  }

  return (
    <Fragment>
      <SectionHeader header={username} title={title} />
      <PhotoList photos={props.photoResults} onClick={handleClick} />
      <PhotoDetailModal
        isOpen={photoModal.isOpen}
        username={username}
        title={title}
        image={image}
        onToggle={photoModal.onToggle}
      />
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
