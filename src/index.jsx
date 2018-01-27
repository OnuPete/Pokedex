import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import store from './store'

const rootEl = document.querySelector('root')

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
