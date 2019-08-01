import VueRouter from 'vue-router';
import homecontainer from './components/homecontainer.vue';
import header from './views/header.vue';
import login from './views/login.vue';
import send from './components/send.vue';
//导入对应的路由组件

var router = new VueRouter({
    routes: [
        //重定向

        { path: '/', component: login }, //写根目录的组件，这么些，打开网页，自动从app组件跳转到的是login组件，
        {
            path: '/header',
            component: header,
            children: [
                { path: '/homecontainer', component: homecontainer },
                { path: '/send', component: send },
            ]
        }


    ]

})

//把路由对象暴露出去
export default router