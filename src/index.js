import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import store, { persistor } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { Loading } from './Components/Loading'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
