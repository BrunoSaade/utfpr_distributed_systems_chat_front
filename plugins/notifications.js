import Vue from 'vue'
import Notifications from 'vue-notification'
import notify from '../mixins/notify'

Vue.use(Notifications)
Vue.mixin(notify)
