import {default as modal} from '../../lib/modal'
import {default as tab} from '../../lib/tab'
import token from '../../lib/token'

export default function () {
  modal('#modal-open', '#modal', {})
  modal('#othermodalbutton', '#othermodal', {})
  tab('#tabs', {})
  tab('#tabs-2', {
    history: true
  })

  let tokenTest = token(document.getElementById('test-token'), {})
  document.getElementById('get-token-value').addEventListener('click', e => {
    window.alert(tokenTest.getValue())
  })

  console.log('call app init research')
}
