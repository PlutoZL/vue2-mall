import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'
// mock开关
const mock = true
if (mock) {
  require('./mock/api')
}
// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    // 状态码为10代表未登录
    window.location.href = '/#/login'
  } else {
    // 报错信息
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
import router from './router.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
