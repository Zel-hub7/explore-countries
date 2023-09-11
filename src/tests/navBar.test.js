import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/navBar';

describe('NavBar component', () => {
  it('renders without errors', () => {
    const { getByText, getByTestId } = render(<NavBar />);

    expect(getByText('Explore World Countries')).toBeInTheDocument();

    expect(getByTestId('microphone-button')).toBeInTheDocument();
    expect(getByTestId('settings-button')).toBeInTheDocument();

    const container = document.createElement('div');
    container.appendChild(getByText('Explore World Countries'));
    container.appendChild(getByTestId('microphone-button'));
    container.appendChild(getByTestId('settings-button'));

    expect(container).toMatchSnapshot();
  });
});
