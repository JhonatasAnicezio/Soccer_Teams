import { configureStore } from '@reduxjs/toolkit';
import sliceLeague from './sliceLeague';

const store = configureStore({
  reducer: {
    league: sliceLeague,
  },
});

export default store;
