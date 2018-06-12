import {default as modal} from '../../lib/modal'
import {default as tab} from '../../lib/tab'

export default function () {
  modal('#modal-open', '#modal', {})
  modal('#othermodalbutton', '#othermodal', {})
  tab('#tabs', {})
  tab('#tabs-2', {
    history: true
  })

  console.log('call app init research')
}
