import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import AllCountries from '@/pages/AllCountries'
import SingleCountry from '@/pages/SingleCountry'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/countries/all',
            name: 'all_countries',
            component: AllCountries
        },
        {
            path: '/countries/:country',
            name: 'single_country',
            component: SingleCountry
        },
    ]
})