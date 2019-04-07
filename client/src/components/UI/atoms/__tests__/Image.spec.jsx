import React from 'react'
import { shallow } from 'enzyme'
import { renderWithTheme } from '<helpers>/testUtils'
import Image from '<atoms>/Image/Image'

const setup = props => {
  const defaultProps = {
    imageUrl: 'http://placeholder/img',
    altTitle: 'Test Title'
  }

  const image = (
    <Image {...defaultProps} {...props} />
  )

  const wrapper = shallow(image)
  const tree = renderWithTheme(image)

  return {
    wrapper,
    tree,
    container: wrapper.find(Image.Container)
  }
}

describe('Component- Image', () => {
  test('should render', () => {
    const { wrapper } = setup()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Props', () => {
    test('should render src for Image', () => {
      const { wrapper } = setup()

      expect(wrapper.props().src).toEqual('http://placeholder/img')
    })

    test('should render alt for Image', () => {
      const { wrapper } = setup()

      expect(wrapper.props().alt).toEqual('Test Title')
    })

    test('should render alt for Image', () => {
      const { wrapper } = setup({ width: 'base' })

      expect(wrapper.props().width).toEqual('base')
    })
  })
  describe('CSS properties', () => {
    test('should render width is specified', () => {
      const { tree } = setup({ width: 'base' })

      expect(tree).toHaveStyleRule('width', '.8rem')
    })

    test('should render border-radius', () => {
      const { tree } = setup()

      expect(tree).toHaveStyleRule('border-radius', '0.25rem 0.25rem 0 0')
    })
  })
})
