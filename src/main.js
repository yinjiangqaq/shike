import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'

import router from './router.js'

//bootstrap js依赖jquery
import '../node_modules/jquery/dist/jquery.min.js'
import $ from 'jquery';
//导入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'; //要引入css文件
// Vue.use(Mint);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入前后端交互的vue-resource
import Vueresource from 'vue-resource';
Vue.use(Vueresource);
//引入vue-cookie
import Vuecookie from 'vue-cookie';
Vue.use(Vuecookie);


import moment from 'moment';
//定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})
var vm = new Vue({
    el: '#app',
    $,
    render: c => c(app),
    router
})