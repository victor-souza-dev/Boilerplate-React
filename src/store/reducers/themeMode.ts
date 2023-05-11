import { createSlice } from '@reduxjs/toolkit';
import { lightTheme } from '../../themes/light';
import { darkTheme } from '../../themes/dark';

const isDarkTheme = localStorage.getItem('themeDefault') === 'true';

const initialState = {
  isDarkTheme,
  theme: isDarkTheme ? darkTheme : lightTheme,
};

const themeMode = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      const newIsDarkTheme = !state.isDarkTheme;
      localStorage.setItem('themeDefault', newIsDarkTheme.toString());
      state.isDarkTheme = newIsDarkTheme;
      state.theme = newIsDarkTheme ? darkTheme : lightTheme;
    },
  },
});

export const { switchTheme } = themeMode.actions;

export default themeMode.reducer;
