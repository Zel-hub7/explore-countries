import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiUrl = 'https://restcountries.com/v3.1/all';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};
const getCountryData = (data) => data.map((country) => ({
  countryID: uuidv4(),
  name: country.name.common,
  officialName: country.name.official,
  capital: country.capital,
  language: country.languages,
  fifaCode: country.fifa,
  drivingSide: country.car.side,
  startOfWeek: country.startOfWeek,
  region: country.region,
  subregion: country.subregion,
  timezone: country.timezones,
  continent: country.continents,
  flag: {
    png: country.flags.png,
    alt: country.flags.alt,
  },
  area: country.area,
  populationNumber: country.population,
}));

export const fetchCountryData = createAsyncThunk(
  'countries/fetchCountryData',
  async () => {
    try {
      const { data } = await axios.get(apiUrl);
      return getCountryData(data);
    } catch (error) {
      throw error;
    }
  },
);

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountryData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountryData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
