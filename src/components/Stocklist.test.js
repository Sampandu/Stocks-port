import { shallow } from 'enzyme';
import React from 'react';
import Stocklist from './Stocklist';

it('expects to render Stocklist component', () => {
  const mockPortfolio = [
    {
      id: 1,
      ticker: 'aapl',
      open: 200,
      latest: 210,
    },
    {
      id: 2,
      ticker: 'googl',
      open: 1050,
      latest: null,
    },
  ];
  expect(shallow(<Stocklist portfolio={mockPortfolio} />)).toMatchSnapshot();
});
