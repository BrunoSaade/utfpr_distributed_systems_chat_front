import _debounce from 'lodash.debounce'
import Vue from 'vue'
const duration = 5000
const extraTime = 1200

function callAndRemove(context) {
  if (context.onClose) {
    context.onClose()
    context.onClose = null
  }
}
const $InotifySuccess = (context, that = Vue) => {
  const notify = that?.$notify ?? that.notify
  notify({
    type: 'success',
    duration,
    ...context,
    data: {
      callAndRemove: () => callAndRemove(context),
    },
  })
  setTimeout(() => {
    if (context.onClose) {
      context.onClose()
    }
  }, (context.duration || duration) + extraTime)
}
const $InotifyError = (context, that = Vue) => {
  const notify = that?.$notify ?? that.notify
  notify({
    type: 'error',
    duration,
    ...context,
    data: {
      callAndRemove: () => callAndRemove(context),
    },
  })
  setTimeout(() => {
    if (context.onClose) {
      context.onClose()
    }
  }, (context.duration || duration) + extraTime)
}
const $InotifyInfo = (context, that = Vue) => {
  const notify = that?.$notify ?? that.notify
  notify({
    type: 'info',
    duration,
    ...context,
    data: {
      callAndRemove: () => callAndRemove(context),
    },
  })
  setTimeout(() => {
    if (context.onClose) {
      context.onClose()
    }
  }, (context.duration || duration) + extraTime)
}
const $InotifyWarn = (context, that = Vue) => {
  const notify = that?.$notify ?? that.notify
  notify({
    type: 'warn',
    duration,
    ...context,
    data: {
      callAndRemove: () => callAndRemove(context),
    },
  })
  setTimeout(() => {
    if (context.onClose) {
      context.onClose()
    }
  }, (context.duration || duration) + extraTime)
}

export const $notifyInfo = _debounce($InotifyInfo, 500)
export const $notifyError = _debounce($InotifyError, 500)
export const $notifySuccess = _debounce($InotifySuccess, 500)
export const $notifyWarn = _debounce($InotifyWarn, 500)
export default {
  $notifyError,
  $notifyInfo,
  $notifySuccess,
  $notifyWarn,
}
