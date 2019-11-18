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
        path: '/tb_game_data_pool_record',
        name: 'tb_game_data_pool_record',
        component: () =>
            import('./views/tb_game_data_pool_record.vue')
    },
    {
        path: '/tb_user_pay_income_record',
        name: 'tb_user_pay_income_record',
        component: () =>
            import('./views/tb_user_pay_income_record.vue')
    },
    {
        path: '/tb_game_service_stat_info',
        name: 'tb_game_service_stat_info',
        component: () =>
            import('./views/tb_game_service_stat_info.vue')
    },
    {
        path: '/tb_game_data_pool_record',
        name: 'tb_game_data_pool_record',
        component: () =>
            import('./views/tb_game_data_pool_record.vue')
    },
    {
        path: '/tb_game_user_stat_info',
        name: 'tb_game_user_stat_info',
        component: () =>
            import('./views/tb_game_user_stat_info.vue')
    },
    {
        path: '/Manual',
        name: 'Manual',
        component: () =>
            import('./views/Manual.vue')
    },
    ],
})

