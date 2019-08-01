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

//引入mui的样式
// import './lib/mui/css/mui.min.css'
// import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    $,
    render: c => c(app),
    router //将路由对象挂载在vm实例上
})