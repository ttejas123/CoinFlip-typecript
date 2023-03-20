import { applyMiddleware, combineReducers, createStore } from 'redux';
import { enableMapSet } from 'immer'
import { configureStore } from '@reduxjs/toolkit'
import uiControlsReducer from './reducer/uicontrols';

enableMapSet()

const reducer = combineReducers({
  uiControlsReducer
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: true
})

export default store