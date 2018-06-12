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

  token(document.getElementById('test-token'), {})

  console.log('call app init research')
}
