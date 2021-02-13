import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import userReducer from '/home/bhubesh/netflix-clone/src/features/userSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
