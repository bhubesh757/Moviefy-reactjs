import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '/home/bhubesh/netflix-clone/src/features/counterSlice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
