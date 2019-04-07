import React from 'react'
import { shallow } from 'enzyme'
import { renderWithTheme } from '<helpers>/testUtils'
import Text from '<atoms>/Text/Text'

const setup = props => {
  const defaultProps = {
    display: 'inline',
    fontSize: 'base',
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'black'
  }

  const text = (
    <Text {...defaultProps} {...props}>
      Test
    </Text>
  )

  const wrapper = shallow(text)
  const tree = renderWithTheme(text)

  return {
    wrapper,
    tree,
    container: wrapper.find(Text.Container)
  }
}

// Text Test Component
describe('Component - Text', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBeTruthy()
  })

  // Props tests
  test('should have correct content', () => {
    const { wrapper } = setup()

    expect(wrapper.props().children).toEqual('Test')
  })

  describe('should have correct props', () => {
    test('for display', () => {
      const { wrapper } = setup()

      expect(wrapper.props().display).toEqual('inline')
    })
    test('for color', () => {
      const { wrapper } = setup()

      expect(wrapper.props().color).toEqual('black')
    })
    test('for fontWeight', () => {
      const { wrapper } = setup()

      expect(wrapper.props().fontWeight).toEqual('normal')
    })
    test('for textalign', () => {
      const { wrapper } = setup()

      expect(wrapper.props().textAlign).toEqual('center')
    })

    test('should render css padding', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('padding', '0')
    })
  })

  // Css tests
  describe('should have correct fontWeight', () => {
    test('by default', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('font-weight', '400')
    })

    test('when specified', () => {
      const { tree } = setup({
        fontWeight: 'bold'
      })

      expect(tree).toHaveStyleRule('font-weight', '700')
    })
  })
})
