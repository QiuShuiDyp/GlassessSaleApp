// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/mui/dist/css/mui.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
    el:'#app',
    data:{

    },
    // 渲染根组件app
    render:c=>c(app)
})
