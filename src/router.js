import VueRouter from 'vue-router'

import homecontainer from './components/homeContainer.vue'
import send from './components/send.vue'
import personalhomepage from './components/personalHomepage.vue'
import setting from './components/setting.vue'
import rank from './components/rank.vue'

import snack from './components/subcomponents/snack.vue'
import myfavourite from './components/subcomponents/myfavourite.vue'
import dynamic from './components/subcomponents/dynamic.vue'

import click from './components/subcomponents/click_rate.vue'
import like from './components/subcomponents/like_rate.vue'

import test from './components/test.vue'

import login from './components/views/login.vue'
import register from './components/views/register.vue'
import header from './components/views/header.vue'

import detail from './components/detail.vue'
import searchcontainer from './components/searchcontainer.vue';
//导入对应的路由组件

var router = new VueRouter({
    routes: [
        //重定向
        { path: '/', component: login },
        { path: '/register', component: register },
        {
            path: '/header',
            component: header,
            redirect: '/header/homecontainer',
            children: [
                { path: 'searchcontainer/:key', component: searchcontainer },
                // { path: 'searchcontainer', component: searchcontainer },
                { path: 'homecontainer', component: homecontainer },
                { path: 'send', component: send },
                {
                    path: 'personalhomepage',
                    component: personalhomepage,
                    redirect: '/header/personalhomepage/snack',
                    children: [
                        { path: 'snack', component: snack },
                        { path: 'myfavourite', component: myfavourite },
                        { path: 'dynamic', component: dynamic }
                    ]
                },
                { path: 'setting', component: setting },
                {
                    path: 'rank',
                    component: rank,
                    redirect: '/header/rank/click',
                    children: [
                        { path: 'click', component: click },
                        { path: 'like', component: like }
                    ]
                }
            ]
        },
        { path: '/detail/:id', component: detail },

        // {path:'/personalhomepage',
        //  component:personalhomepage,
        //  redirect:'/personalhomepage/snack',
        //  children:[
        //     {path:'snack',component:snack},
        //     {path:'myfavourite',component:myfavourite},
        //     {path:'dynamic',component:dynamic}
        //  ]},
        // {path:'/setting',component:setting},
        // {path:'/rank',
        // component:rank,
        // redirect:'/rank/click',
        // children:[
        //     {path:'click',component:click},
        //     {path:'like',component:like}
        // ]},
        // {path:'/test',component:test}
    ]

})

//把路由对象暴露出去
export default router