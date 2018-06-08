import global from './global'
import app from './app'

document.addEventListener('DOMContentLoaded', function () {
  global()

  if (typeof vhmisApp === 'object') {
    app[vhmisApp.name]()
  }
})
