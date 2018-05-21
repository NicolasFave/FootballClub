import React from 'react'
import { Provider } from 'react-redux'
import {
  combineReducers,
  compose,
  applyMiddleware,
  createStore,
} from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger'

const buildFormDecoratorStore = () => {
  const appReducer = combineReducers({
    form: formReducer,
  })
  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }
  const middlewares = []
  const loggerMiddleware = createLogger({
    collapsed: (getState, action) =>
      (action && action.type && action.type.indexOf('@@redux-form') !== -1)
  })
  middlewares.push(loggerMiddleware)
  const initialState = {}
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
  return store
}

const formDecoratorStore = buildFormDecoratorStore()

export const FormDecorator = (props) => (
  <Provider store={formDecoratorStore}>
    {props.children}
  </Provider>
)
