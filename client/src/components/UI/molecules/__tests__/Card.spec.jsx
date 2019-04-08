import React from 'react'
import { shallow } from 'enzyme'

import { renderWithTheme } from '<helpers>/testUtils'

import Image from '<atoms>/Image/Image'
import Card from '<molecules>/Card/Card'
import CardTitle from '<molecules>/CardTitle/CardTitle'
import CardItem from '<molecules>/CardItem/CardItem'

const setup = props => {
  const defaulfProps = {
    imageUrl: 'http://photoplaceholder',
    imageTitle: 'Test Title',
    cardTitle: 'Card Title',
    cardTitleValue: 'Testing',
    onClick: () => {}
  }

  const cardWrapper = <Card {...defaulfProps} {...props} />
  const wrapper = shallow(cardWrapper)

  return {
    wrapper,
    tree: renderWithTheme(cardWrapper),
    cardContainer: wrapper.find(Card.Container),
    cardContent: wrapper.find(Card.Content),
    cardTitle: wrapper.find(CardTitle),
    cardItem: wrapper.find(CardItem),
    image: wrapper.find(Image)
  }
}

describe('Component - Card', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Card Container', () => {
    test('should render 1 card Container', () => {
      const { cardContainer } = setup()

      expect(cardContainer).toHaveLength(1)
    })

    test('should call onClick function', () => {
      const onClick = jest.fn()
      const { cardContainer } = setup({ onClick })

      cardContainer.simulate('click')

      expect(onClick).toHaveBeenCalled()
    })
    describe('CSS Properties', () => {
      const { tree } = setup()

      test('should render max-width by default', () => {
        expect(tree).toHaveStyleRule('max-width', '15rem')
      })

      test('should render display by default', () => {
        expect(tree).toHaveStyleRule('display', 'flex')
      })

      test('should render border-radius by default', () => {
        expect(tree).toHaveStyleRule('border-radius', '0.25rem')
      })

      test('should render flex-flow by default', () => {
        expect(tree).toHaveStyleRule('flex-flow', 'column wrap')
      })

      test('should render transition by default', () => {
        expect(tree).toHaveStyleRule('transition', 'box-shadow 0.5s')
      })
    })

    describe('Card Title', () => {
      test('should render card Title', () => {
        const { cardTitle } = setup()

        expect(cardTitle.props().cardTitle).toEqual('Card Title')
      })

      test('should render titleValue', () => {
        const { cardTitle } = setup()

        expect(cardTitle.props().titleValue).toEqual('Testing')
      })
    })

    describe('Card Item', () => {
      test('should not render cardItem by default', () => {
        const { cardItem } = setup()

        expect(cardItem).toEqual({})
      })

      test('should render cardItem if itemTitle is specified', () => {
        const { cardItem } = setup({ itemTitle: 'ItemTitle', itemValue: 'ItemValue' })

        expect(cardItem).toHaveLength(1)
      })

      test('should render cardItem', () => {
        const { cardItem } = setup({ itemTitle: 'ItemTitle', itemValue: 'ItemValue' })

        expect(cardItem.props().cardItem).toEqual('ItemTitle')
      })

      test('should render itemValue', () => {
        const { cardItem } = setup({ itemTitle: 'ItemTitle', itemValue: 'ItemValue' })

        expect(cardItem.props().itemValue).toEqual('ItemValue')
      })
    })

    describe('Image', () => {
      test('should render imageUrl', () => {
        const { image } = setup()

        expect(image.props().imageUrl).toEqual('http://photoplaceholder')
      })

      test('should render imageTitle', () => {
        const { image } = setup()

        expect(image.props().altText).toEqual('Test Title')
      })
    })
  })
})
