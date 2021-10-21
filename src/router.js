import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Browser from '@/pages/Browser'
import Viewer from '@/pages/Viewer'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },

        {
            path: '/countries/browser',
            name: 'all_countries',
            component: Browser
        },
        {
            path: '/countries/:country',
            name: 'single_country',
            component: Viewer
        },
    ]
})