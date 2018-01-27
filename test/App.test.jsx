import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/components/App'


describe('(Component) App', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toHaveLength(1)
  })
})
