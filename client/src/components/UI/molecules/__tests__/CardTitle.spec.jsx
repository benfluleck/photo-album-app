import React from 'react'
import { shallow } from 'enzyme'

import CardTitle from '<molecules>/CardTitle/CardTitle'

const setup = props => {
  const defaulfProps = {
    cardTitle: 'card Title',
    titleValue: 'Title Value'
  }

  const cardTitleWrapper = <CardTitle {...defaulfProps} {...props} />
  const wrapper = shallow(cardTitleWrapper)

  return {
    wrapper
  }
}

describe('Component - CardTitle', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should render cardTitle text', () => {
    const { wrapper } = setup()

    expect(wrapper.props().children).toEqual('card Title: Title Value')
  })

  test('should render fontSize by default', () => {
    const { wrapper } = setup()

    expect(wrapper.props().fontSize).toEqual('sm')
  })
})
