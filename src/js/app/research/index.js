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
    // remoteData: '../data/data.json',
    // requestMethod: 'get',
    // requestSearchParam: 'query',
    data: [
      {
        id: 2,
        name: 'England'
      },
      {
        id: 1,
        name: 'Italy'
      },
      {
        id: 41,
        name: 'France'
      },
      {
        id: 16,
        name: 'Estonia'
      },
      {
        id: 91,
        name: 'Vietnam'
      }
    ]
  })
  document.getElementById('get-token-value').addEventListener('click', e => {
    window.alert(tokenTest.getValue())
  })

  console.log('call app init research')
}
