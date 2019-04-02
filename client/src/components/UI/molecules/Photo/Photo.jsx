import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from '<atoms>/Image/Image'
import Text from '<atoms>/Text/Text'
import Title from '<atoms>/Title/Title'

import { spacing } from '<styles>/variables/spacing'

const Photo = ({ imageUrl, imageTitle, width }) => (
  <Photo.Container width={width}>
    <Photo.Image>
      <Image imageUrl={imageUrl} altTitle={imageTitle} />
    </Photo.Image>
    <Photo.Text className="card__text">
      <Title fontSize="base">Photo Title</Title>
      <Text fontSize="base" display="inline-block" textAlign="center" color="white">{imageTitle}</Text>
    </Photo.Text>
  </Photo.Container>
)

Photo.Container = styled.div`
  ${({ width: containerWidth, theme: { spacing, textColors } }) => `
  position: relative;
  margin: ${spacing.basePlusXs};
  text-align: center;
  width: ${spacing[containerWidth] || spacing.maxWidth};
  &:hover {
    transition: opacity ease-out 0.25s;
    opacity: 0.7;
    cursor: pointer;
    > .card__text {
      opacity: 1;
    }
  }

  &:before {
    transform: scale(0,1); 
    transition: transform ease-out 0.25s;
    border-top: ${spacing.xxxs} solid ${textColors.white};
    border-bottom: ${spacing.xxxs} solid ${textColors.white};
  }

  &:after {
    transform: scale(1,0); 
    transition: transform ease-out 0.25s;
    border-right: ${spacing.xxxs} solid ${textColors.white};
    border-left: ${spacing.xxxs} solid ${textColors.white};
  }

  &:before, &:after {
    content: '';
    position: absolute;
    top: ${spacing.xs};
    bottom: ${spacing.xs};
    left: ${spacing.xs};
    right: ${spacing.xs};
  }

  &:hover:before {
    transform: scale(1,0.9);
  }

  &:hover:after {
    transform: scale(0.90,1);
  }

`}`

Photo.Image = styled.div`
   ${({ theme: { spacing } }) => `
  max-width: ${spacing.maxWidth};
  display: block;
  transition: opacity ease-out 0.25s;
  opacity: 1;
`}`

Photo.Text = styled.div`
  position: absolute;
  display: grid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  transition: opacity ease-out 0.25s;
`

Photo.propTypes = {
  imageUrl: PropTypes.string,
  imageTitle: PropTypes.string,
  width: PropTypes.oneOf(Object.keys(spacing))
}

export default Photo
