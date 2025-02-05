import { createSlice, configureStore } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    moviesList: [], 
  },
  reducers: {
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export default store;
