import {
  $notifyError as notifyError,
  $notifyInfo as notifyInfo,
  $notifySuccess as notifySuccess,
  $notifyWarn as notifyWarn,
  $notifyMessage as notifyMessage,
} from '../utils/notify'
export default {
  methods: {
    $notifySuccess(context) {
      notifySuccess(context, this)
    },
    $notifyError(context) {
      notifyError(context, this)
    },
    $notifyInfo(context) {
      notifyInfo(context, this)
    },
    $notifyWarn(context) {
      notifyWarn(context, this)
    },
    $notifyMessage(context) {
      notifyMessage(context, this)
    },
  },
}
