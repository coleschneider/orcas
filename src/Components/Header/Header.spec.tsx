import * as React from 'react';

import Header from './Header';

describe('Header', () => {
  const windowIntersectionObserver = window['IntersectionObserver'];

  const observe = jest.fn();
  let wrapper;

  beforeAll(() => {
    const mockEntry = { isIntersecting: true };
    window['IntersectionObserver'] = jest.fn(function() {
      this.observe = observe;
    });
  });

  afterAll(() => {
    window['IntersectionObserver'] = windowIntersectionObserver;
  });
  it('renders with the navigation closed', () => {
    wrapper = shallow(<Header />);
    // console.log(wrapper.debug())
    const Posed = wrapper.find('nav');
    expect(Posed.props().pose).toBe('closed');
  });
  it('renders with the navigation closed on mobile', () => {
    wrapper = mount(<Header />);

    wrapper.setState({ isMobile: true });
    wrapper.update();
    expect(wrapper.find('.is-open').exists()).toBe(false);
    wrapper
      .find('Toggle')
      .props()
      .onClick();
    wrapper.update();
    expect(wrapper.find('.is-open')).toBeDefined();
  });
});
