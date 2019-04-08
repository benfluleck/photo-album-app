import React from 'react'
import { shallow } from 'enzyme'

import OptionSelect from '<molecules>/OptionSelect/OptionSelect'

const setup = props => {
  const defaulfProps = {
    onChange: () => {}
  }

  const optionWrapper = <OptionSelect {...defaulfProps} {...props} />
  const wrapper = shallow(optionWrapper)
  const optionSelect = wrapper.find(OptionSelect.Select)
  const optionItem = wrapper.find(OptionSelect.Item)

  return {
    wrapper,
    optionSelect,
    optionItem
  }
}

describe('Component - OptionSelect', () => {
  test('should render', () => {
    const { wrapper } = setup()
    expect(wrapper.exists()).toBeTruthy()
  })

  test('for call function onChange', () => {
    const onChange = jest.fn()
    const { optionSelect } = setup({ handleOnChange: onChange })

    optionSelect.simulate('change', { target: { value: '222' } })
    expect(onChange).toHaveBeenCalled()
  })

  describe('Option Item', () => {
    test('should render 4 option select items', () => {
      const { optionItem } = setup()
      expect(optionItem).toHaveLength(4)
    })
  })
})
