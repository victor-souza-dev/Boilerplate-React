import { configureStore } from '@reduxjs/toolkit';
import themeMode from './reducers/themeMode';

export default configureStore({
  reducer: {
    theme: themeMode,
  },
});
