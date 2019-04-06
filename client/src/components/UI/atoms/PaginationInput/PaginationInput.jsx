import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PaginationInput = ({ onChange, value }) => (
  <PaginationInput.Container type="number" onChange={onChange} value={value} />
)

PaginationInput.Container = styled.input`
  ${({ theme: { spacing } }) => `
  display: inline-block;
  margin: ${spacing.xs};
  padding:  ${spacing.xs};
  max-width: ${spacing.smPlusBasePlusxs};
  text-align: center;
  outline: 0;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`}`

PaginationInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
}

export default PaginationInput
