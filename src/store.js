import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
/* eslint-disable no-underscore-dangle */
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */

const store = createStore()

export default store
