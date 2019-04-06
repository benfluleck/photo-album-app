import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PaginationItem = ({ children, ...restProps }) => (
  <PaginationItem.Container {...restProps}>{children}</PaginationItem.Container>
)

PaginationItem.Container = styled.button`
  ${({ isActive, isDisabled, theme: { spacing, fontSize, fontWeight, textColors } }) => `
  display: inline-block;
  margin: 0 ${spacing.xs};
  padding: 0 ${spacing.base};
  min-width: calc(
    ${spacing.sm} + ${spacing.base}
  );
  height: calc(
    ${spacing.sm} + ${spacing.base}
  );
  line-height: calc(
    ${spacing.sm} + ${spacing.base}
  );
  background-color: ${isActive ? textColors.grayLight : 'transparent'};
  border: none;
  color: ${isActive ? textColors.navbar : textColors.black};
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.bold};
  border-radius: ${spacing.base};
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.1s ease-in-out;
  opacity: ${isActive ? '1' : '0.3'};

  &:hover {
    opacity: 1;
    background-color: ${textColors.grayLight};
  }

  &:focus,
  &:active {
    outline: none;
  }
`}`

PaginationItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default PaginationItem
