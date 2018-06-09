import {default as modal} from '../../lib/modal'
import {default as tab} from '../../lib/tab'

export default function () {
  modal('#modal-open', '#modal', {})
  tab('#tabs', {})

  console.log('call app init research')
}
