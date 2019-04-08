import React from 'react'
import { shallow } from 'enzyme'
import { renderWithTheme } from '<helpers>/testUtils'
import PaginationInput from '<atoms>/PaginationInput/PaginationInput'

const setup = props => {
  const defaultProps = {
    value: 1,
    onChange: () => {}
  }
  const pageItem = (
    <PaginationInput {...defaultProps} {...props} />

  )

  const wrapper = shallow(pageItem)
  const tree = renderWithTheme(pageItem)

  return {
    wrapper,
    tree,
    container: wrapper.find(PaginationInput.Container)
  }
}

describe('Component- PaginationInput  ', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Props', () => {
    test('should render value', () => {
      const { wrapper } = setup()

      expect(wrapper.props().value).toEqual(1)
    })

    test('for render type: number', () => {
      const onChange = jest.fn()
      const { wrapper } = setup({ onChange })

      expect(wrapper.props().type).toEqual('number')
    })

    test('for call function onChange', () => {
      const onChange = jest.fn()
      const { wrapper } = setup({ onChange })

      wrapper.simulate('change', { target: { value: '222' } })
      expect(onChange).toHaveBeenCalled()
    })
  })
})
