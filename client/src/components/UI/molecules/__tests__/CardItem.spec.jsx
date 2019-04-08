import React from 'react'
import { shallow } from 'enzyme'

import CardItem from '<molecules>/CardItem/CardItem'

const setup = props => {
  const defaulfProps = {
    cardItem: 'card Item',
    itemValue: 'Item Value'
  }

  const cardItemWrapper = <CardItem {...defaulfProps} {...props} />
  const wrapper = shallow(cardItemWrapper)

  return {
    wrapper
  }
}

describe('Component - CardItem', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should render cardItem text', () => {
    const { wrapper } = setup()

    expect(wrapper.props().children).toEqual('card Item: Item Value')
  })

  test('should render fontSize by default', () => {
    const { wrapper } = setup()

    expect(wrapper.props().fontSize).toEqual('sm')
  })

  test('should render color by default', () => {
    const { wrapper } = setup()

    expect(wrapper.props().color).toEqual('grey')
  })

  test('should render padding by default', () => {
    const { wrapper } = setup()

    expect(wrapper.props().padding).toEqual('0.4rem 0')
  })
})
