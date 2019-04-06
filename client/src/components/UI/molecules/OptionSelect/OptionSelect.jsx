import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const OptionSelect = ({ handleOnChange }) => (
  <OptionSelect.Container>
    <OptionSelect.Label>Limit</OptionSelect.Label>
    <OptionSelect.Select onChange={handleOnChange}>
      <OptionSelect.Item defaultValue>--Please Select --</OptionSelect.Item>
      <OptionSelect.Item value="20">20</OptionSelect.Item>
      <OptionSelect.Item value="30">30</OptionSelect.Item>
      <OptionSelect.Item value="50">50</OptionSelect.Item>
    </OptionSelect.Select>
  </OptionSelect.Container>
)

OptionSelect.Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`

OptionSelect.Label = styled.label`
  padding-bottom: 12px;
`

OptionSelect.Select = styled.select``

OptionSelect.Item = styled.option``

OptionSelect.propTypes = {
  handleOnChange: PropTypes.func,
  initLimit: PropTypes.number
}

export default OptionSelect
