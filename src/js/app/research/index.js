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

  let tokenTest = token(document.getElementById('test-token'), {
    data: [
      {
        id: 2,
        name: 'ABC'
      },
      {
        id: 1,
        name: '1ABC'
      },
      {
        id: 41,
        name: '1ABdddC'
      },
      {
        id: 16,
        name: '1AvvvBC'
      },
      {
        id: 91,
        name: '1A2222BC'
      }
    ]
  })
  document.getElementById('get-token-value').addEventListener('click', e => {
    window.alert(tokenTest.getValue())
  })

  console.log('call app init research')
}
