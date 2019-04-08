import React from 'react'
import { shallow } from 'enzyme'

import Title from '<atoms>/Title/Title'
import SectionHeader from '<molecules>/SectionHeader/SectionHeader'

const setup = props => {
  const defaulfProps = {
    header: 'Header',
    title: 'Title Value'
  }

  const sectionheader = <SectionHeader {...defaulfProps} {...props} />
  const wrapper = shallow(sectionheader)
  const section = wrapper.find(SectionHeader.Container)
  const title = wrapper.find(Title)

  return {
    wrapper,
    title,
    section
  }
}

describe('Component - SectionHeader', () => {
  const { wrapper } = setup()
  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should render 2 Title Components', () => {
    const { title } = setup()

    expect(title).toHaveLength(2)
  })

  test('should render fontSize', () => {
    const { section } = setup()

    expect(section.children().props().fontSize).toEqual('md')
  })
})
