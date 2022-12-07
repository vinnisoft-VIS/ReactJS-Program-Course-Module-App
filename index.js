import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'assets/plugins/nucleo/css/nucleo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'assets/scss/argon-dashboard-react.scss'
import 'assets/scss/style.scss'

import { ClearCacheProvider } from 'react-clear-cache'
import store from './redux/index'
import App from './App'

ReactDOM.render(
  <ClearCacheProvider duration={5000}>
    <Provider store={store}>
      <App />
    </Provider>
  </ClearCacheProvider>,
  document.getElementById('root'),
)
