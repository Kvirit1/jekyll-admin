import React from 'react';
import { mount } from 'enzyme';

import Errors from '../Errors';

import { errors } from './fixtures';

function setup() {

  let component = mount(<Errors errors={errors} />);

  return {
    component,
    listItem: component.find('li')
  };
}

describe('Components::Errors', () => {
  it('should render errors correctly', () => {
    const { listItem } = setup();
    expect(listItem.length).toBe(errors.length);
  });
});
