import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fonts/iconfont.css'
// 第一步：导入button组件
import akButton from './views/ui/Button.vue'

Vue.config.productionTip = false

//  第二步：注册组件，设置(组件名，组件)
Vue.component(akButton.name, akButton)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
