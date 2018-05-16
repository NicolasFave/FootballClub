import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as githubReducer } from './GithubRedux'
import { reducer as navReducer } from './NavigationRedux'
import { reducer as searchReducer } from './SearchRedux'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: navReducer,
  github: githubReducer,
  search: searchReducer,
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
