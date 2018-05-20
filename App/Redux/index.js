import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as navReducer } from './NavigationRedux'
import competitionsReducer from './CompetitionsRedux'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: navReducer,
  competitions: competitionsReducer,
  form: formReducer,
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = rootSaga
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
