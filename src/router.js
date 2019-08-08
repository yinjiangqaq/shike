import VueRouter from 'vue-router';
import homecontainer from './components/homecontainer.vue';
import header from './views/header.vue';
import login from './views/login.vue';
import send from './components/send.vue';
import register from './views/register.vue';
import forget from './views/forget.vue';
import detail from './components/detail.vue';

//导入对应的路由组件

var router = new VueRouter({
    routes: [
        //重定向

        {
            path: '/',
            component: login,

        }, //写根目录的组件，这么些，打开网页，自动从app组件跳转到的是login组件，
        { path: '/register', component: register },
        { path: '/forget', component: forget },
        { path: '/header', redirect: '/header/homecontainer' }, //让header组件直接跳到/header/homecontainer
        {
            path: '/header',
            component: header,
            children: [
                { path: '/header/homecontainer', component: homecontainer },
                { path: '/header/send', component: send },
            ]
        },

        {
            path: '/detail/:id',
            component: detail,

        },



    ]

})

//把路由对象暴露出去
export default router