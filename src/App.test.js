import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TimersDashboard from './TimersDashboard';


describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App/>
    )
  })

  it('Should return TRUE if <TimerDashboard /> is being rendered.', () => {
    expect(
      wrapper.containsMatchingElement(<TimersDashboard/>)
    ).toBe(true)
  })

});