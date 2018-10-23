import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import db from './datastore'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
import 'material-icons/css/material-icons.css'
import 'material-icons/iconfont/material-icons.css'
import '../../static/animatecss/animate.css'
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';
Vue.use(Croppa);

Vue.use(Notifications, {
    velocity
})

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$db = db


import '@fortawesome/fontawesome-free/css/all.css'

new Vue({
    components: {
        App
    },
    router,
    store,
    template: '<App/>'
}).$mount('#app')