import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';

describe('Enzyme testing', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('react-testing-library', () => {
  it('renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome to the SumUp task!')).toBeInTheDocument();
  });
});

describe('Total transactions', () => {
  it('should render equal number of fetched transaction', async () => {
    const wrapper = shallow(<App />);
    const componentInstance = wrapper.instance();

    await componentInstance.fetchAndUpdate();

    const currentDataLength = wrapper.state().data.length;
    const totalRenderedComponent = wrapper.find('transaction').length;

    expect(currentDataLength).toEqual(totalRenderedComponent);
  });
});