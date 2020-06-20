import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = [thunk]

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)

export default store
