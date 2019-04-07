import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '<atoms>/Title/Title'

const SectionHeader = ({ header, title }) => (
  <Fragment>
    <SectionHeader.Container>
      <Title fontSize="md">
        Owner: {header}
      </Title>
    </SectionHeader.Container>
    <Title fontSize="base">
      Album Title: {title}
    </Title>
  </Fragment>
)

SectionHeader.Container = styled.div``

SectionHeader.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string
}

export default SectionHeader
