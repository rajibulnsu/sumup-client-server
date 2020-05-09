import React from 'react';
import { shallow } from 'enzyme';
import Transaction from './index';
import renderer from 'react-test-renderer';

describe('Transaction', () => {
  it('shoult match the snapshot of transaction', () => {
    const item = {
      "transactionId": 684642834690,
      "transactionDate": "2020-01-10T10:02:49.817Z",
      "status": "Successful",
      "amount": 162.45,
      "paymentMethod": "Card"
    };
    const wrapper = renderer.create(<Transaction detail={item}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should include `status__failed` class if status is `Failed`', () => {
    const item = {
      "transactionId": 684642834690,
      "transactionDate": "2020-01-10T10:02:49.817Z",
      "status": "Failed",
      "amount": 162.45,
      "paymentMethod": "Card"
    };
    const wrapper = shallow(<Transaction detail={item} />);

    expect(wrapper.find('.transaction__amount').hasClass('status__failed')).toBe(true);
  });
});