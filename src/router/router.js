import Vue from 'vue'
import  Router  from "vue-router";

Vue.use(Router)

const routes = [
    {
        name: 'lista', 
        path: '/',
         component: () => import(/* webpackChunkName:"ListPage" */'../modules/pokemon/pages/ListPage')
        // component: ListPage

    },
    {    name: 'about',
         path: '/about',
         component: () => import(/* webpackChunkName:"AboutPage" */'../modules/pokemon/pages/AboutPage')
     },
    {    name: 'pokemon',
         path: '/id',
         component: () => import(/* webpackChunkName:"PokemomPage" */'../modules/pokemon/pages/PokemonPage')
     },
    {
         path: '*',
         component: () => import('../modules/shared/pages/NoPageFound')
     },


]

const router = new Router({
    // mode: 'history',
    routes // short for `routes: routes`
  })


  export default router