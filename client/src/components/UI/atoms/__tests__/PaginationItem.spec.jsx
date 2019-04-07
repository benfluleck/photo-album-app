import React from 'react'
import { shallow } from 'enzyme'
import { renderWithTheme } from '<helpers>/testUtils'
import PaginationItem from '<atoms>/PaginationItem/PaginationItem'

const setup = props => {
  const pageItem = (
    <PaginationItem {...props}>
    1
    </PaginationItem>
  )

  const wrapper = shallow(pageItem)
  const tree = renderWithTheme(pageItem)

  return {
    wrapper,
    tree,
    container: wrapper.find(PaginationItem.Container)
  }
}

describe('Component- PaginationItem', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('CSS Properties', () => {
    test('should render color by default', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('color', '#191919')
    })

    test('should render active color', () => {
      const { tree } = setup({ isActive: true })

      expect(tree).toHaveStyleRule('color', '#964B8A')
    })

    test('should render opacity:0.3 by default', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('opacity', '0.3')
    })

    test('should render opacity:1 when isActive is set to true', () => {
      const { tree } = setup({ isActive: true })

      expect(tree).toHaveStyleRule('opacity', '1')
    })

    test('should render background color by default', () => {
      const { tree } = setup({ })

      expect(tree).toHaveStyleRule('background-color', 'transparent')
    })

    test('should render background color when isActive is true', () => {
      const { tree } = setup({ isActive: true })

      expect(tree).toHaveStyleRule('background-color', '#E7EAF0')
    })
  })
})
