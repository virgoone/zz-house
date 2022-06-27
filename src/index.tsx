import React from 'react'
import ReactDOM from 'react-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import '@/style/index.scss'

window.__APP_LOADED__ = true

dayjs.locale('zh-cn')

const init = () => {
  const App = require('./App').default

  ReactDOM.render(<App />, document.getElementById('root'))
}

if (__DEV__) {
  module.hot.accept('./App', init)
}

init()
