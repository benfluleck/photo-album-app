import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'

import Image from '<atoms>/Image/Image'
import Text from '<atoms>/Text/Text'
import Title from '<atoms>/Title/Title'

import Photo from '<molecules>/Photo/Photo'

const setup = props => {
  const defaulfProps = {
    imageUrl: 'http://photoplaceholder',
    imageTitle: 'Test Title',
    onClick: () => {}
  }

  const photoWrapper = <Photo {...defaulfProps} {...props} />
  const wrapper = shallow(photoWrapper)

  return {
    wrapper,
    tree: renderWithTheme(photoWrapper),
    photoTitle: wrapper.find(Title),
    photoText: wrapper.find(Text),
    image: wrapper.find(Image)
  }
}

describe('Component - Photo', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Photo Container', () => {
    test('should render width', () => {
      const { wrapper } = setup({ width: 'sm' })

      expect(wrapper.props().width).toEqual('sm')
    })

    test('should call onClick function', () => {
      const onClick = jest.fn()
      const { wrapper } = setup({ onClick })

      wrapper.simulate('click')

      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('Image', () => {
    test('should render imageUrl', () => {
      const { image } = setup()

      expect(image.props().imageUrl).toEqual('http://photoplaceholder')
    })

    test('should render imageTitle', () => {
      const { image } = setup()

      expect(image.props().altTitle).toEqual('Test Title')
    })
  })

  describe('CSS Properties', () => {
    const { tree } = setup()

    test('should render position: relative by default', () => {
      expect(tree).toHaveStyleRule('position', 'relative')
    })

    test('should render text-align by default', () => {
      expect(tree).toHaveStyleRule('text-align', 'center')
    })

    test('should render margin by default', () => {
      expect(tree).toHaveStyleRule('margin', '1.2rem')
    })

    test('should render width by default', () => {
      expect(tree).toHaveStyleRule('width', '100%')
    })

    test('should render transition on hover', () => {
      expect(tree).toHaveStyleRule('transition', 'opacity ease-out 0.25s', {
        modifier: '&:hover'
      })
    })

    test('should render transition on hover', () => {
      expect(tree).toHaveStyleRule('opacity', '0.7', {
        modifier: '&:hover'
      })
    })

    test('should render transition on hover', () => {
      expect(tree).toHaveStyleRule('cursor', 'pointer', {
        modifier: '&:hover'
      })
    })
  })

  describe('Text', () => {
    test('should render fontSize prop', () => {
      const { photoText } = setup()

      expect(photoText.props().fontSize).toEqual('base')
    })

    test('should render display prop', () => {
      const { photoText } = setup()

      expect(photoText.props().display).toEqual('inline-block')
    })

    test('should render textAlign prop', () => {
      const { photoText } = setup()

      expect(photoText.props().textAlign).toEqual('center')
    })

    test('should render color prop', () => {
      const { photoText } = setup()

      expect(photoText.props().color).toEqual('white')
    })

    test('should render display prop', () => {
      const { photoText } = setup()

      expect(photoText.props().children).toEqual('Test Title')
    })
  })
})
