import React from 'react'
import { shallow } from 'enzyme'
import { renderWithTheme } from '<helpers>/testUtils'
import Title from '<atoms>/Title/Title'

const setup = props => {
  const defaultProps = {
    fontSize: 'base',
    children: 'Testing'
  }

  const title = (
    <Title {...defaultProps} {...props} />

  )

  const wrapper = shallow(title)
  const tree = renderWithTheme(title)

  return {
    wrapper,
    tree,
    container: wrapper.find(Title.Container)
  }
}

describe('Component- Title', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBeTruthy()
  })

  test('should have correct content', () => {
    const { wrapper } = setup()

    expect(wrapper.props().children).toEqual('Testing')
  })

  test('for fontSize', () => {
    const { wrapper } = setup()

    expect(wrapper.props().fontSize).toEqual('base')
  })

  describe('CSS Properties', () => {
    test('should render text-align:center', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('text-align', 'left')
    })

    test('should render font-weight:bold', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('font-weight', 'bold')
    })

    test('should render display:inline', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('display', 'inline')
    })

    test('should render padding-bottom 0.8rem', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('padding-bottom', '.8rem')
    })

    test('should render font-size by default', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('font-size', '1.4rem')
    })

    test('should render padding-bottom by default', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('padding-bottom', '.8rem')
    })
  })
})
