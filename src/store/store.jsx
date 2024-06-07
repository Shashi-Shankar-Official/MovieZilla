import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice.jsx';
import tvReducer from './reducers/tvSlice.jsx';
import personReducer from './reducers/peopleSlice.jsx';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
  },
})