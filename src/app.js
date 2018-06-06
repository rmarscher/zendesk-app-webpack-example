if (module.hot) {
  module.hot.accept()
}

import './app.scss'

console.log('Zendesk App Webpack Example is working')

console.log('ZAFClient', ZAFClient.init())
