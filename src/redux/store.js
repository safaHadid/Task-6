import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './postsSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
