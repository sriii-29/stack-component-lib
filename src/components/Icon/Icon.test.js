import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('***--- Icon Component --- ***', () => {
  it('test', () => {
    expect(1).toEqual(1);
  });
});
