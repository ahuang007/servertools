import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 去掉重复点击后台报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        redirect: '/Home',

    },
        {
        path: '/Home',
        name: 'Home',
        component: () =>
            import('./views/Home.vue')
    },
    {
        path: '/Redis',
        name: 'Redis',
        component: () =>
            import('./views/Redis.vue')
    },
    {
        path: '/Memcache',
        name: 'Memcache',
        component: () =>
            import('./views/Memcache.vue')
    },
    {
        path: '/Mysql',
        name: 'Mysql',
        component: () =>
            import('./views/Mysql.vue')
    },
    {
        path: '/Manual',
        name: 'Manual',
        component: () =>
            import('./views/Manual.vue')
    },
    ],
})

