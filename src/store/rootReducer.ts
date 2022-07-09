import {samplesReducer} from 'src/sample/slice/samplesSlice';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  samples: samplesReducer,
});