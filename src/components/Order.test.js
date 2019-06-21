import { shallow } from 'enzyme';
import React from 'react';
import Order from './Order';

it('expects to render Order component', () => {
  const name = 'Bill';
  const balance = 5000;
  expect(shallow(<Order name={name} balance={balance} />)).toMatchSnapshot();
});

it('receives name and balance from props', () => {
  const mockName = 'Tom';
  const mockBalance = 3800;
  const wrapper = shallow(<Order name={mockName} balance={mockBalance} />);

  expect(wrapper.instance().props.name).toEqual('Tom');
  expect(wrapper.instance().props.balance).toEqual(3800);
});
