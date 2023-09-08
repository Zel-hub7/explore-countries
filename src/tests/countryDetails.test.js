import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CountryDetails from '../components/CountryDetails';

const mockStore = configureStore([]);
const initialState = {
  countries: {
    data: [

      {
        countryID: '1',
        name: 'Test Country',
        officialName: 'Test Official Name',
        flag: { png: 'test.png', alt: 'Test Flag' },
        capital: ['Test Capital'],
        region: 'Test Region',
        startOfWeek: 'Test Start of Week',
        drivingSide: 'Test Driving Side',
        continent: ['Test Continent'],
      },
    ],
  },
};

describe('CountryDetails component', () => {
  it('renders country details', () => {
    const store = mockStore(initialState);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/1']}>
          <Routes>
            <Route path="/details/:countryId" element={<CountryDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText('Test Country')).toBeInTheDocument();

    expect(getByTestId('microphone-button')).toBeInTheDocument();
    expect(getByTestId('settings-button')).toBeInTheDocument();
  });

  it('renders "Country not found" message', () => {
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/2']}>
          <Routes>
            <Route path="/details/:countryId" element={<CountryDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText('Country not found')).toBeInTheDocument();
  });
});
